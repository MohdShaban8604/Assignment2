import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartWithImage = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Define your data here
        backgroundColor: ['#FF5733', '#33FF57', '#5733FF'], // Define colors
      },
    ],
  };

//   const imageSrc = 'your_image_url.jpg'; // Replace with your image URL

  return (
    <div>
      <div style={{ width: '50%', float: 'left' }}>
        <Pie data={data} />
      </div>
      <div style={{ width: '50%', float: 'left' }}>
        {/* <img src={imageSrc} alt="Image" style={{ width: '100%', height: 'auto' }} /> */}
      </div>
    </div>
  );
};

export default PieChartWithImage;
