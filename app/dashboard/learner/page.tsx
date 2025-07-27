"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Award,
  Users,
  Calendar,
  Download,
  Play,
  Clock,
  Star,
  MessageSquare,
  Bell,
  Target,
  Globe,
  CheckCircle,
  FileText,
  Video,
  Headphones,
  PenTool,
  TrendingUp,
  Heart,
} from "lucide-react"

const courses = [
  {
    id: 1,
    title: "English Proficiency Level 1",
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    nextLesson: "Grammar Basics: Present Perfect Tense",
    category: "Language",
    difficulty: "Beginner",
    estimatedTime: "2 weeks",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    description: "Master fundamental English skills for academic and professional success",
    modules: [
      { name: "Basic Grammar", completed: true, duration: "45 min" },
      { name: "Vocabulary Building", completed: true, duration: "30 min" },
      { name: "Speaking Practice", completed: false, duration: "60 min" },
      { name: "Writing Skills", completed: false, duration: "40 min" },
    ],
  },
  {
    id: 2,
    title: "Digital Literacy Fundamentals",
    progress: 45,
    totalLessons: 15,
    completedLessons: 7,
    nextLesson: "Email Communication & Etiquette",
    category: "Digital Skills",
    difficulty: "Beginner",
    estimatedTime: "3 weeks",
    instructor: "Prof. Ahmed Hassan",
    rating: 4.9,
    description: "Essential digital skills for modern education and workplace",
    modules: [
      { name: "Computer Basics", completed: true, duration: "50 min" },
      { name: "Internet Navigation", completed: true, duration: "35 min" },
      { name: "Email & Communication", completed: false, duration: "45 min" },
      { name: "Online Safety", completed: false, duration: "30 min" },
    ],
  },
  {
    id: 3,
    title: "University Application Prep",
    progress: 20,
    totalLessons: 12,
    completedLessons: 2,
    nextLesson: "Personal Statement Writing Workshop",
    category: "Academic",
    difficulty: "Intermediate",
    estimatedTime: "4 weeks",
    instructor: "Dr. Maria Santos",
    rating: 4.7,
    description: "Complete guide to university applications and scholarship essays",
    modules: [
      { name: "University Research", completed: true, duration: "60 min" },
      { name: "Application Essays", completed: false, duration: "90 min" },
      { name: "Interview Preparation", completed: false, duration: "75 min" },
      { name: "Document Preparation", completed: false, duration: "45 min" },
    ],
  },
]

const scholarships = [
  {
    id: 1,
    title: "UNHCR Education Scholarship Program",
    deadline: "2024-03-15",
    amount: "$5,000",
    type: "Undergraduate",
    country: "Multiple Countries",
    status: "Applied",
    matchScore: 95,
    requirements: ["High School Certificate", "English Proficiency", "Refugee Status"],
    description: "Full tuition support for undergraduate studies in partner universities",
  },
  {
    id: 2,
    title: "African Leadership Scholarship",
    deadline: "2024-04-20",
    amount: "Full Tuition + Living Expenses",
    type: "Graduate",
    country: "South Africa",
    status: "Saved",
    matchScore: 88,
    requirements: ["Bachelor's Degree", "Leadership Experience", "Community Service"],
    description: "Comprehensive support for future African leaders",
  },
  {
    id: 3,
    title: "Mastercard Foundation Scholars Program",
    deadline: "2024-05-10",
    amount: "Full Coverage",
    type: "Undergraduate",
    country: "Kenya",
    status: "New",
    matchScore: 92,
    requirements: ["Academic Excellence", "Financial Need", "Leadership Potential"],
    description: "Complete educational support including mentorship and career guidance",
  },
]

const mentorSessions = [
  {
    id: 1,
    mentorName: "Dr. Sarah Johnson",
    mentorTitle: "Education Specialist",
    topic: "University Application Strategy",
    date: "2024-02-15",
    time: "14:00",
    duration: "60 min",
    status: "Upcoming",
    type: "Video Call",
    agenda: ["Application timeline", "Essay review", "University selection"],
  },
  {
    id: 2,
    mentorName: "Prof. Ahmed Hassan",
    mentorTitle: "Career Counselor",
    topic: "Career Guidance in Engineering",
    date: "2024-02-10",
    time: "16:00",
    duration: "45 min",
    status: "Completed",
    type: "Video Call",
    notes: "Discussed engineering pathways and internship opportunities",
  },
]

