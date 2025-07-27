import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Mountain, Trees, Waves, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    name: "Nyiragongo Volcano",
    region: "North Kivu",
    category: "Adventure",
    icon: Mountain,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Home to the world's largest lava lake, Nyiragongo offers one of the most spectacular volcanic experiences on Earth.",
    highlights: ["Active lava lake", "Overnight camping", "Challenging trek", "Stunning views"],
    bestTime: "May - September",
    difficulty: "Challenging",
  },
  {
    id: 2,
    name: "Kahuzi-Biega National Park",
    region: "South Kivu",
    category: "Wildlife",
    icon: Trees,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "UNESCO World Heritage site famous for its population of eastern lowland gorillas and diverse ecosystems.",
    highlights: ["Eastern lowland gorillas", "Biodiversity hotspot", "Forest hiking", "Research center"],
    bestTime: "June - September, December - February",
    difficulty: "Moderate",
  },
  {
    id: 3,
    name: "Lake Kivu",
    region: "Both Kivus",
    category: "Nature",
    icon: Waves,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "One of Africa's Great Lakes, offering pristine waters, beautiful islands, and stunning mountain backdrops.",
    highlights: ["Island hopping", "Beach relaxation", "Fishing villages", "Water sports"],
    bestTime: "Year-round",
    difficulty: "Easy",
  },
  {
    id: 4,
    name: "Virunga National Park",
    region: "North Kivu",
    category: "Wildlife",
    icon: Trees,
    image: "/placeholder.svg?height=400&width=600",
    description: "Africa's oldest national park, home to mountain gorillas, elephants, and incredible biodiversity.",
    highlights: ["Mountain gorillas", "Diverse wildlife", "Conservation efforts", "Scenic landscapes"],
    bestTime: "June - September, December - February",
    difficulty: "Moderate to Challenging",
  },
  {
    id: 5,
    name: "Goma City",
    region: "North Kivu",
    category: "Culture",
    icon: Building,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Vibrant lakeside city serving as the gateway to Virunga National Park, with bustling markets and rich culture.",
    highlights: ["Local markets", "Cultural sites", "Lake views", "Urban exploration"],
    bestTime: "Year-round",
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Bukavu City",
    region: "South Kivu",
    category: "Culture",
    icon: Building,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Charming colonial city on Lake Kivu's southern shore, known for its architecture and cultural heritage.",
    highlights: ["Colonial architecture", "Cultural museums", "Lakefront promenade", "Local crafts"],
    bestTime: "Year-round",
    difficulty: "Easy",
  },
]

const categories = [
  { name: "All", value: "all" },
  { name: "Adventure", value: "adventure" },
  { name: "Wildlife", value: "wildlife" },
  { name: "Nature", value: "nature" },
  { name: "Culture", value: "culture" },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Destinations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the breathtaking landscapes, rich wildlife, and vibrant culture of the Kivu region
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Explore destinations on our interactive map</p>
                  <Button className="mt-4">View Full Map</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600">{destination.region}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{destination.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-2">
                    <destination.icon className="h-4 w-4" />
                    <span className="text-sm">{destination.difficulty}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      <strong>Best Time:</strong> {destination.bestTime}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Link href={`/destinations/${destination.id}`}>Learn More</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Kivu Region</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nestled in the heart of Central Africa, the Kivu region offers some of the continent's most spectacular
              landscapes and unique wildlife experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">North Kivu</h3>
                <p className="text-gray-600 mb-4">
                  Home to the famous Virunga National Park and the active Nyiragongo volcano, North Kivu offers some of
                  the most adventurous experiences in Africa. From mountain gorilla tracking to volcano trekking, this
                  region is perfect for thrill-seekers and nature enthusiasts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Virunga National Park - Africa's oldest national park</li>
                  <li>• Nyiragongo Volcano - World's largest lava lake</li>
                  <li>• Goma City - Gateway to adventure</li>
                  <li>• Mountain gorilla tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">South Kivu</h3>
                <p className="text-gray-600 mb-4">
                  Known for its pristine Lake Kivu shores and the Kahuzi-Biega National Park, South Kivu offers a more
                  relaxed but equally rewarding experience. The region combines wildlife encounters with cultural
                  immersion and scenic beauty.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kahuzi-Biega National Park - Eastern lowland gorillas</li>
                  <li>• Lake Kivu islands - Pristine waters and beaches</li>
                  <li>• Bukavu City - Colonial charm and culture</li>
                  <li>• Traditional fishing communities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
              <p className="text-xl mb-8 opacity-90">
                Choose your adventure and let us create an unforgettable journey through the Kivu region
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <Link href="/tours">Browse Tours</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                >
                  <Link href="/contact">Plan Custom Trip</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
