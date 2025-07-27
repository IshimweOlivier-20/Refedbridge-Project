"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Plus,
  Upload,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  FileText,
  Video,
  Headphones,
  ImageIcon,
} from "lucide-react"

const teacherStats = {
  totalCourses: 8,
  totalStudents: 234,
  completionRate: 78,
  averageRating: 4.7,
  hoursContent: 156,
  certificates: 89,
}

const myCourses = [
  {
    id: 1,
    title: "English Proficiency Level 1",
    students: 89,
    completion: 78,
    rating: 4.8,
    status: "Published",
    lastUpdated: "2024-02-10",
    modules: 12,
    duration: "8 weeks",
    category: "Language",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Digital Literacy Fundamentals",
    students: 67,
    completion: 65,
    rating: 4.9,
    status: "Published",
    lastUpdated: "2024-02-08",
    modules: 10,
    duration: "6 weeks",
    category: "Digital Skills",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Academic Writing Skills",
    students: 45,
    completion: 82,
    rating: 4.6,
    status: "Draft",
    lastUpdated: "2024-02-12",
    modules: 8,
    duration: "4 weeks",
    category: "Academic",
    level: "Intermediate",
  },
]

const recentSubmissions = [
  {
    id: 1,
    studentName: "Amina Hassan",
    courseName: "English Proficiency Level 1",
    assignment: "Grammar Exercise 3",
    submittedAt: "2024-02-14 10:30",
    status: "Pending Review",
    score: null,
  },
  {
    id: 2,
    studentName: "Jean-Claude Nkurunziza",
    courseName: "Digital Literacy Fundamentals",
    assignment: "Email Communication Task",
    submittedAt: "2024-02-14 09:15",
    status: "Graded",
    score: 85,
  },
  {
    id: 3,
    studentName: "Fatima Al-Rashid",
    courseName: "English Proficiency Level 1",
    assignment: "Speaking Practice Recording",
    submittedAt: "2024-02-13 16:45",
    status: "Pending Review",
    score: null,
  },
]