const achievements = [
  { title: "First Course Completed", icon: BookOpen, date: "2024-01-15", points: 100 },
  { title: "English Level 1 Certificate", icon: Award, date: "2024-01-20", points: 250 },
  { title: "Digital Skills Badge", icon: Star, date: "2024-02-01", points: 150 },
  { title: "First Scholarship Application", icon: Target, date: "2024-02-05", points: 200 },
  { title: "Perfect Attendance Week", icon: Calendar, date: "2024-02-08", points: 50 },
  { title: "Community Helper", icon: Heart, date: "2024-02-10", points: 75 },
]

const learningStats = {
  totalPoints: 825,
  streak: 12,
  coursesCompleted: 2,
  certificatesEarned: 3,
  studyHours: 45,
  rank: "Advanced Learner",
}

export default function LearnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedCourse, setSelectedCourse] = useState(null)

  const startLearning = (courseId: number) => {
    const course = courses.find((c) => c.id === courseId)
    setSelectedCourse(course)
    setActiveTab("learning")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome back, John! 🎓
              </h1>
              <p className="text-gray-600">Continue your learning journey • {learningStats.streak} day streak 🔥</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 bg-transparent">
                <Bell className="h-4 w-4 mr-2" />3 New
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-purple-50 bg-transparent">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{learningStats.totalPoints}</p>
              <p className="text-sm opacity-90">Total Points</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-4 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{learningStats.streak}</p>
              <p className="text-sm opacity-90">Day Streak</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{learningStats.coursesCompleted}</p>
              <p className="text-sm opacity-90">Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{learningStats.certificatesEarned}</p>
              <p className="text-sm opacity-90">Certificates</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">{learningStats.studyHours}</p>
              <p className="text-sm opacity-90">Study Hours</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2" />
              <p className="text-xs font-bold">{learningStats.rank}</p>
              <p className="text-sm opacity-90">Current Rank</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Current Learning */}
              <div className="lg:col-span-2">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-blue-600" />
                      Continue Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {courses.slice(0, 2).map((course) => (
                      <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                            <p className="text-sm text-blue-600">Instructor: {course.instructor}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{course.category}</Badge>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              {course.completedLessons}/{course.totalLessons} lessons completed
                            </span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-3" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" onClick={() => startLearning(course.id)} className="flex-1">
                            <Play className="h-4 w-4 mr-2" />
                            Continue Learning
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Upcoming Sessions */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                      Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mentorSessions
                      .filter((s) => s.status === "Upcoming")
                      .map((session) => (
                        <div
                          key={session.id}
                          className="border rounded-lg p-3 bg-gradient-to-r from-emerald-50 to-blue-50"
                        >
                          <h4 className="font-semibold text-sm">{session.topic}</h4>
                          <p className="text-sm text-gray-600">with {session.mentorName}</p>
                          <p className="text-xs text-gray-500">{session.mentorTitle}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </div>
                          <Button size="sm" className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700">
                            <Video className="h-4 w-4 mr-2" />
                            Join Session
                          </Button>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {achievements.slice(0, 4).map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <achievement.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{achievement.title}</p>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          +{achievement.points}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            {selectedCourse ? (
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Course Content */}
                <div className="lg:col-span-3">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">{selectedCourse.title}</CardTitle>
                          <p className="text-gray-600 mt-2">{selectedCourse.description}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <Badge>{selectedCourse.category}</Badge>
                            <Badge variant="outline">{selectedCourse.difficulty}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{selectedCourse.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" onClick={() => setSelectedCourse(null)}>
                          Back to Courses
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Video Player Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg mb-6 flex items-center justify-center text-white">
                        <div className="text-center">
                          <Play className="h-16 w-16 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold mb-2">{selectedCourse.nextLesson}</h3>
                          <p className="opacity-90">Click to start learning</p>
                        </div>
                      </div>

                      {/* Lesson Controls */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex gap-2">
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Notes
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Speed:</span>
                          <select className="text-sm border rounded px-2 py-1">
                            <option>1x</option>
                            <option>1.25x</option>
                            <option>1.5x</option>
                            <option>2x</option>
                          </select>
                        </div>
                      </div>

                      {/* Course Progress */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Course Progress</span>
                          <span>{selectedCourse.progress}% Complete</span>
                        </div>
                        <Progress value={selectedCourse.progress} className="h-2" />
                      </div>

                      {/* Interactive Elements */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <PenTool className="h-4 w-4" />
                            Quick Quiz
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">Test your understanding of this lesson</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            Take Quiz
                          </Button>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Headphones className="h-4 w-4" />
                            Audio Practice
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">Practice pronunciation and listening</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            Start Practice
                          </Button>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Course Sidebar */}
                <div>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">Course Modules</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedCourse.modules.map((module, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            module.completed
                              ? "bg-green-50 border-green-200"
                              : "bg-gray-50 border-gray-200 hover:bg-blue-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {module.completed ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                              )}
                              <span className="text-sm font-medium">{module.name}</span>
                            </div>
                            <span className="text-xs text-gray-500">{module.duration}</span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Course to Start Learning</h3>
                <p className="text-gray-600 mb-6">Choose from your enrolled courses to begin your learning journey</p>
                <Button onClick={() => setActiveTab("courses")}>Browse My Courses</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="outline">{course.difficulty}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span>
                            {course.completedLessons}/{course.totalLessons} lessons
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.estimatedTime} remaining</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{course.instructor}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-600 mb-3">
                        Next: <span className="font-medium text-blue-600">{course.nextLesson}</span>
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" onClick={() => startLearning(course.id)}>
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="grid gap-6">
              {scholarships.map((scholarship) => (
                <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{scholarship.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{scholarship.description}</p>
                        <p className="text-gray-600 mt-2">
                          {scholarship.country} • {scholarship.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            scholarship.status === "Applied"
                              ? "default"
                              : scholarship.status === "Saved"
                                ? "secondary"
                                : "outline"
                          }
                          className="mb-2"
                        >
                          {scholarship.status}
                        </Badge>
                        <div className="text-sm">
                          <span className="text-green-600 font-semibold">{scholarship.matchScore}% match</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Amount</p>
                        <p className="font-semibold text-emerald-600">{scholarship.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-semibold text-red-600">{scholarship.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-semibold">{scholarship.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Requirements</p>
                        <p className="font-semibold">{scholarship.requirements.length} items</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {scholarship.status === "New" && (
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Apply Now
                        </Button>
                      )}
                      {scholarship.status === "Saved" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Continue Application
                        </Button>
                      )}
                      {scholarship.status === "Applied" && (
                        <Button size="sm" variant="outline">
                          View Application
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>My Mentor Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mentorSessions.map((session) => (
                    <div key={session.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{session.topic}</h4>
                          <p className="text-sm text-gray-600">with {session.mentorName}</p>
                          <p className="text-xs text-gray-500">{session.mentorTitle}</p>
                        </div>
                        <Badge variant={session.status === "Upcoming" ? "default" : "secondary"}>
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
                        {session.status === "Upcoming" ? (
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <Video className="h-4 w-4 mr-2" />
                            Join Session
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            View Notes
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Request New Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Need guidance on a specific topic? Request a session with one of our expert mentors.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Session Topic</label>
                      <select className="w-full border rounded-lg px-3 py-2">
                        <option>University Applications</option>
                        <option>Career Guidance</option>
                        <option>Study Skills</option>
                        <option>Personal Development</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <input type="date" className="w-full border rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Notes</label>
                      <textarea
                        className="w-full border rounded-lg px-3 py-2"
                        rows={3}
                        placeholder="Tell us what you'd like to discuss..."
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Users className="h-4 w-4 mr-2" />
                      Request Mentor Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{achievement.date}</p>
                    <Badge variant="outline" className="text-emerald-600">
                      +{achievement.points} points
                    </Badge>
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
