import React from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

function TopBar(props) {
	return (
		<div className='h-16 pl-40 fixed bg-purple w-full flex items-center justify-between pr-5'>
			<div className='flex space-x-6'>
				<Link href='/studentHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
			</div>
			<div className='flex items-center text-white'>
				<h3 className='font-bold mr-3'>Student Name</h3>
				<div className='h-12 w-12 border rounded-full bg-rose-800'></div>
			</div>
		</div>
	);
}

export default TopBar;
