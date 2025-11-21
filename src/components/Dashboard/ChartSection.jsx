import React from "react";
import TrainsChart from "./TrainsChart";
import PassengersChart from "./PassengersChart";
function ChartSection(){
    return <div className="grid grid-cols-1 xl:grid-cols-3 gap-6"> 
    <div className="xl:col-span-2">
        <TrainsChart/>
    </div>
    <div className="space-y-6">
        <PassengersChart/>
    </div>
    </div>
}
export default ChartSection;