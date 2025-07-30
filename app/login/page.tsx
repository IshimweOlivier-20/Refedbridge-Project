"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Users, BookOpen, Shield, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const roles = [
  {
    id: "learner",
    name: "Student/Learner",
    description: "Access courses, scholarships, and mentorship opportunities",
    icon: GraduationCap,
    color: "bg-blue-500",
    dashboard: "/dashboard/learner",
  },
  {
    id: "teacher",
    name: "Educator/Teacher",
    description: "Create and manage educational content and courses",
    icon: BookOpen,
    color: "bg-emerald-500",
    dashboard: "/dashboard/teacher",
  },
  {
    id: "mentor",
    name: "Mentor",
    description: "Guide and support students in their educational journey",
    icon: Users,
    color: "bg-purple-500",
    dashboard: "/dashboard/mentor",
  },
  {
    id: "admin",
    name: "Administrator",
    description: "Manage platform operations and user accounts",
    icon: Shield,
    color: "bg-red-500",
    dashboard: "/dashboard/admin",
  },
]

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!selectedRole || !email || !password) {
    alert("Please fill in all fields and select a role")
    return
  }

  setIsLoading(true)

  setTimeout(() => {
    const selectedRoleData = roles.find((role) => role.id === selectedRole)

    if (selectedRoleData) {
      if (selectedRole === "admin") {
        // Admin: Check specific credentials
        if (email === "ishimweolivier175@gmail.com" && password === "Over123") {
          console.log("Logging in as Admin")
          router.push(selectedRoleData.dashboard)
        } else {
          alert("Invalid email or password for Administrator")
        }
      } else {
        // Learner, Teacher, Mentor: Check demo credentials
        if (email === "demo@refedbridge.org" && password === "demo123") {
          console.log(`Logging in as ${selectedRoleData.name}`)
          router.push(selectedRoleData.dashboard)
        } else {
          alert(`Invalid email or password for ${selectedRoleData.name}`)
        }
      }
    }

    setIsLoading(false)
  }, 1000)
}


  const selectedRoleData = roles.find((role) => role.id === selectedRole)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your RefEd Bridge account</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role..." />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => {
                      const IconComponent = role.icon
                      return (
                        <SelectItem key={role.id} value={role.id}>
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${role.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">{role.name}</p>
                              <p className="text-xs text-gray-500">{role.description}</p>
                            </div>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>

                {/* Selected Role Preview */}
                {selectedRoleData && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${selectedRoleData.color} rounded-lg flex items-center justify-center`}
                      >
                        <selectedRoleData.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedRoleData.name}</p>
                        <p className="text-sm text-gray-600">{selectedRoleData.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Role Information */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Available Roles:</h3>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((role) => {
                  const IconComponent = role.icon
                  return (
                    <div key={role.id} className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${role.color} rounded flex items-center justify-center`}>
                        <IconComponent className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-gray-600">{role.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-800 mb-2">Demo Credentials:</h4>
          <div className="text-xs text-yellow-700 space-y-1">
            <p>Email: demo@refedbridge.org</p>
            <p>Password: demo123</p>
            <p className="italic">Select any role to explore the dashboard</p>
          </div>
        </div>
      </div>
    </div>
  )
}
