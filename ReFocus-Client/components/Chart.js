import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	LineElement,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
} from 'chart.js';
ChartJS.register(
	Title,
	Tooltip,
	LineElement,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	Filler,
);

function Chart() {
	const [data, setData] = useState({
		labels: [
			'Jan',
			'Feb',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'Oct',
			'Nov',
			'Dec',
		],
		datasets: [
			{
				label: 'Attendance Record',
				data: [84, 70, 86, 92, 71, 82, 91, 89, 91, 73, 91, 88],
				backgroundColor: 'rgba(203,195,227,0.4)',
				borderColor: 'indigo',
				tension: 0.1,
				beginAtZero: true,
				fill: true,
				pointStyle: 'rect',
				pointBorderColor: 'blue',
				pointBackgroundColor: '#fff',
				showLine: true,
			},
		],
	});
	return (
		<div className='Chart w-[42vw]  mx-auto'>
			<Line data={data}>Hello</Line>
		</div>
	);
}

export default Chart;
