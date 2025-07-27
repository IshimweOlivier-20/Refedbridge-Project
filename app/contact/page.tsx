"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Globe, Users, BookOpen } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about RefEd Bridge? We're here to help you on your educational journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <MapPin className="h-5 w-5" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    RefEd Bridge Headquarters
                    <br />
                    Innovation Hub, Kigali Heights
                    <br />
                    Kigali, Rwanda
                    <br />
                    East Africa
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-600">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Main: +250 788 123 456
                    <br />
                    WhatsApp: +250 788 123 457
                    <br />
                    Emergency: +250 788 123 458
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Mail className="h-5 w-5" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    General: info@refedbridge.org
                    <br />
                    Support: support@refedbridge.org
                    <br />
                    Partnerships: partners@refedbridge.org
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Clock className="h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM (EAT)</p>
                    <p>Saturday: 9:00 AM - 4:00 PM (EAT)</p>
                    <p>Sunday: Emergency support only</p>
                    <p className="text-sm text-blue-600 mt-2">24/7 online platform access</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    WhatsApp Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 opacity-90">Get instant help from our support team</p>
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100">Chat on WhatsApp</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+250 788 123 456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="courses">Course Information</SelectItem>
                          <SelectItem value="scholarships">Scholarship Guidance</SelectItem>
                          <SelectItem value="mentorship">Mentorship Program</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry, questions, or how we can help you..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
                <p className="text-xl opacity-90">
                  Check out these quick resources or contact our support team directly
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Help Center</h3>
                  <p className="opacity-90 mb-4">Browse our comprehensive FAQ and guides</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Visit Help Center
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                  <p className="opacity-90 mb-4">Connect with other students and mentors</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
                  >
                    Join Community
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="opacity-90 mb-4">Chat with our support team in real-time</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-emerald-600 bg-transparent"
                  >
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">How do I register for RefEd Bridge?</h4>
                    <p className="text-gray-600">
                      Click "Get Started" on our homepage, choose your role (Student, Mentor, Teacher), and complete the
                      registration form. Approval typically takes 24-48 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Are the courses really free?</h4>
                    <p className="text-gray-600">
                      Yes! All our courses are completely free for refugee students. We're funded by grants and
                      donations to ensure education is accessible to everyone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Can I access courses offline?</h4>
                    <p className="text-gray-600">
                      Yes, many of our courses can be downloaded for offline access. This is especially helpful for
                      students with limited internet connectivity.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">How does the mentorship program work?</h4>
                    <p className="text-gray-600">
                      After registration, you'll be matched with a mentor based on your goals and interests. You can
                      schedule regular sessions and communicate through our secure platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">What scholarships are available?</h4>
                    <p className="text-gray-600">
                      We maintain a database of 500+ scholarships specifically for refugee students, including
                      undergraduate, graduate, and vocational programs worldwide.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Is technical support available?</h4>
                    <p className="text-gray-600">
                      Yes! Our technical support team is available Monday-Friday 8AM-6PM EAT, with emergency support
                      available 24/7 through WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
