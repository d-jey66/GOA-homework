import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LogOut, 
  User, 
  Settings, 
  Bell, 
  Calendar,
  PieChart,
  ListTodo,
  MessageCircle,
  FileText,
  ChevronDown,
  Search
} from 'lucide-react';

function ClientDashboard() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const notifications = [
    { id: 1, text: "New task added", time: "5 minutes ago" },
    { id: 2, text: "Meeting at 2:00 PM", time: "1 hour ago" },
    { id: 3, text: "Project completed successfully", time: "2 hours ago" },
  ];

  const tasks = [
    { id: 1, title: "Website Design", status: "In Progress", dueDate: "2024-01-15" },
    { id: 2, title: "API Integration", status: "Completed", dueDate: "2024-01-10" },
    { id: 3, title: "Testing Phase", status: "Pending", dueDate: "2024-01-20" },
  ];

  const activities = [
    { id: 1, text: "Document updated", time: "10:30" },
    { id: 2, text: "Comment added", time: "11:45" },
    { id: 3, text: "File uploaded", time: "13:15" },
  ];

  // List of Georgian names and surnames to randomly select from
  const georgianUsers = [
    { name: "Giorgi Beridze" },
    { name: "Nika Kvaratskhelia" },
    { name: "Dato Maisuradze" },
    { name: "Lasha Tsiklauri" },
    { name: "Giga Chikhladze" }
  ];

  // Select a random user for this session
  const currentUser = georgianUsers[Math.floor(Math.random() * georgianUsers.length)];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative"
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>

                {isNotificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
                    {notifications.map(notification => (
                      <div key={notification.id} className="px-4 py-2 hover:bg-gray-50">
                        <p className="text-sm text-gray-800">{notification.text}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Settings size={20} />
              </button>

              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-2"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User size={20} />
                  <span>{currentUser.name}</span>
                  <ChevronDown size={16} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <Link to="/" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Active Tasks</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <ListTodo className="text-blue-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Completed</p>
                  <h3 className="text-2xl font-bold">48</h3>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <PieChart className="text-green-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Meetings</p>
                  <h3 className="text-2xl font-bold">6</h3>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Calendar className="text-purple-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Messages</p>
                  <h3 className="text-2xl font-bold">24</h3>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <MessageCircle className="text-yellow-600" size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">Tasks</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {tasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div>
                          <h3 className="font-medium">{task.title}</h3>
                          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">Recent Activities</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {activities.map(activity => (
                      <div key={activity.id} className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-100 rounded-full">
                          <FileText size={16} className="text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard;