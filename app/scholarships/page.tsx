"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Award,
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  GraduationCap,
  Heart,
  BookOpen,
  Globe,
  Users,
  Star,
  CheckCircle,
} from "lucide-react"

const scholarships = [
  {
    id: 1,
    title: "UNHCR Education Scholarship Program",
    provider: "United Nations High Commissioner for Refugees",
    amount: "$5,000 - $15,000",
    type: "Undergraduate",
    deadline: "March 15, 2024",
    location: "Multiple Countries",
    description:
      "Comprehensive scholarship program supporting refugee students in accessing higher education across partner universities worldwide.",
    eligibility: ["Refugee status", "High school completion", "English proficiency", "Academic excellence"],
    benefits: ["Full tuition coverage", "Living allowance", "Books and materials", "Mentorship support"],
    matchScore: 95,
    featured: true,
    category: "International",
    level: "Undergraduate",
  },
  {
    id: 2,
    title: "African Leadership Scholarship",
    provider: "African Leadership University",
    amount: "Full Tuition + Living Expenses",
    type: "Undergraduate & Graduate",
    deadline: "April 20, 2024",
    location: "Rwanda, Mauritius, South Africa",
    description:
      "Developing the next generation of African leaders through comprehensive educational support and leadership training.",
    eligibility: [
      "African citizenship or refugee status",
      "Leadership potential",
      "Community service",
      "Academic merit",
    ],
    benefits: ["100% tuition waiver", "Accommodation", "Meals", "Leadership training", "Internship opportunities"],
    matchScore: 88,
    featured: true,
    category: "Regional",
    level: "Both",
  },
  {
    id: 3,
    title: "Mastercard Foundation Scholars Program",
    provider: "Mastercard Foundation",
    amount: "Full Coverage",
    type: "Undergraduate",
    deadline: "May 10, 2024",
    location: "Kenya, Ghana, Rwanda, Uganda",
    description:
      "Comprehensive scholarship program focusing on developing leaders who will contribute to transformation in Africa.",
    eligibility: ["Financial need", "Academic excellence", "Leadership potential", "Commitment to giving back"],
    benefits: ["Full tuition", "Living expenses", "Health insurance", "Career mentorship", "Alumni network"],
    matchScore: 92,
    featured: false,
    category: "Regional",
    level: "Undergraduate",
  },
  {
    id: 4,
    title: "World University Service of Canada (WUSC)",
    provider: "WUSC",
    amount: "$25,000 CAD",
    type: "Undergraduate",
    deadline: "February 28, 2024",
    location: "Canada",
    description:
      "Student Refugee Program providing comprehensive support for refugee students to pursue higher education in Canada.",
    eligibility: [
      "Refugee status",
      "Unable to access higher education",
      "Academic potential",
      "English/French proficiency",
    ],
    benefits: ["Tuition fees", "Living allowance", "Health coverage", "Academic support", "Integration assistance"],
    matchScore: 85,
    featured: false,
    category: "International",
    level: "Undergraduate",
  },
  {
    id: 5,
    title: "DAFI Scholarship Programme",
    provider: "UNHCR & German Government",
    amount: "Full Coverage",
    type: "Undergraduate",
    deadline: "June 30, 2024",
    location: "Multiple Countries",
    description:
      "Albert Einstein German Academic Refugee Initiative providing higher education opportunities for refugees.",
    eligibility: ["Refugee status", "Academic merit", "Financial need", "Commitment to return and contribute"],
    benefits: ["University fees", "Living costs", "Books and materials", "Academic mentoring"],
    matchScore: 90,
    featured: true,
    category: "International",
    level: "Undergraduate",
  },
  {
    id: 6,
    title: "Aga Khan Foundation Scholarship",
    provider: "Aga Khan Foundation",
    amount: "Varies",
    type: "Graduate",
    deadline: "March 31, 2024",
    location: "Worldwide",
    description:
      "Supporting outstanding students from developing countries, including refugees, to pursue graduate studies.",
    eligibility: [
      "Excellent academic record",
      "Financial need",
      "Relevant work experience",
      "Commitment to development",
    ],
    benefits: ["Tuition fees", "Living expenses", "Travel costs", "Professional development"],
    matchScore: 78,
    featured: false,
    category: "International",
    level: "Graduate",
  },
]

