"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  UserCheck,
  UserX,
  Settings,
  BarChart3,
  Bell,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

const stats = [
  { title: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
  { title: "Active Learners", value: "1,923", change: "+8%", icon: BookOpen, color: "text-emerald-600" },
  { title: "Scholarships Applied", value: "456", change: "+23%", icon: Award, color: "text-purple-600" },
  { title: "Course Completions", value: "1,234", change: "+15%", icon: TrendingUp, color: "text-orange-600" },
]

const pendingUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "mentor",
    country: "Kenya",
    appliedDate: "2024-02-10",
    status: "pending",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    email: "ahmed.h@email.com",
    role: "teacher",
    country: "Somalia",
    appliedDate: "2024-02-09",
    status: "pending",
  },
  {
    id: 3,
    name: "Maria Santos",
    email: "maria.s@email.com",
    role: "mentor",
    country: "Uganda",
    appliedDate: "2024-02-08",
    status: "pending",
  },
]

const recentActivity = [
  { action: "New user registration", user: "John Doe", time: "2 hours ago", type: "user" },
  { action: "Course completed", user: "Jane Smith", time: "4 hours ago", type: "course" },
  { action: "Scholarship application", user: "Ahmed Ali", time: "6 hours ago", type: "scholarship" },
  { action: "Mentor session completed", user: "Sarah Johnson", time: "8 hours ago", type: "mentorship" },
]

const courses = [
  {
    id: 1,
    title: "English Proficiency Level 1",
    instructor: "Dr. Mary Wilson",
    students: 234,
    completion: 78,
    status: "active",
  },
  {
    id: 2,
    title: "Digital Literacy Fundamentals",
    instructor: "Prof. James Brown",
    students: 189,
    completion: 65,
    status: "active",
  },
  {
    id: 3,
    title: "University Application Prep",
    instructor: "Dr. Lisa Chen",
    students: 156,
    completion: 82,
    status: "active",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const handleApproveUser = (userId: number) => {
    console.log("Approving user:", userId)
    // Implementation for user approval
  }

  const handleRejectUser = (userId: number) => {
    console.log("Rejecting user:", userId)
    // Implementation for user rejection
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">Manage platform users, content, and analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-emerald-600">{stat.change} from last month</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pending Approvals */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      Pending User Approvals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pendingUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{user.role}</Badge>
                            <span className="text-sm text-gray-500">{user.country}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleApproveUser(user.id)}
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            <UserCheck className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleRejectUser(user.id)}>
                            <UserX className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.user}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="learner">Learners</SelectItem>
                  <SelectItem value="mentor">Mentors</SelectItem>
                  <SelectItem value="teacher">Teachers</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{user.role}</Badge>
                          <span className="text-sm text-gray-500">{user.country}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Course
              </Button>
            </div>

            <div className="grid gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-gray-600">Instructor: {course.instructor}</p>
                      </div>
                      <Badge variant={course.status === "active" ? "default" : "secondary"}>{course.status}</Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Enrolled Students</p>
                        <p className="text-2xl font-bold">{course.students}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Completion Rate</p>
                        <p className="text-2xl font-bold">{course.completion}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <p className="text-lg font-semibold capitalize">{course.status}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Course
                      </Button>
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Scholarship Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Scholarship
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-center text-gray-600">
                  Scholarship management interface would be implemented here with features to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Add and manage scholarship opportunities</li>
                  <li>Review and approve applications</li>
                  <li>Track application deadlines</li>
                  <li>Generate reports on scholarship success rates</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Platform Analytics</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">User growth chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Course engagement metrics would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Platform Settings</h2>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Platform Name</label>
                    <Input defaultValue="RefEd Bridge" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Support Email</label>
                    <Input defaultValue="support@refedbridge.org" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Default Language</label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="sw">Swahili</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Configure email notifications, push notifications, and system alerts.</p>
                  <Button className="mt-4">Configure Notifications</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
