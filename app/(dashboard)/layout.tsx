import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="h-screen relative border-2 border-red-600">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
				<div>
					<Sidebar />
				</div>
			</div>

			<main className="md:pl-72">
				<Navbar />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout