import React, { useState } from 'react';
import Link from 'next/link';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import DatePicker from 'react-datepicker';
import { FaDownload } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

const teacherExport = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [startDate2, setStartDate2] = useState(new Date());

	return (
		<div className='bg-cyan w-full h-screen flex items-center justify-center'>
			<div className='bg-purple w-12 h-72 border rounded-full flex flex-col items-center justify-center translate-x-6'>
				<Link href='/teacherHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
				<Link href='/teacherCalendar'>
					<AiOutlineCalendar className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/teacherSubscription'>
					<AiOutlinePlusCircle className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='teacherAnnouncements'>
					<TbSpeakerphone className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/login'>
					<BiLogOut className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
			</div>
			{/* Sidebar */}
			<div className='h-3/4 w-3/4 bg-white shadow-xl border rounded-lg flex flex-col'>
				<div className='flex flex-row justify-between h-min'>
					<div className='ml-16 mt-8  h-min'>
						<h1 className='font-bold text-2xl'>ReFocus</h1>
					</div>
					<div className='flex justify-around  h-min items-center mt-8 mr-8'>
						<h1 className='mx-3 cursor-pointer'>home</h1>
						<Link href='/kanban'>
							<h1 className='mx-3 cursor-pointer'>kanban</h1>
						</Link>
						<Link href='/teacherExport'>
							<h1 className='mx-3 cursor-pointer'>export</h1>
						</Link>
						<div className='mx-3 cursor-pointer'>
							<HiMenuAlt2 className='text-2xl' />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center mt-5 '>
					<h1 className='text-3xl font-bold'>EXPORT AS CSV</h1>
					<div className='flex flex-row mt-5'>
						<div>
							<h1 className='ml-52'>From:</h1>
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								className='ml-52'
							/>
						</div>
						<div>
							<h1 className='ml-52'>To:</h1>
							<DatePicker
								selected={startDate2}
								onChange={(date) => setStartDate2(date)}
								className='ml-52'
							/>
						</div>
					</div>
					<div className='w-32 h-12  mt-48 bg-purple flex justify-center items-center border rounded-full'>
						<FaDownload className='text-white text-2xl' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default teacherExport;
