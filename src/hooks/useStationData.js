import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useStationData = () => {
  const [status, setStatus] = useState({
    fire_alert: false,
    fire_level: 0,
    rain_detected: false,
    rain_raw: 0,
    motion_platform_1: false,
    motion_platform_2: false,
    servoGate: "CLOSED",
    barrier_status: "CLOSED"
  });

  const [control, setControl] = useState({});
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const statusRef = ref(db, 'station_status');
    const unsubscribeStatus = onValue(statusRef, (snapshot) => {
      const data = snapshot.val() || {};
      setStatus(prev => ({ ...prev, ...data }));
    });

    const controlRef = ref(db, 'station_control');
    const unsubscribeControl = onValue(controlRef, (snapshot) => {
      const data = snapshot.val() || {};
      setControl(data);
    });

    const usersRef = ref(db, 'users');
    const unsubscribeUsers = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      setUsers(data);
      setLoading(false);
    });

    return () => {
      unsubscribeStatus();
      unsubscribeControl();
      unsubscribeUsers();
    };
  }, []);

  return { status, control, users, loading };
};