import React from 'react';

const AttendanceList = () => {
	return (
		<div className='w-full mx-4'>
			<div className='flex flex-row justify-between items-center'>
				<div className='avatar-attendance my-3 flex flex-row'>
					<div className='ml-3'>
						<h2>Attendance = 75.00%</h2>
						<h3 className='opacity-60 text-xs'>
							Updated 1 day ago
						</h3>
					</div>
				</div>
				<div className='student-name'>
					<h1>Student Name</h1>
					<h3 className='opacity-60 text-xs'>on 10.10.2022</h3>
				</div>
				<div>
					<h1>August 14, 2022</h1>
					<h3 className='opacity-60 text-xs'>6:30 pm</h3>
				</div>
				<div>
					<h1 className='bg-red-500 border rounded-full px-2 text-white mr-10'>
						LOW
					</h1>
				</div>
			</div>
		</div>
	);
};

export default AttendanceList;
