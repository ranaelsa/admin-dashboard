import { Monitor, Skull, AlertTriangle, OctagonAlert } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ThreatsByHostChart from "../components/overview/ClientGrid";
import DetectedRansomwareTable from "../components/overview/DetectedRansomwareTable";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='System Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Threats Detected' icon={AlertTriangle} value='450' color='rgb(73, 130, 216)' />
					<StatCard name='Processes Killed' icon={Skull} value='400' color='rgb(73, 130, 216)' />
					<StatCard name='Devices' icon={Monitor} value='6' color='rgb(73, 130, 216)' />
					<StatCard name='Compromises' icon={OctagonAlert} value='50' color='rgb(73, 130, 216)' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ThreatsByHostChart />
					<DetectedRansomwareTable />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
