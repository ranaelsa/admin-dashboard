import { useState } from "react";
import { motion } from "framer-motion";
import QuarantineModal from "./QuarantineModal";

const CLIENT_STATUS = [
  { name: "David", status: "Offline" },
  { name: "Cole", status: "Online" },
  { name: "Rana", status: "Online" },
  { name: "Destin", status: "Threat Detected" },
  { name: "Louis", status: "Disconnected" },
  { name: "Yves", status: "Disconnected" },
];

const statusColors = {
  "Threat Detected": "bg-red-800",
  Online: "bg-green-700",
  Offline: "bg-gray-600",
  Disconnected: "bg-gray-900",
};

const ClientGrid = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 h-full flex flex-col relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-100">Devices</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-72">
        {CLIENT_STATUS.map((client, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 flex flex-col justify-center shadow-md ${
              statusColors[client.status]
            } text-gray-100 ${
              client.status === "Threat Detected"
                ? "cursor-pointer hover:ring-2 hover:ring-white transition"
                : ""
            }`}
            onClick={() =>
              client.status === "Threat Detected" && setSelectedDevice(client)
            }
          >
            <span className="font-semibold text-lg">{client.name}</span>
            <span className="text-sm font-medium">{client.status}</span>
          </div>
        ))}
      </div>

      {selectedDevice && (
        <QuarantineModal
          deviceName={selectedDevice.name}
          onConfirm={() => setSelectedDevice(null)}
          onCancel={() => setSelectedDevice(null)}
        />
      )}
    </motion.div>
  );
};

export default ClientGrid;





// import { motion } from "framer-motion";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

// const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

// const THREATS_HOST_DATA = [
// 	{ name: "David", threats: 50 },
// 	{ name: "Cole", threats: 55 },
// 	{ name: "Rana", threats: 35 },
// 	{ name: "Destin", threats: 40 },
// ];

// const ThreatsByHostChart = () => {
// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-1 border border-gray-700 h-full flex flex-col'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.4 }}
// 		>
// 			<h2 className='text-lg font-medium mb-4 text-gray-100'>Threats by Host</h2>

// 			<div className='h-80'>
// 				<ResponsiveContainer>
// 					<BarChart data={THREATS_HOST_DATA}>
// 						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
// 						<XAxis dataKey='name' stroke='#9CA3AF' />
// 						<YAxis stroke='#9CA3AF' />
// 						<Tooltip
// 							contentStyle={{
// 								backgroundColor: "rgba(31, 41, 55, 0.8)",
// 								borderColor: "#4B5563",
// 							}}
// 							itemStyle={{ color: "#E5E7EB" }}
// 						/>
// 						<Bar dataKey={"threats"} fill='#8884d8'>
// 							{THREATS_HOST_DATA.map((entry, index) => (
// 								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// 							))}
// 						</Bar>
// 					</BarChart>
// 				</ResponsiveContainer>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default ThreatsByHostChart;
