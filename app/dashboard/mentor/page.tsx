"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Calendar,
  MessageSquare,
  Video,
  Clock,
  Star,
  Award,
  TrendingUp,
  Bell,
  Search,
  Plus,
  Send,
  FileText,
  Heart,
  User,
} from "lucide-react"

const mentorStats = {
  totalMentees: 12,
  sessionsCompleted: 45,
  averageRating: 4.9,
  hoursContributed: 78,
  successStories: 8,
  responseRate: 98,
}

const myMentees = [
  {
    id: 1,
    name: "Amina Hassan",
    country: "Somalia",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Computer Science Degree",
    progress: 75,
    lastSession: "2024-02-10",
    nextSession: "2024-02-17",
    status: "Active",
    courses: ["English Proficiency", "Digital Literacy"],
    achievements: 5,
  },
  {
    id: 2,
    name: "Jean-Claude Nkurunziza",
    country: "Burundi",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Engineering Studies",
    progress: 60,
    lastSession: "2024-02-08",
    nextSession: "2024-02-15",
    status: "Active",
    courses: ["Mathematics", "Physics"],
    achievements: 3,
  },
  {
    id: 3,
    name: "Fatima Al-Rashid",
    country: "Syria",
    avatar: "/placeholder.svg?height=40&width=40",
    goal: "Business Administration",
    progress: 85,
    lastSession: "2024-02-12",
    nextSession: "2024-02-19",
    status: "Active",
    courses: ["Business English", "Economics"],
    achievements: 7,
  },
]

const upcomingSessions = [
  {
    id: 1,
    menteeName: "Amina Hassan",
    topic: "University Application Review",
    date: "2024-02-17",
    time: "14:00",
    duration: "60 min",
    type: "Video Call",
    status: "Confirmed",
    agenda: ["Review personal statement", "Discuss university choices", "Application timeline"],
  },
  {
    id: 2,
    menteeName: "Jean-Claude Nkurunziza",
    topic: "Career Path Discussion",
    date: "2024-02-15",
    time: "16:00",
    duration: "45 min",
    type: "Video Call",
    status: "Pending",
    agenda: ["Engineering specializations", "Internship opportunities", "Skill development"],
  },
]

const messages = [
  {
    id: 1,
    from: "Amina Hassan",
    subject: "Question about scholarship application",
    preview: "Hi! I have a question about the UNHCR scholarship requirements...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    from: "Fatima Al-Rashid",
    subject: "Thank you for yesterday's session",
    preview: "Thank you so much for the guidance on my personal statement...",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 3,
    from: "Jean-Claude Nkurunziza",
    subject: "Rescheduling request",
    preview: "Could we reschedule our session to next week? I have an exam...",
    time: "2 days ago",
    unread: true,
  },
]

const resources = [
  {
    title: "University Application Guide",
    type: "PDF",
    downloads: 234,
    category: "Applications",
  },
  {
    title: "Scholarship Search Strategies",
    type: "Video",
    downloads: 189,
    category: "Scholarships",
  },
  {
    title: "Interview Preparation Checklist",
    type: "Document",
    downloads: 156,
    category: "Interviews",
  },
]

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedMentee, setSelectedMentee] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mentor Dashboard 🌟
              </h1>
              <p className="text-gray-600">Empowering the next generation of leaders</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hover:bg-purple-50 bg-transparent">
                <Bell className="h-4 w-4 mr-2" />5 New
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Session
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.totalMentees}</p>
              <p className="text-sm opacity-90">Active Mentees</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <Video className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.sessionsCompleted}</p>
              <p className="text-sm opacity-90">Sessions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.averageRating}</p>
              <p className="text-sm opacity-90">Avg Rating</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.hoursContributed}</p>
              <p className="text-sm opacity-90">Hours</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.successStories}</p>
              <p className="text-sm opacity-90">Success Stories</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{mentorStats.responseRate}%</p>
              <p className="text-sm opacity-90">Response Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mentees">My Mentees</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Upcoming Sessions */}
              <div className="lg:col-span-2">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{session.topic}</h4>
                            <p className="text-sm text-gray-600">with {session.menteeName}</p>
                          </div>
                          <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                            {session.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            <span>{session.duration}</span>
                          </div>
                        </div>
                        {session.agenda && (
                          <div className="mb-3">
                            <p className="text-sm font-medium mb-1">Agenda:</p>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                              {session.agenda.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="h-4 w-4 mr-2" />
                            Join Session
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Messages */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      Recent Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {messages.slice(0, 3).map((message) => (
                      <div
                        key={message.id}
                        className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          message.unread ? "bg-blue-50 border-blue-200" : "bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-sm">{message.from}</h4>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm font-medium mb-1">{message.subject}</p>
                        <p className="text-xs text-gray-600 line-clamp-2">{message.preview}</p>
                        {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                      </div>
                    ))}
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      View All Messages
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Impact This Month
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="opacity-90">Sessions Conducted</span>
                        <span className="font-bold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-90">Students Helped</span>
                        <span className="font-bold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-90">Applications Reviewed</span>
                        <span className="font-bold">15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-90">Success Rate</span>
                        <span className="font-bold">94%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mentees" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Mentees</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search mentees..." className="pl-10 w-64" />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Mentee
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myMentees.map((mentee) => (
                <Card key={mentee.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img
                        src={mentee.avatar || "/placeholder.svg"}
                        alt={mentee.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{mentee.name}</h3>
                        <p className="text-sm text-gray-600">{mentee.country}</p>
                        <Badge variant="outline" className="mt-1">
                          {mentee.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Goal: {mentee.goal}</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{mentee.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${mentee.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Session:</span>
                        <span>{mentee.lastSession}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Session:</span>
                        <span className="text-blue-600">{mentee.nextSession}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Achievements:</span>
                        <span className="font-semibold">{mentee.achievements}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Current Courses:</p>
                      <div className="flex flex-wrap gap-1">
                        {mentee.courses.map((course, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Session Management</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule New Session
              </Button>
            </div>

            <div className="grid gap-6">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{session.topic}</h3>
                        <p className="text-gray-600">with {session.menteeName}</p>
                      </div>
                      <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>{session.status}</Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-semibold">{session.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="font-semibold">{session.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold">{session.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-semibold">{session.type}</p>
                      </div>
                    </div>

                    {session.agenda && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Session Agenda:</p>
                        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                          {session.agenda.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Video className="h-4 w-4 mr-2" />
                        Start Session
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Session Notes
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          message.unread ? "bg-blue-50 border-blue-200" : "bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <User className="h-8 w-8 text-gray-400" />
                            <div>
                              <h4 className="font-semibold">{message.from}</h4>
                              <p className="text-sm text-gray-600">{message.subject}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500">{message.time}</span>
                            {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 ml-auto"></div>}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{message.preview}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Quick Reply</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">To</label>
                      <select className="w-full border rounded-lg px-3 py-2">
                        <option>Select mentee...</option>
                        {myMentees.map((mentee) => (
                          <option key={mentee.id} value={mentee.id}>
                            {mentee.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="Message subject..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea rows={4} placeholder="Type your message..." />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Mentor Resources</h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Upload Resource
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{resource.title}</h3>
                        <Badge variant="outline">{resource.category}</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>{resource.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Downloads:</span>
                        <span>{resource.downloads}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
