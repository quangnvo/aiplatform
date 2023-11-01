import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>

			{/* Button toogle when in mobile */}
			<div className='md:hidden flex justify-center items-center'>
				<MobileSidebar />
			</div>

			{/* Avatar */}
			<div className='flex w-full justify-end'>
				<UserButton afterSignOutUrl='/' />
			</div>
		</div>
	)
}

export default Navbar