"use client"

import { Menu } from "lucide-react"
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "./ui/sheet"
import Sidebar from "./Sidebar"

const MobileSidebar = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>

				<SheetContent side="left" className="w-[400px] sm:w-[540px] p-0">
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	)
}

export default MobileSidebar

