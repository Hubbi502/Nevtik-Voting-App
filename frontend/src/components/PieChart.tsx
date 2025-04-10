import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { candidateApi } from "@/lib/api";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart: React.FC = () => {
  const data = {
    labels: ["Calon 1", "Calon 2", "Calon 3"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#CF4100", "#FE4F2D", "#FF0004"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            const label = context.label;
            const percentage = ((value / 100) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className='flex mt-4 items-center justify-center mt-4 p-4'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
