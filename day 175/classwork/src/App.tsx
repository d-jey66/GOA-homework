import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Activity, 
  Database, 
  Users, 
  Server, 
  Shield, 
  Monitor, 
  Cpu, 
  HardDrive,
  Network,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Globe,
  Code,
  Layers,
  Zap,
  BarChart3,
  Lock,
  Clock,
  User
} from 'lucide-react';

interface ApiEndpoint {
  method: string;
  path: string;
  status: string;
  responseTime: number;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Developer' | 'User';
  status: 'Online' | 'Away' | 'Offline';
  lastActive: string;
  avatar: string;
}

interface SystemMetric {
  label: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

const TechFlowPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiEndpoints, setApiEndpoints] = useState<ApiEndpoint[]>([
    { method: 'GET', path: '/api/users', status: '200 OK', responseTime: 45 },
    { method: 'POST', path: '/api/auth/login', status: '200 OK', responseTime: 123 },
    { method: 'PUT', path: '/api/users/profile', status: '200 OK', responseTime: 89 },
    { method: 'GET', path: '/api/analytics/dashboard', status: '200 OK', responseTime: 67 },
    { method: 'DELETE', path: '/api/cache/clear', status: '204 No Content', responseTime: 12 }
  ]);

  const [systemMetrics] = useState<SystemMetric[]>([
    { label: 'Uptime', value: '99.9%', change: '+0.1%', icon: Activity, color: 'text-green-600' },
    { label: 'API Requests', value: '1.2M', change: '+15%', icon: Globe, color: 'text-blue-600' },
    { label: 'Active Users', value: '15.7K', change: '+8%', icon: Users, color: 'text-purple-600' },
    { label: 'Data Processed', value: '847GB', change: '+23%', icon: Database, color: 'text-orange-600' }
  ]);

  const [users] = useState<UserData[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@techflow.com',
      role: 'Admin',
      status: 'Online',
      lastActive: '2 minutes ago',
      avatar: 'JD'
    },
    {
      id: '2',
      name: 'Alice Smith',
      email: 'alice.smith@techflow.com',
      role: 'Developer',
      status: 'Online',
      lastActive: '5 minutes ago',
      avatar: 'AS'
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob.johnson@techflow.com',
      role: 'User',
      status: 'Away',
      lastActive: '1 hour ago',
      avatar: 'BJ'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@techflow.com',
      role: 'Developer',
      status: 'Online',
      lastActive: '10 minutes ago',
      avatar: 'SW'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setApiEndpoints(prev => prev.map(endpoint => ({
        ...endpoint,
        responseTime: Math.floor(Math.random() * 200) + 20
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-100 text-red-800';
      case 'Developer': return 'bg-blue-100 text-blue-800';
      case 'User': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'text-green-600';
      case 'Away': return 'text-yellow-600';
      case 'Offline': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechFlow Platform
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                All Systems Online
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Web Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete full-stack architecture with microservices, databases, and user management
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Monitor className="h-5 w-5 mr-2" />
            Explore Platform
          </Button>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Architecture
            </TabsTrigger>
            <TabsTrigger value="apis" className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              APIs
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {metric.label}
                    </CardTitle>
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {metric.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    System Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU Usage</span>
                      <span>43%</span>
                    </div>
                    <Progress value={43} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Memory Usage</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Storage Usage</span>
                      <span>84%</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Security Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      SSL Certificate valid until Dec 2025
                    </AlertDescription>
                  </Alert>
                  <Alert className="bg-green-50 border-green-200">
                    <Shield className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Firewall active, 0 threats detected
                    </AlertDescription>
                  </Alert>
                  <Alert className="bg-yellow-50 border-yellow-200">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      12 failed login attempts in last 24h
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-blue-600" />
                    Frontend Layer
                  </CardTitle>
                  <CardDescription>
                    Modern React-based user interface with responsive design
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      React 18 with Hooks & TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      shadcn/ui Components
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Tailwind CSS Styling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Progressive Web App
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time Updates
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-6 w-6 text-purple-600" />
                    Backend Services
                  </CardTitle>
                  <CardDescription>
                    Scalable microservices architecture with API gateway
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Node.js & Express.js
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Microservices Pattern
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Docker Containers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Load Balancing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Auto-scaling
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-green-600" />
                    Database Layer
                  </CardTitle>
                  <CardDescription>
                    Multi-database approach with caching and replication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      PostgreSQL Primary
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      MongoDB Documents
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Redis Caching
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Master-Slave Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Backup & Recovery
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-6 w-6 text-orange-600" />
                    API Gateway
                  </CardTitle>
                  <CardDescription>
                    Centralized API management with security and monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      RESTful APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      GraphQL Support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Rate Limiting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      JWT Authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      API Analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* APIs Tab */}
          <TabsContent value="apis" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  API Monitor
                </CardTitle>
                <CardDescription>
                  Real-time API endpoint monitoring and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Live API Status
                  </div>
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                      <div className="flex items-center gap-3">
                        <Badge className={getMethodColor(endpoint.method)}>
                          {endpoint.method}
                        </Badge>
                        <span className="text-gray-300">{endpoint.path}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <span>{endpoint.status}</span>
                        <span className="text-gray-500">-</span>
                        <span>{endpoint.responseTime}ms</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Request Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">1.2M</div>
                  <p className="text-sm text-gray-600">Requests processed today</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Avg Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">85ms</div>
                  <p className="text-sm text-gray-600">Across all endpoints</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Error Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">0.1%</div>
                  <p className="text-sm text-gray-600">4xx & 5xx responses</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts, roles, and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                  {user.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{user.email}</td>
                          <td className="py-3 px-4">
                            <Badge className={getRoleBadgeColor(user.role)}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                user.status === 'Online' ? 'bg-green-500' :
                                user.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                              }`} />
                              <span className={getStatusColor(user.status)}>{user.status}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {user.lastActive}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">15,742</div>
                  <p className="text-sm text-gray-600">+12% this month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    Active Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">2,847</div>
                  <p className="text-sm text-gray-600">Currently online</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Admin Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">23</div>
                  <p className="text-sm text-gray-600">With admin privileges</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-blue-600" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Response Time</span>
                    <span className="font-bold text-blue-600">85ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Memory Usage</span>
                    <span className="font-bold text-orange-600">67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CPU Load</span>
                    <span className="font-bold text-green-600">43%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Connections</span>
                    <span className="font-bold text-purple-600">2,847</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-red-600" />
                    Security Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">SSL Certificate</span>
                    <Badge className="bg-green-100 text-green-800">Valid</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Firewall</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Threats Detected</span>
                    <Badge className="bg-yellow-100 text-yellow-800">12 Attempts</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Security Scan</span>
                    <span className="font-bold text-gray-700">2 hours ago</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-teal-600" />
                    Usage Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">New Signups</span>
                    <span className="font-bold text-teal-600">524</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Active Users</span>
                    <span className="font-bold text-teal-600">3,728</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Growth</span>
                    <span className="font-bold text-green-600">+12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bounce Rate</span>
                    <span className="font-bold text-red-500">24.1%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TechFlowPlatform;