"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Heart,
  Globe,
  Award,
  BookOpen,
  MessageSquare,
  Star,
  ArrowRight,
  MapPin,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mentorshipStats = [
  { number: "500+", label: "Active Mentors", icon: Users },
  { number: "2,000+", label: "Students Mentored", icon: GraduationCap },
  { number: "85%", label: "Success Rate", icon: Target },
  { number: "25", label: "Countries Covered", icon: Globe },
]

const mentorProfiles = [
  {
    name: "Dr. Sarah Johnson",
    title: "Computer Science Professor",
    university: "MIT",
    country: "USA",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Computer Science", "AI/ML", "Research"],
    experience: "15 years",
    studentsHelped: 45,
    rating: 4.9,
    languages: ["English", "French"],
    bio: "Passionate about helping refugee students access STEM education and research opportunities.",
  },
  {
    name: "Prof. Ahmed Hassan",
    title: "Engineering Dean",
    university: "University of Toronto",
    country: "Canada",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Engineering", "Scholarships", "University Prep"],
    experience: "12 years",
    studentsHelped: 38,
    rating: 4.8,
    languages: ["English", "Arabic"],
    bio: "Dedicated to bridging the gap between refugee students and engineering education.",
  },
  {
    name: "Dr. Amina Kone",
    title: "Medical Doctor & Educator",
    university: "Sorbonne University",
    country: "France",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Medicine", "Health Sciences", "French Universities"],
    experience: "10 years",
    studentsHelped: 32,
    rating: 5.0,
    languages: ["French", "English", "Arabic"],
    bio: "Helping refugee students navigate medical school applications and healthcare careers.",
  },
]

const successStories = [
  {
    studentName: "Fatima Al-Rashid",
    mentorName: "Dr. Sarah Johnson",
    achievement: "Full Scholarship to MIT",
    story:
      "With Dr. Johnson's guidance, I improved my coding skills and successfully applied for a computer science program.",
    image: "/placeholder.svg?height=80&width=80",
    country: "Syria",
    field: "Computer Science",
  },
  {
    studentName: "Jean-Claude Nkomo",
    mentorName: "Prof. Ahmed Hassan",
    achievement: "Engineering Degree - University of Toronto",
    story: "Prof. Hassan helped me understand the Canadian education system and secure funding for my studies.",
    image: "/placeholder.svg?height=80&width=80",
    country: "Democratic Republic of Congo",
    field: "Civil Engineering",
  },
  {
    studentName: "Aisha Mohamed",
    mentorName: "Dr. Amina Kone",
    achievement: "Medical School Acceptance",
    story: "Dr. Kone's mentorship was crucial in preparing my medical school applications and interview preparation.",
    image: "/placeholder.svg?height=80&width=80",
    country: "Somalia",
    field: "Medicine",
  },
]

const mentorshipProcess = [
  {
    step: "01",
    title: "Apply to Become a Mentor",
    description: "Submit your application with your background, expertise, and availability",
    icon: Heart,
  },
  {
    step: "02",
    title: "Complete Orientation",
    description: "Attend our mentor training program to understand refugee student needs",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Get Matched",
    description: "We'll match you with students based on your expertise and their goals",
    icon: Users,
  },
  {
    step: "04",
    title: "Start Mentoring",
    description: "Begin regular sessions and guide students toward their educational goals",
    icon: Lightbulb,
  },
]

const mentorBenefits = [
  {
    icon: Heart,
    title: "Make a Real Impact",
    description: "Directly contribute to changing lives and breaking cycles of displacement",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with educators and professionals from around the world",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Receive certificates and recognition for your volunteer contributions",
  },
  {
    icon: BookOpen,
    title: "Professional Development",
    description: "Enhance your mentoring and cross-cultural communication skills",
  },
]

export default function MentorshipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">Mentorship Program</Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Guide the Next Generation of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Global Leaders
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our community of mentors helping refugee students access higher education and build brighter futures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
              <Link href="/register" className="flex items-center gap-2">
                Become a Mentor <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/login" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Find a Mentor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mentorship Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our mentorship program is transforming lives across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorshipStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Mentors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals from top universities and organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorProfiles.map((mentor, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.title}</p>
                      <p className="text-sm text-blue-600">{mentor.university}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{mentor.country}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{mentor.bio}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold">{mentor.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Students Helped:</span>
                      <span className="font-semibold">{mentor.studentsHelped}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.languages.map((language, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Connect with {mentor.name.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real stories of transformation through mentorship</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{story.story}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.studentName}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{story.studentName}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{story.country}</span>
                      </div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {story.achievement}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">Mentored by {story.mentorName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Mentorship Works</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Join our mentorship program in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorshipProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Mentoring */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Become a Mentor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the rewards of guiding the next generation of leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Apply to Become a Mentor</h2>
              <p className="text-xl text-gray-600">Join our community of dedicated mentors making a difference</p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Mentor Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Professional Title</label>
                  <Input placeholder="e.g., Professor, Engineer, Doctor" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Institution/Organization</label>
                  <Input placeholder="Your current workplace or institution" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Areas of Expertise</label>
                  <Input placeholder="e.g., Computer Science, Medicine, Engineering" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Languages Spoken</label>
                  <Input placeholder="e.g., English, French, Arabic" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to become a mentor?</label>
                  <Textarea rows={4} placeholder="Tell us about your motivation to mentor refugee students..." />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Availability</label>
                  <Textarea
                    rows={3}
                    placeholder="Please describe your availability (hours per week, preferred times, etc.)"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of mentors who are helping refugee students achieve their educational dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/register">Become a Mentor Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
