import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = (props.value / props.maxValue) * 100 + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