const successStories = [
  {
    name: "Amina Hassan",
    country: "Somalia",
    scholarship: "UNHCR Education Scholarship",
    university: "University of Toronto",
    field: "Medicine",
    year: "2023",
    quote: "This scholarship didn't just fund my education; it gave me hope and a future I never thought possible.",
  },
  {
    name: "Jean-Claude Nkurunziza",
    country: "Burundi",
    scholarship: "Mastercard Foundation Scholars",
    university: "University of Cape Town",
    field: "Engineering",
    year: "2022",
    quote: "The mentorship and support system helped me excel beyond my academic goals.",
  },
  {
    name: "Fatima Al-Rashid",
    country: "Syria",
    scholarship: "WUSC Student Refugee Program",
    university: "McGill University",
    field: "International Relations",
    year: "2023",
    quote: "From refugee camp to university campus - this program transformed my entire life trajectory.",
  },
]

const applicationTips = [
  {
    icon: BookOpen,
    title: "Start Early",
    description: "Begin your application process at least 6 months before deadlines",
  },
  {
    icon: Star,
    title: "Highlight Your Story",
    description: "Share your unique journey and how education will help you make an impact",
  },
  {
    icon: Users,
    title: "Get Strong References",
    description: "Secure recommendations from teachers, mentors, or community leaders",
  },
  {
    icon: CheckCircle,
    title: "Meet All Requirements",
    description: "Carefully review and fulfill every eligibility criterion and document requirement",
  },
]

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || scholarship.category.toLowerCase() === selectedCategory
    const matchesLevel =
      selectedLevel === "all" ||
      scholarship.level.toLowerCase() === selectedLevel ||
      scholarship.level.toLowerCase() === "both"
    const matchesLocation =
      selectedLocation === "all" || scholarship.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSearch && matchesCategory && matchesLevel && matchesLocation
  })

  const featuredScholarships = scholarships.filter((s) => s.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scholarship Opportunities
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover funding opportunities to pursue your educational dreams. We've curated scholarships specifically
            for refugee students and displaced youth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-gray-600">Available Scholarships</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-gray-600">Students Supported</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Partner Universities</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">$50M+</div>
              <div className="text-gray-600">Total Funding</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Scholarships */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredScholarships.map((scholarship) => (
              <Card
                key={scholarship.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-yellow-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className="bg-yellow-500 text-white mb-2">Featured</Badge>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Match Score</div>
                      <div className="text-lg font-bold text-emerald-600">{scholarship.matchScore}%</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                  <p className="text-sm text-gray-600">{scholarship.provider}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                      <span className="font-semibold text-emerald-600">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                      <span>{scholarship.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span className="text-red-600">{scholarship.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span>{scholarship.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">{scholarship.description}</p>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Apply Now
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find Your Perfect Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search scholarships..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                    <SelectItem value="regional">Regional</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="worldwide">Worldwide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Scholarships */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Scholarships ({filteredScholarships.length})</h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm text-gray-600">Showing {filteredScholarships.length} results</span>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{scholarship.title}</h3>
                        {scholarship.featured && <Badge className="bg-yellow-500 text-white">Featured</Badge>}
                      </div>
                      <p className="text-gray-600 mb-2">{scholarship.provider}</p>
                      <p className="text-sm text-gray-600 mb-4">{scholarship.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-600">Match Score</div>
                      <div className="text-2xl font-bold text-emerald-600">{scholarship.matchScore}%</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                      <div>
                        <div className="text-sm text-gray-600">Amount</div>
                        <div className="font-semibold text-emerald-600">{scholarship.amount}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Level</div>
                        <div className="font-semibold">{scholarship.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <div>
                        <div className="text-sm text-gray-600">Deadline</div>
                        <div className="font-semibold text-red-600">{scholarship.deadline}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-semibold">{scholarship.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Eligibility Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scholarship.eligibility.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-emerald-600" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits Include:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scholarship.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Award className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline">View Details</Button>
                    <Button variant="outline">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{story.quote}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.country}</p>
                    <p className="text-sm text-blue-600">
                      {story.field} at {story.university}
                    </p>
                    <Badge variant="outline" className="mt-2">
                      {story.scholarship}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationTips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of refugee students who have transformed their lives through education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Get Application Help
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
