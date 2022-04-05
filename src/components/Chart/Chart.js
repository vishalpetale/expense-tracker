import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsValues);

  const chartbars = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxValue}
        label={dataPoint.label}
      />
    );
  });
  return <div className="chart">{chartbars}</div>;
}

export default Chart;
