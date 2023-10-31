import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>

			{/* Button toogle when in mobile */}
			<Button
				variant="ghost"
				size="icon"
				className='md:hidden'
			>
				<Menu />
			</Button>

			{/* Avatar */}
			<div className='flex w-full justify-end'>
				<UserButton afterSignOutUrl='/' />
			</div>
		</div>
	)
}

export default Navbar