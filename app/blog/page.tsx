"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Search,
  Calendar,
  User,
  ArrowRight,
  Heart,
  MessageSquare,
  Share2,
  Award,
  Users,
  GraduationCap,
  Globe,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "From Refugee Camp to Medical School: Amina's Inspiring Journey",
    excerpt:
      "Discover how Amina Hassan overcame incredible challenges to secure a full scholarship to study medicine in Canada through the RefEd Bridge platform.",
    content:
      "Amina's story begins in a refugee camp in Kenya, where she spent her teenage years after fleeing conflict in Somalia. Despite limited resources, her determination to become a doctor never wavered...",
    author: "Sarah Johnson",
    authorRole: "Program Director",
    publishedAt: "2024-02-10",
    readTime: "8 min read",
    category: "Success Stories",
    tags: ["scholarship", "medicine", "inspiration"],
    image: "/placeholder.svg?height=400&width=600&text=Medical+Student",
    featured: true,
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    title: "Digital Skills That Changed Everything: A Refugee's Tech Journey",
    excerpt:
      "Learn how Jean-Claude transformed his life by mastering digital literacy through RefEd Bridge's comprehensive online courses.",
    content:
      "When Jean-Claude first arrived at the refugee settlement, he had never used a computer. Today, he's studying software engineering in Germany...",
    author: "Ahmed Hassan",
    authorRole: "Digital Skills Instructor",
    publishedAt: "2024-02-08",
    readTime: "6 min read",
    category: "Education",
    tags: ["digital-skills", "technology", "success"],
    image: "/placeholder.svg?height=400&width=600&text=Digital+Learning",
    featured: false,
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    title: "The Power of Mentorship: Building Bridges to Success",
    excerpt:
      "Explore how our mentorship program connects refugee students with experienced professionals, creating pathways to higher education.",
    content:
      "Mentorship is at the heart of what we do at RefEd Bridge. Our program pairs refugee students with experienced professionals who provide guidance, support, and inspiration...",
    author: "Dr. Maria Santos",
    authorRole: "Mentorship Coordinator",
    publishedAt: "2024-02-05",
    readTime: "7 min read",
    category: "Mentorship",
    tags: ["mentorship", "guidance", "support"],
    image: "/placeholder.svg?height=400&width=600&text=Mentorship+Program",
    featured: true,
    likes: 156,
    comments: 28,
  },
  {
    id: 4,
    title: "Scholarship Application Tips: Your Guide to Success",
    excerpt:
      "Master the art of scholarship applications with our comprehensive guide, featuring tips from successful RefEd Bridge alumni.",
    content:
      "Applying for scholarships can be overwhelming, especially when English isn't your first language. Here are proven strategies that have helped our students secure funding...",
    author: "Lisa Chen",
    authorRole: "Academic Advisor",
    publishedAt: "2024-02-03",
    readTime: "10 min read",
    category: "Scholarships",
    tags: ["scholarships", "applications", "tips"],
    image: "/placeholder.svg?height=400&width=600&text=Scholarship+Guide",
    featured: false,
    likes: 298,
    comments: 67,
  },
  {
    id: 5,
    title: "Breaking Language Barriers: English Proficiency Success Stories",
    excerpt:
      "See how our English proficiency courses have helped thousands of refugee students achieve their academic dreams.",
    content:
      "Language is often the biggest barrier to higher education for refugee students. Our English proficiency program has helped over 2,500 students improve their language skills...",
    author: "Prof. James Wilson",
    authorRole: "English Language Coordinator",
    publishedAt: "2024-01-30",
    readTime: "5 min read",
    category: "Education",
    tags: ["english", "language", "proficiency"],
    image: "/placeholder.svg?height=400&width=600&text=English+Learning",
    featured: false,
    likes: 167,
    comments: 23,
  },
  {
    id: 6,
    title: "Mental Health and Wellness: Supporting Student Success",
    excerpt: "Understanding the importance of mental health support in the educational journey of refugee students.",
    content:
      "The journey from displacement to higher education is challenging not just academically, but emotionally and psychologically. Our wellness program provides crucial support...",
    author: "Dr. Fatima Al-Zahra",
    authorRole: "Wellness Counselor",
    publishedAt: "2024-01-28",
    readTime: "9 min read",
    category: "Wellness",
    tags: ["mental-health", "wellness", "support"],
    image: "/placeholder.svg?height=400&width=600&text=Mental+Health+Support",
    featured: false,
    likes: 134,
    comments: 19,
  },
]

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Success Stories", count: blogPosts.filter((p) => p.category === "Success Stories").length },
  { name: "Education", count: blogPosts.filter((p) => p.category === "Education").length },
  { name: "Mentorship", count: blogPosts.filter((p) => p.category === "Mentorship").length },
  { name: "Scholarships", count: blogPosts.filter((p) => p.category === "Scholarships").length },
  { name: "Wellness", count: blogPosts.filter((p) => p.category === "Wellness").length },
]

const featuredStats = [
  { icon: Users, label: "Students Helped", value: "2,500+" },
  { icon: Award, label: "Scholarships Secured", value: "150+" },
  { icon: GraduationCap, label: "Universities Partnered", value: "50+" },
  { icon: Globe, label: "Countries Reached", value: "25" },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      if (sortBy === "oldest") return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      if (sortBy === "popular") return b.likes - a.likes
      return 0
    })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RefEd Bridge Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of hope, educational insights, and resources for refugee students pursuing higher education
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {featuredStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">Featured</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
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
                Find Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search articles..."
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
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Posts */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Articles ({filteredPosts.length})</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>Showing {filteredPosts.length} results</span>
              </div>
            </div>

            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                        {post.featured && (
                          <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">Featured</Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">•</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                          <Button size="sm" variant="outline">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search terms or category filter</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All")
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.name ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Popular This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.likes - a.likes)
                    .slice(0, 3)
                    .map((post, index) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-2 hover:text-blue-600 cursor-pointer">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest stories and educational resources delivered to your inbox
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tags Cloud */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => setSearchTerm(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-xl mb-6 opacity-90">
              Have an inspiring educational journey? We'd love to feature your story on our blog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Submit Your Story
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
