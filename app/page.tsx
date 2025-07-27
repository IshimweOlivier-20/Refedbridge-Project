import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Globe,
  Heart,
  ArrowRight,
  Play,
  Star,
  MapPin,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { number: "2,500+", label: "Students Supported", icon: Users },
  { number: "150+", label: "Scholarships Found", icon: Award },
  { number: "50+", label: "Partner Universities", icon: GraduationCap },
  { number: "25", label: "Countries Reached", icon: Globe },
]

const testimonials = [
  {
    name: "Irakoze Scovia",
    country: "Rwanda",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "RefEd Bridge helped me improve my English and secure a full scholarship to study Medicine in Canada. The mentorship program was life-changing.",
    achievement: "Full Scholarship - University of Toronto Medical School",
    course: "English Proficiency & Medical Prep",
  },
  {
    name: "Mwiseneza Heritier",
    country: "Burundi",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Through RefEd Bridge, I learned digital skills and connected with mentors who guided me to a Computer Science program in Germany.",
    achievement: "Software Engineering - Technical University of Munich",
    course: "Digital Literacy & Programming Fundamentals",
  },
  {
    name: "Chanella Over",
    country: "Democratic Republic of Congo",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The platform's scholarship portal and application tools helped me find and successfully apply for multiple opportunities. Now I'm studying Business in the UK.",
    achievement: "Business Administration - University of Manchester",
    course: "Business English & University Prep",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "Digital Learning",
    description: "Access English proficiency and digital literacy courses designed for refugee students",
    color: "bg-blue-500",
  },
  {
    icon: Award,
    title: "Scholarship Portal",
    description: "Discover and apply for scholarships with our comprehensive database and application tools",
    color: "bg-emerald-500",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Connect with experienced mentors who provide guidance and support throughout your journey",
    color: "bg-purple-500",
  },
  {
    icon: GraduationCap,
    title: "University Prep",
    description: "Prepare for university applications with our structured courses and resources",
    color: "bg-orange-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            Empowering Refugee Youth Through Education
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Bridge to Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Educational Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            RefEd Bridge connects refugee students across Africa with digital learning, mentorship, and scholarship
            opportunities to access higher education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
              <Link href="/register" className="flex items-center gap-2">
                Start Learning <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/scholarships" className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Find Scholarships
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/mentorship" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Become a Mentor
              </Link>
            </Button>
          </div>

          {/* Hero Video/Demo Button */}
          <div className="flex justify-center">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/20 rounded-full p-4">
              <Play className="h-8 w-8" />
              <span className="ml-2">Watch Our Story</span>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <div className="w-12 h-12 bg-pink-400 rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Support for Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic digital skills to university applications, we provide everything you need to succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-6 opacity-90">
                To empower refugee youth in Africa with the academic and digital skills needed to access university and
                scholarship opportunities, addressing educational exclusion due to conflict, displacement, and poverty.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-pink-300" />
                  <span>Supporting displaced students across 25+ African countries</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-300" />
                  <span>Connecting with universities and organizations worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-green-300" />
                  <span>95% of our students improve their English proficiency</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from refugee students who have transformed their lives through education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonial.country}</span>
                      </div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How RefEd Bridge Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to higher education in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Register & Assess",
                description: "Create your profile and take our skills assessment to personalize your learning path",
              },
              {
                step: "02",
                title: "Learn & Grow",
                description: "Access English and digital literacy courses designed specifically for refugee students",
              },
              {
                step: "03",
                title: "Connect & Mentor",
                description: "Get matched with mentors who provide guidance and support throughout your journey",
              },
              {
                step: "04",
                title: "Apply & Succeed",
                description: "Use our scholarship portal and application tools to apply for university opportunities",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of refugee students who are building brighter futures through education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/register">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
