import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "John", math: 85, chemistry: 78, physics: 90 },
    { id: 2, name: "Emma", math: 92, chemistry: 85, physics: 88 },
    { id: 3, name: "Michael", math: 78, chemistry: 92, physics: 83 },
    { id: 4, name: "Sophia", math: 89, chemistry: 80, physics: 91 },
    { id: 5, name: "William", math: 95, chemistry: 87, physics: 95 },
    { id: 6, name: "Olivia", math: 80, chemistry: 92, physics: 78 },
    { id: 7, name: "James", math: 88, chemistry: 85, physics: 82 },
    { id: 8, name: "Ava", math: 91, chemistry: 89, physics: 88 },
    { id: 9, name: "Benjamin", math: 83, chemistry: 78, physics: 86 },
    { id: 10, name: "Charlotte", math: 87, chemistry: 90, physics: 84 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
