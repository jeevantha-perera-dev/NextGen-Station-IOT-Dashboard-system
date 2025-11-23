import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useStationData = () => {
  const [status, setStatus] = useState({
    fire_alert: false,
    rain_detected: false,
    motion_platform_1: false,
    motion_platform_2: false
  });
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listener for Sensors
    const statusRef = ref(db, 'station_status');
    const unsubscribeStatus = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setStatus(data);
    });

    // Listener for Users
    const usersRef = ref(db, 'users');
    const unsubscribeUsers = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setUsers(data);
      setLoading(false);
    });

    return () => {
      unsubscribeStatus();
      unsubscribeUsers();
    };
  }, []);

  return { status, users, loading };
};