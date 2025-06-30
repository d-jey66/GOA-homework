import React from 'react';
import { 
  Home, 
  BarChart3, 
  CreditCard, 
  FileCode, 
  User, 
  LogIn, 
  UserPlus, 
  HelpCircle,
  Search,
  Bell,
  Settings,
  Users,
  FolderOpen,
  Plus,
  Facebook,
  Twitter,
  Linkedin,
  UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export default function DashboardReplica() {
  const [activeNavItem, setActiveNavItem] = React.useState('Dashboard');
  const [activeAccountItem, setActiveAccountItem] = React.useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-52 bg-white shadow-sm border-r">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-gray-900">argon</span>
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-semibold text-gray-700">chakra</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <div 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
              activeNavItem === 'Dashboard' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveNavItem('Dashboard')}
          >
            <Home size={18} />
            <span className={`text-sm ${activeNavItem === 'Dashboard' ? 'font-medium' : ''}`}>Dashboard</span>
          </div>
          <div 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
              activeNavItem === 'Tables' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveNavItem('Tables')}
          >
            <BarChart3 size={18} />
            <span className={`text-sm ${activeNavItem === 'Tables' ? 'font-medium' : ''}`}>Tables</span>
          </div>
          <div 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
              activeNavItem === 'Billing' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveNavItem('Billing')}
          >
            <CreditCard size={18} />
            <span className={`text-sm ${activeNavItem === 'Billing' ? 'font-medium' : ''}`}>Billing</span>
          </div>
          <div 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
              activeNavItem === 'RTL' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveNavItem('RTL')}
          >
            <FileCode size={18} />
            <span className={`text-sm ${activeNavItem === 'RTL' ? 'font-medium' : ''}`}>RTL</span>
          </div>
        </nav>

        {/* Account Pages */}
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">ACCOUNT PAGES</h3>
          <div className="space-y-1">
            <div 
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                activeAccountItem === 'Profile' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveAccountItem('Profile')}
            >
              <User size={18} />
              <span className={`text-sm ${activeAccountItem === 'Profile' ? 'font-medium' : ''}`}>Profile</span>
            </div>
            <div 
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                activeAccountItem === 'Sign In' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveAccountItem('Sign In')}
            >
              <LogIn size={18} />
              <span className={`text-sm ${activeAccountItem === 'Sign In' ? 'font-medium' : ''}`}>Sign In</span>
            </div>
            <div 
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                activeAccountItem === 'Sign Up' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveAccountItem('Sign Up')}
            >
              <UserPlus size={18} />
              <span className={`text-sm ${activeAccountItem === 'Sign Up' ? 'font-medium' : ''}`}>Sign Up</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="px-4 py-4 mt-8">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <HelpCircle className="text-blue-500" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Need help?</h4>
            <p className="text-xs text-gray-600 mb-3">Please check our docs</p>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs mb-2">
              DOCUMENTATION
            </Button>
            <Button variant="outline" className="w-full text-xs border-gray-300">
              UPGRADE TO PRO
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600">
        {/* Header */}
        <div className="bg-transparent p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white">
              <span className="text-sm opacity-80">Pages / Billing</span>
              <h1 className="text-lg font-semibold">Billing</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  placeholder="Type here..." 
                  className="pl-10 w-64 bg-white"
                />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <User size={16} className="mr-1" />
                Sign In
              </Button>
              <Bell className="text-white cursor-pointer" size={20} />
              <Settings className="text-white cursor-pointer" size={20} />
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Alec Thompson</h2>
                  <p className="text-gray-500">alec@simmmple.com</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-gray-600">
                  OVERVIEW
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600">
                  <Users size={16} className="mr-1" />
                  TEAMS
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600">
                  <FolderOpen size={16} className="mr-1" />
                  PROJECTS
                </Button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Platform Settings */}
            <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Platform Settings</h3>
              <p className="text-xs text-gray-500 mb-6">ACCOUNT</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Email me when someone follows me</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Email me when someone answers on my post</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Email me when someone mentions me</span>
                  <Switch />
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-6 mb-4">APPLICATION</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">New launches and projects</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Monthly product updates</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Subscribe to newsletter</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <p className="text-sm text-gray-600 mb-6">
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-sm font-medium text-gray-700 w-20">Full Name:</span>
                  <span className="text-sm text-gray-600">Alec M. Thompson</span>
                </div>
                <div className="flex">
                  <span className="text-sm font-medium text-gray-700 w-20">Mobile:</span>
                  <span className="text-sm text-gray-600">(44) 123 1234 123</span>
                </div>
                <div className="flex">
                  <span className="text-sm font-medium text-gray-700 w-20">Email:</span>
                  <span className="text-sm text-gray-600">alecthompson@mail.com</span>
                </div>
                <div className="flex">
                  <span className="text-sm font-medium text-gray-700 w-20">Location:</span>
                  <span className="text-sm text-gray-600">United States</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-20">Social Media:</span>
                  <div className="flex space-x-2">
                    <Facebook size={16} className="text-blue-600 cursor-pointer" />
                    <Twitter size={16} className="text-blue-400 cursor-pointer" />
                    <Linkedin size={16} className="text-blue-700 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Conversations */}
            <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversations</h3>
              
              <div className="space-y-4">
                {[
                  { name: "Esthera Jackson", message: "Hi! I need more information...", time: "REPLY", avatar: "EJ" },
                  { name: "Esthera Jackson", message: "Awesome work, can you change...", time: "REPLY", avatar: "EJ" },
                  { name: "Esthera Jackson", message: "Have a great afternoon...", time: "REPLY", avatar: "EJ" },
                  { name: "Esthera Jackson", message: "About files I can...", time: "REPLY", avatar: "EJ" }
                ].map((conv, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {conv.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{conv.name}</h4>
                      <p className="text-xs text-gray-500">{conv.message}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-500 text-xs">
                      {conv.time}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="col-span-12 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                  <p className="text-sm text-gray-500">Architects design houses</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {/* Modern Project */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23f3f4f6'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='sans-serif' font-size='14'%3EModern Interior%3C/text%3E%3C/svg%3E"
                      alt="Modern interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Modern</h4>
                    <p className="text-sm text-gray-600 mb-4">As Uber works through a huge amount of internal management turmoil.</p>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                        VIEW ALL
                      </Button>
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scandinavian Project */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23f3f4f6'%3E%3Crect width='400' height='300' fill='%23d1d5db'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='sans-serif' font-size='14'%3EScandinavian Room%3C/text%3E%3C/svg%3E"
                      alt="Scandinavian room"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Scandinavian</h4>
                    <p className="text-sm text-gray-600 mb-4">Music is something that every person has his or her own specific opinion about.</p>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                        VIEW ALL
                      </Button>
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Minimalist Project */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23f3f4f6'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='sans-serif' font-size='14'%3EMinimalist Space%3C/text%3E%3C/svg%3E"
                      alt="Minimalist space"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Minimalist</h4>
                    <p className="text-sm text-gray-600 mb-4">Different people have different tastes, and various types of music.</p>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                        VIEW ALL
                      </Button>
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Create New Project */}
                <div className="flex flex-col items-center justify-center aspect-video bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <Plus className="text-gray-400 mb-2" size={32} />
                  <span className="text-sm font-medium text-gray-600">Create a New Project</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-between text-white/70 text-sm">
              <div className="flex items-center space-x-1">
                <span>© 2021. Made with</span>
                <span className="text-red-400">❤</span>
                <span>by</span>
                <span className="text-white">Creative Tim</span>
                <span>&</span>
                <span className="text-white">Simmmple</span>
                <span>for a better web.</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-white cursor-pointer">Creative Tim</span>
                <span className="text-white cursor-pointer">Simmmple</span>
                <span className="text-white cursor-pointer">Blog</span>
                <span className="text-white cursor-pointer">License</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}