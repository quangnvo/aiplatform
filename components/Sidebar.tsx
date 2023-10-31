"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"


const montserrat = Montserrat({
	weight: "600",
	
})

const Sidebar = () => {
	return (
		<div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
			<div className="px-3 py-2 flex-1 border-2 border-red-500">
				<Link
					href="/dashboard"
					className="flex items-center pl-3 mb-14 border-2 border-green-500"
				>
					<div className="relative w-8 h-8 mr-4">
						<Image
							src="https://picsum.photos/200"
							alt="Logo"
							fill
							className="rounded-full"
						/>
					</div>
					<h1 className="text-2xl font-bold">
						AI Platform
					</h1>
				</Link>
			</div>
		</div>
	)
}

export default Sidebar