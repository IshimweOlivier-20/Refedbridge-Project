"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Calendar, Users, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const tours = [
  {
    id: 1,
    title: "Nyiragongo Volcano Trek",
    location: "North Kivu",
    region: "north",
    duration: "2 Days",
    price: 450,
    rating: 4.9,
    reviews: 127,
    difficulty: "Challenging",
    groupSize: "8-12",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Experience the world's largest lava lake at Nyiragongo volcano. This challenging trek takes you to the rim of an active volcano.",
    highlights: ["Active lava lake", "Overnight camping", "Stunning sunrise views", "Expert guides"],
  },
  {
    id: 2,
    title: "Kahuzi-Biega Gorilla Safari",
    location: "South Kivu",
    region: "south",
    duration: "3 Days",
    price: 650,
    rating: 4.8,
    reviews: 89,
    difficulty: "Moderate",
    groupSize: "4-8",
    image: "/placeholder.svg?height=300&width=400",
    description: "Encounter eastern lowland gorillas in their natural habitat at Kahuzi-Biega National Park.",
    highlights: ["Gorilla tracking", "Forest hiking", "Local community visit", "Wildlife photography"],
  },
  {
    id: 3,
    title: "Lake Kivu Island Hopping",
    location: "South Kivu",
    region: "south",
    duration: "4 Days",
    price: 380,
    rating: 4.7,
    reviews: 156,
    difficulty: "Easy",
    groupSize: "6-15",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Explore the beautiful islands and beaches of Lake Kivu with traditional boat rides and cultural experiences.",
    highlights: ["Island hopping", "Traditional fishing", "Beach relaxation", "Cultural immersion"],
  },
  {
    id: 4,
    title: "Virunga National Park Adventure",
    location: "North Kivu",
    region: "north",
    duration: "5 Days",
    price: 850,
    rating: 4.9,
    reviews: 203,
    difficulty: "Challenging",
    groupSize: "6-10",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Comprehensive adventure through Africa's oldest national park including gorilla tracking and volcano hiking.",
    highlights: ["Mountain gorillas", "Volcano hiking", "Wildlife viewing", "Conservation education"],
  },
  {
    id: 5,
    title: "Bukavu Cultural Experience",
    location: "South Kivu",
    region: "south",
    duration: "3 Days",
    price: 280,
    rating: 4.6,
    reviews: 94,
    difficulty: "Easy",
    groupSize: "8-16",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Immerse yourself in the rich culture and history of Bukavu with visits to local markets, museums, and communities.",
    highlights: ["Colonial architecture", "Local markets", "Traditional crafts", "Community visits"],
  },
  {
    id: 6,
    title: "Goma City & Surroundings",
    location: "North Kivu",
    region: "north",
    duration: "2 Days",
    price: 220,
    rating: 4.5,
    reviews: 78,
    difficulty: "Easy",
    groupSize: "10-20",
    image: "/placeholder.svg?height=300&width=400",
    description: "Discover the vibrant city of Goma, its markets, and the beautiful Lake Kivu shoreline.",
    highlights: ["City tour", "Lake Kivu views", "Local cuisine", "Shopping"],
  },
]

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const filteredTours = tours
    .filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = regionFilter === "all" || tour.region === regionFilter
      const matchesDifficulty = difficultyFilter === "all" || tour.difficulty.toLowerCase() === difficultyFilter

      return matchesSearch && matchesRegion && matchesDifficulty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return b.reviews - a.reviews
      }
    })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Our Tours</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of adventures in North and South Kivu
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North Kivu</SelectItem>
                <SelectItem value="south">South Kivu</SelectItem>
              </SelectContent>
            </Select>

            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="challenging">Challenging</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-emerald-600">{tour.location}</Badge>
                <Badge className="absolute top-4 right-4 bg-blue-600">{tour.difficulty}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                    <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.duration}</span>
                    <Users className="h-4 w-4 ml-2" />
                    <span>{tour.groupSize} people</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">${tour.price}</span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                  <Button>
                    <Link href={`/tours/${tour.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
