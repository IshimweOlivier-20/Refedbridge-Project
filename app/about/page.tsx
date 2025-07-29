"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Globe, Users, Award, BookOpen, Target, Lightbulb, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { number: "2,500+", label: "Students Supported", icon: Users },
  { number: "150+", label: "Scholarships Found", icon: Award },
  { number: "50+", label: "Partner Universities", icon: BookOpen },
  { number: "25", label: "Countries Reached", icon: Globe },
]

const team = [
  {
    name: "Olivier Ishimwe",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former refugee, currently pursuing his Bachelor in Software Engineering at ALU",
  },
  {
    name: "Mwiseneza Heritier",
    role: "Head of Programs",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Education specialist with 15+ years experience in refugee education across East Africa.",
  },
  {
    name: "Uwase Aline",
    role: "Technology Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Google engineer dedicated to using technology for social impact and educational equity.",
  },
  
]

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We understand the unique challenges faced by refugee students and approach every interaction with empathy.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of transparency and accountability in all our operations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously seek creative solutions to overcome barriers to education.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for the highest quality in our educational programs and support services.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging Dreams to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              RefEd Bridge was born from the belief that every refugee student deserves access to quality education and
              the opportunity to build a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower refugee youth in Africa with the academic and digital skills needed to access university and
                scholarship opportunities, addressing educational exclusion due to conflict, displacement, and poverty.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">Provide accessible, high-quality education</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <span className="text-lg">Connect students with mentors and opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg">Build a global network of support</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students learning together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in the lives of refugee students across Africa</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                RefEd Bridge was founded in 2020 by Dr. Amina Kone, a former refugee who overcame incredible odds to
                earn her PhD in Education Policy. Having experienced firsthand the barriers that prevent refugee
                students from accessing higher education, she was determined to create a solution.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small pilot program in Kenya has grown into a comprehensive platform serving refugee
                students across 25 African countries. Our approach combines cutting-edge technology with human-centered
                design to create an educational ecosystem that truly serves the needs of displaced populations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, RefEd Bridge partners with universities, NGOs, and governments to provide not just education, but
                hope. Every student who earns a scholarship, every mentor relationship formed, and every course
                completed represents a step toward a more equitable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals dedicated to educational equity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a student seeking opportunities or someone who wants to make a difference, there's a place
            for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
