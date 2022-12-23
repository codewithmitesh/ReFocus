import React from 'react';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
	AiFillPushpin,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';
import Chart from '../components/Chart';

const studentHome = () => {
	return (
		<div className='bg-cyan w-full h-screen flex items-center justify-center'>
			<div className='bg-purple w-12 h-72 border rounded-full flex flex-col items-center justify-center translate-x-6'>
				<Link href='/studentHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
				<Link href='/studentCalendar'>
					<AiOutlineCalendar className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/studentSubscription'>
					<AiOutlinePlusCircle className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='studentAnnouncements'>
					<TbSpeakerphone className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/login'>
					<BiLogOut className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
			</div>
			{/* Sidebar */}
			<div className='h-3/4 w-3/4 bg-white shadow-xl border rounded-lg flex flex-col'>
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
						<h1 className='mx-3 cursor-pointer hover:text-purple-900 transition-transform'>
							profile
						</h1>
						<div className='mx-3'>
							<HiMenuAlt2 className='text-2xl cursor-pointer' />
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-center mt-5'>
					{/* box 1 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md flex flex-col'>
						<div className='flex justify-between mx-4 mt-4'>
							<h2>Attendance</h2>
							<div>
								<FaGraduationCap className='text-xl' />
							</div>
						</div>
						<h1 className='text-4xl font-bold pl-4 border-b-2 pb-2 mt-2'>
							85%
						</h1>
						<p className='text-sm px-4 mt-1'>
							Total responses: 300
						</p>
						<div>
							<div className='h-3 w-40 bg-gray-300 ml-10 border rounded-lg mt-2'></div>
							<div className='h-3 w-32 bg-purple ml-10 mt-5 border rounded-lg -translate-y-8'></div>
						</div>
					</div>
					{/* box 2 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md flex flex-col mx-10'>
						<h1 className='mt-5 ml-5'>SELF STUDY</h1>
						<h1 className='text-4xl font-bold pl-4 border-b-2 pb-2 mt-2'>
							21
						</h1>
						<h1 className='text-sm px-4 mt-1'>
							<span className='font-bold'>60%</span> Daily goals
							achieved
						</h1>
						<h1 className='text-sm px-4'>
							<span className='font-bold'>72</span> This week
						</h1>
					</div>
					{/* box 3 */}
					<div className='w-60 h-40 bg-white shadow-lg rounded-md'>
						<div className='flex justify-between mt-5 mx-5'>
							<h1>Attendance</h1>
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
				<Chart />
			</div>
		</div>
	);
};

export default studentHome;
