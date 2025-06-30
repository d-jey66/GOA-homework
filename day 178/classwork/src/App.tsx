//CW 1

// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent } from "@/components/ui/card"
// import { useState } from "react"

// export default function App() {
//   const [settings, setSettings] = useState({
//     followEmail: true,
//     answerEmail: false,
//     mentionEmail: true,
//     newLaunches: false,
//     productUpdates: false,
//     newsletter: true,
//   })

//   const handleToggle = (key: keyof typeof settings) => {
//     setSettings(prev => ({ ...prev, [key]: !prev[key] }))
//   }

//   return (
//     <Card className="w-full max-w-md p-6 rounded-xl shadow-md">
//       <CardContent className="space-y-6">
//         <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//           Platform Settings
//         </h2>

//         <div>
//           <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">
//             Account
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.followEmail}
//                 onCheckedChange={() => handleToggle("followEmail")}
//               />
//               <Label>Email me when someone follows me</Label>
//             </div>
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.answerEmail}
//                 onCheckedChange={() => handleToggle("answerEmail")}
//               />
//               <Label>Email me when someone answers on my post</Label>
//             </div>
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.mentionEmail}
//                 onCheckedChange={() => handleToggle("mentionEmail")}
//               />
//               <Label>Email me when someone mentions me</Label>
//             </div>
//           </div>
//         </div>

//         <div>
//           <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">
//             Application
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.newLaunches}
//                 onCheckedChange={() => handleToggle("newLaunches")}
//               />
//               <Label>New launches and projects</Label>
//             </div>
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.productUpdates}
//                 onCheckedChange={() => handleToggle("productUpdates")}
//               />
//               <Label>Monthly product updates</Label>
//             </div>
//             <div className="flex items-center gap-4">
//               <Switch
//                 checked={settings.newsletter}
//                 onCheckedChange={() => handleToggle("newsletter")}
//               />
//               <Label>Subscribe to newsletter</Label>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


//CW 2

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Pencil } from "lucide-react"
// import { useState } from "react"
// import clsx from "clsx"

// export default function App() {
//   const [activeTab, setActiveTab] = useState("overview")

//   return (
//     <Card className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-b from-[#e5f0fb] to-[#f4f9ff]">
//       {/* Left: Avatar + Info */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <img
//             src="/logo.svg"
//             alt="Profile"
//             className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 p-3"
//           />
//           <Button
//             variant="secondary"
//             size="icon"
//             className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full p-1 shadow-md"
//           >
//             <Pencil className="w-3 h-3" />
//           </Button>
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold text-gray-900">Alec Thompson</h2>
//           <p className="text-sm text-gray-500">alec@simmmpIe.com</p>
//         </div>
//       </div>

//       {/* Right: Tabs */}
//       <div className="flex items-center gap-6">
//         {[
//           { id: "overview", label: "Overview", icon: "📦" },
//           { id: "teams", label: "Teams", icon: "👥" },
//           { id: "projects", label: "Projects", icon: "🛠️" },
//         ].map(tab => (
//           <Button
//             key={tab.id}
//             variant={activeTab === tab.id ? "default" : "ghost"}
//             className={clsx("text-sm font-semibold px-4 py-2", {
//               "shadow-md": activeTab === tab.id,
//               "text-gray-700": activeTab !== tab.id,
//             })}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             <span className="mr-1">{tab.icon}</span>
//             {tab.label.toUpperCase()}
//           </Button>
//         ))}
//       </div>
//     </Card>
//   )
// }