const courseAnalytics = {
  weeklyEngagement: [
    { week: "Week 1", engagement: 95 },
    { week: "Week 2", engagement: 88 },
    { week: "Week 3", engagement: 92 },
    { week: "Week 4", engagement: 85 },
  ],
  topPerformers: [
    { name: "Fatima Al-Rashid", score: 96, course: "English Level 1" },
    { name: "Ahmed Hassan", score: 94, course: "Digital Literacy" },
    { name: "Maria Santos", score: 92, course: "English Level 1" },
  ],
}

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedCourse, setSelectedCourse] = useState(null)

  const createNewCourse = () => {
    setActiveTab("create-course")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Teacher Dashboard 📚
              </h1>
              <p className="text-gray-600">Create, manage, and track your educational content</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hover:bg-emerald-50 bg-transparent">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={createNewCourse}>
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.totalCourses}</p>
              <p className="text-sm opacity-90">My Courses</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.totalStudents}</p>
              <p className="text-sm opacity-90">Total Students</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.completionRate}%</p>
              <p className="text-sm opacity-90">Completion Rate</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.averageRating}</p>
              <p className="text-sm opacity-90">Avg Rating</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.hoursContent}</p>
              <p className="text-sm opacity-90">Content Hours</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{teacherStats.certificates}</p>
              <p className="text-sm opacity-90">Certificates Issued</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="create-course">Create Course</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      Course Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {myCourses.slice(0, 3).map((course) => (
                      <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <Badge variant="secondary">{course.category}</Badge>
                              <Badge variant="outline">{course.level}</Badge>
                              <Badge
                                variant={course.status === "Published" ? "default" : "secondary"}
                                className={course.status === "Published" ? "bg-emerald-600" : ""}
                              >
                                {course.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold">{course.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-600">Students</p>
                            <p className="text-xl font-bold text-blue-600">{course.students}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Completion</p>
                            <p className="text-xl font-bold text-emerald-600">{course.completion}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Modules</p>
                            <p className="text-xl font-bold text-purple-600">{course.modules}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Course Completion Rate</span>
                            <span>{course.completion}%</span>
                          </div>
                          <Progress value={course.completion} className="h-2" />
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Course
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Analytics
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Pending Reviews */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      Pending Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentSubmissions
                      .filter((sub) => sub.status === "Pending Review")
                      .slice(0, 3)
                      .map((submission) => (
                        <div key={submission.id} className="p-3 border rounded-lg bg-orange-50">
                          <h4 className="font-semibold text-sm">{submission.assignment}</h4>
                          <p className="text-sm text-gray-600">{submission.studentName}</p>
                          <p className="text-xs text-gray-500">{submission.submittedAt}</p>
                          <Button size="sm" className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                            Review Now
                          </Button>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100" onClick={createNewCourse}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Course
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Content
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge
                        variant={course.status === "Published" ? "default" : "secondary"}
                        className={course.status === "Published" ? "bg-emerald-600" : ""}
                      >
                        {course.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Students</p>
                        <p className="text-xl font-bold text-blue-600">{course.students}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Rating</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-bold">{course.rating}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600">Modules</p>
                        <p className="text-lg font-bold">{course.modules}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="text-lg font-bold">{course.duration}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completion Rate</span>
                        <span>{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>Last updated: {course.lastUpdated}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create-course" className="space-y-6">
            <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Create New Course</CardTitle>
                <p className="text-gray-600">Build engaging educational content for refugee students</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Title *</label>
                    <Input placeholder="e.g., Advanced English Communication" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category *</label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option>Select category...</option>
                      <option>Language</option>
                      <option>Digital Skills</option>
                      <option>Academic</option>
                      <option>Professional Skills</option>
                      <option>Life Skills</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Difficulty Level *</label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option>Select level...</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Duration</label>
                    <Input placeholder="e.g., 6 weeks" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Course Description *</label>
                  <Textarea rows={4} placeholder="Describe what students will learn and achieve in this course..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Learning Objectives</label>
                  <Textarea rows={3} placeholder="List the key learning objectives (one per line)..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload course thumbnail</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50">
                  <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                      <div className="flex items-center gap-3">
                        <Video className="h-5 w-5 text-blue-600" />
                        <span>Module 1: Introduction</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Module
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Save as Draft</Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Publish Course</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Student Submissions</h2>
              <div className="flex gap-2">
                <select className="border rounded-lg px-3 py-2">
                  <option>All Courses</option>
                  {myCourses.map((course) => (
                    <option key={course.id}>{course.title}</option>
                  ))}
                </select>
                <select className="border rounded-lg px-3 py-2">
                  <option>All Status</option>
                  <option>Pending Review</option>
                  <option>Graded</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4">
              {recentSubmissions.map((submission) => (
                <Card key={submission.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{submission.assignment}</h3>
                        <p className="text-gray-600">{submission.courseName}</p>
                        <p className="text-sm text-gray-500">Submitted by {submission.studentName}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={submission.status === "Pending Review" ? "secondary" : "default"}
                          className={submission.status === "Graded" ? "bg-emerald-600" : "bg-orange-500"}
                        >
                          {submission.status}
                        </Badge>
                        {submission.score && (
                          <p className="text-lg font-bold text-emerald-600 mt-1">{submission.score}/100</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Submitted: {submission.submittedAt}</span>
                    </div>

                    <div className="flex gap-2">
                      {submission.status === "Pending Review" ? (
                        <>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Review & Grade
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Submission
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Graded Work
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Update Grade
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Course Analytics</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Weekly Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courseAnalytics.weeklyEngagement.map((week, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{week.week}</span>
                        <div className="flex items-center gap-2 flex-1 ml-4">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                              style={{ width: `${week.engagement}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold">{week.engagement}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courseAnalytics.topPerformers.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-emerald-600">{student.score}%</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">Top Performer</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Teaching Resources</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload Resource
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Video Lecture Template", type: "Template", icon: Video },
                { title: "Assignment Rubric", type: "Document", icon: FileText },
                { title: "Audio Recording Guide", type: "Guide", icon: Headphones },
              ].map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{resource.title}</h3>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Download
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
