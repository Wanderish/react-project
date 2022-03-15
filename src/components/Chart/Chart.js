import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataSetValues = props.dataSet.map((data) => data.value);
  const maxValue = Math.max(...dataSetValues);

  return (
    <div className="chart">
      {props.dataSet.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          max={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
