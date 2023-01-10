import React from 'react';

const AttendanceList = ({ attendence }) => {
	return (
		<div className='w-full mx-4'>
			<div className='flex flex-row justify-evenly items-center'>
				<div className='avatar-attendance my-3 flex flex-row'>
					<div className='ml-3'>
						<h2>Student Email = {attendence.email}</h2>
						<h3 className='opacity-60 text-xs'>
							Student Id = {attendence._id}
						</h3>
					</div>
				</div>
				<div className='student-name'>
					<h1>Meet Id {attendence.meet_id}</h1>
					<h3 className='opacity-60 text-xs'>Date : {attendence.createdAt.substr(0, 10)}</h3>
				</div>
				<div>
					<h1>Active Time : {attendence.active_time} sec</h1>
					<h3 className='opacity-60 text-xs'></h3>
				</div>
				<div className='student-name ml-3'>
					{/* className='bg-red-500 border rounded-full px-2 text-white mr-10' */}
					<h2 className='opacity-60 text-xs'>
						Activity1:-{attendence.popup_2 ? <h3>Yes</h3> : <h3>No</h3>}
					</h2>
					<h2 className='opacity-60 text-xs'>
						A2 :- {attendence.popup_3 ? <h3>Yes</h3> : <h3>No</h3>}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default AttendanceList;
