import React from 'react';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
	AiFillPushpin,
	AiFillPlusCircle,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';
import AttendanceList from '../components/AttendanceList';
import { useState, useEffect } from 'react';
import axios from 'axios';



const teacherHome = () => {

	const [meetData, setMeetData] = useState('')
	const [data, setData] = useState([])
	const responseData = []
	var res = []
	// // this is already working
	const handleMeetSubmit = async (e) => {
		e.preventDefault();
		try {
			// console.log(meetData)
			console.log("query fired" + meetData)
			const response = await axios.post('http://localhost:8000/meet/getdata',
				JSON.stringify({ meet: meetData }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				}
			);
			console.log("Runed")

			// responseData = response.data;
			console.log(response.data)
			function json2array(json) {
				var result = [];
				var keys = Object.keys(json);
				keys.forEach(function (key) {
					result.push(json[key]);
				});
				return result;
			}
			res = json2array(response.data)

			console.log(res)
			// setData([...new Set([...data, ...response.data])])
			setData([...new Set([...res])])
			// setData(res)
			typeof data === 'object'
			console.log(data)
			// const cate = response.data.
			// console.log(JSON.stringify(response?.data));
			// console.log(JSON.stringify(response));
			// console.log(response.data);

		} catch (err) {
			if (!err?.response) {
				console.log('No Server Response');
			} else if (err.response?.status === 400) {
				console.log('Missing Username or Password');
			} else if (err.response?.status === 401) {
				console.log('Unauthorized');
			} else {
				console.log('Login Failed');
			}
			// errRef.current.focus();
		}
	}
	console.log("THis is res:- " + res);

	return (
		<div className='bg-cyan w-full h-[200vh] flex items-center justify-center'>
			<div className='bg-purple w-12 h-72 border rounded-full flex flex-col items-center justify-center translate-x-6'>
				<Link href='/teacherHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
				<Link href='/teacherCalendar'>
					<AiOutlineCalendar className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/teacherSubscription' >
					<AiOutlinePlusCircle className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/teacherAnnouncements'>
					<TbSpeakerphone className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/login'>
					<BiLogOut className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
			</div>
			{/** removed h-3/4 from here */}
			<div className='h-3/4 w-3/4 bg-white shadow-xl border rounded-lg flex flex-col pb-5 '>
				<div className='flex flex-row justify-between h-min'>
					<div className='ml-20 mt-8  h-min'>
						<h1 className='font-bold text-2xl'>ReFocus</h1>
					</div>
					<div className='flex justify-around h-min items-center mt-8 mr-20'>
						<h1 className='mx-3 cursor-pointer hover:text-purple-900 transition-transform'>
							home
						</h1>
						<Link href='/kanban'>
							<h1 className='mx-3 cursor-pointer'>kanban</h1>
						</Link>
						<Link href='/teacherExport'>
							<h1 className='mx-3 cursor-pointer hover:text-purple-900 transition-transform'>
								export
							</h1>
						</Link>
						<div className='mx-3'>
							<HiMenuAlt2 className='text-2xl cursor-pointer' />
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-center mt-5'>
					{/* box 1 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md flex flex-col'>
						<div className='flex justify-between mx-4 mt-4'>
							<h2>ACTIVITIES</h2>
							<div>
								<FaGraduationCap className='text-xl' />
							</div>
						</div>
						<h1 className='text-4xl font-bold pl-4 border-b-2 pb-2 mt-2'>
							85
						</h1>
						<p className='text-sm px-4 mt-1'>
							Total activities: 200
						</p>
						<div>
							<div className='h-3 w-40 bg-gray-300 ml-10 border rounded-lg mt-2'></div>
							<div className='h-3 w-32 bg-purple ml-10 mt-5 border rounded-lg -translate-y-8'></div>
						</div>
					</div>
					{/* box 2 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md flex flex-col mx-10'>
						<h1 className='mt-5 ml-5'>TOTAL MEETINGS</h1>
						<h1 className='text-4xl font-bold pl-4 border-b-2 pb-2 mt-2'>
							33
						</h1>
						<div className='flex flex-col items-center justify-center'>
							<h1>New Meeting</h1>
							<Link href='http://localhost:3001/'>
								<AiFillPlusCircle className='text-3xl text-indigo-600 cursor-pointer' />
							</Link>
						</div>
					</div>
					{/* box 3 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md'>
						<div className='flex justify-between mt-5 mx-5'>
							<h1>ANNOUNCEMENTS</h1>
							<AiFillPushpin className='text-2xl' />
						</div>
						<h1 className='text-4xl font-bold pl-4 border-b-2 pb-2 mt-2'>
							01
						</h1>
						<h1 className='mx-5 mt-1'>
							Go to announcements {'>>'}
						</h1>
					</div>
				</div>
				<div className='flex items-center justify-center mt-10'>
					<form onSubmit={handleMeetSubmit}>
						<input
							type='text'
							name='meetcode'
							onChange={(e) => setMeetData(e.target.value)}
							placeholder='Enter meet code'
							className=' border-2 border-b-slate-400 text-center rounded-md w-64'
						/>
						<div className='flex items-center justify-center'>
							<input
								type='submit'
								value='Submit'
								className='bg-purple text-white text-2xl px-4 rounded-full mt-4'
							/>
						</div>
					</form>
				</div>
				{/* {data.map((eachAttendence) => {
					// <AttendanceList />
					<h1>THis is data</h1>
					// console.log(eachAttendence);
				})} */}
				<div className='bg-white shadow-md  w-5/6 h-3/5 mt-5 mx-auto flex flex-col overflow-auto'>
					<h1 className='font-bold ml-10 mt-2'>Recent Activities</h1>

					{data.map((eachAttendence) => {
						return <AttendanceList attendence={eachAttendence} />
					})}
					{/* <AttendanceList />
					
					<AttendanceList />
					<AttendanceList />
					<AttendanceList />
					<AttendanceList /> */}
				</div>
			</div>
		</div >
	);
};

export default teacherHome;
