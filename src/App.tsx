


import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { WaitlistForm } from "./components/WaitlistForm";
import { motion } from "framer-motion";
import {
  Heart,
  Calendar,
  DollarSign,
  UserCheck,
  Zap,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  BookOpen,
  User,
} from "lucide-react";

import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              
              <h1
                className="text-2xl font-bold"
                style={{ color: "#9CAF88" }}
              >
                Jam'a
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#vendors"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                For Vendors
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <WaitlistForm>
                <Button
                  className="text-white rounded-full px-6 py-2"
                  style={{ backgroundColor: "#F88379" }}
                >
                  Join the Waitlist
                </Button>
              </WaitlistForm>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-[64px] pb-[70px] overflow-hidden pr-[0px] pl-[0px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-md mx-auto sm:max-w-2xl sm:text-center lg:text-left lg:max-w-none">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Plan Perfect Events with{" "}
                <span style={{ color: "#9CAF88" }}>
                  AI Magic
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From birthdays to bridal showers, community
                gatherings to family get-togethers. Jam'a makes
                event planning effortless with smart AI that
                matches you with perfect vendors, tracks your
                budget, and manages every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <WaitlistForm>
                  <Button
                    size="lg"
                    className="text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: "#F88379" }}
                  >
                    Join the Waitlist{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </WaitlistForm>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-4 text-lg border-2"
                  style={{
                    borderColor: "#9CAF88",
                    color: "#9CAF88",
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507503749118-52cfca8e3aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwY2VsZWJyYXRpb24lMjBwYXJ0eXxlbnwxfHx8fDE3NTcxNjk3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Event planning celebration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-800 shadow-lg">
                    <Zap
                      className="h-4 w-4 mr-1"
                      style={{ color: "#F88379" }}
                    />
                    AI-Powered
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-24"
        style={{ backgroundColor: "#f8faf9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Planning your perfect event has never been easier.
              Just three simple steps to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#9CAF88" }}
              >
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Tell Us Your Vision
              </h3>
              <p className="text-gray-600">
                Share your event details, preferences, and
                budget. Our AI learns what makes your
                celebration special.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#F88379" }}
              >
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Get Matched
              </h3>
              <p className="text-gray-600">
                Our AI instantly connects you with the perfect
                vendors, venues, and services tailored to your
                needs.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#9CAF88" }}
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Celebrate Perfectly
              </h3>
              <p className="text-gray-600">
                Track everything in one place, manage RSVPs, and
                enjoy your stress-free, perfectly planned event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white px-[0px] py-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Plan Amazing Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features that make event planning
              effortless and enjoyable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "#9CAF88" }}
                >
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  AI Vendor Matching
                </h3>
                <p className="text-gray-600 mb-6">
                  Our smart AI analyzes your preferences,
                  budget, and event details to match you with
                  the perfect vendors automatically.
                </p>
                <div
                  className="flex items-center text-sm"
                  style={{ color: "#F88379" }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Learn more
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "#F88379" }}
                >
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Smart Budget Tracking
                </h3>
                <p className="text-gray-600 mb-6">
                  Keep your event budget on track with real-time
                  spending alerts, cost breakdowns, and
                  money-saving suggestions.
                </p>
                <div
                  className="flex items-center text-sm"
                  style={{ color: "#F88379" }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Learn more
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "#9CAF88" }}
                >
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Guest RSVP Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Send beautiful invitations, track responses,
                  manage dietary preferences, and get real-time
                  headcount updates.
                </p>
                <div
                  className="flex items-center text-sm"
                  style={{ color: "#F88379" }}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Learn more
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Vendors */}
      <section
        id="vendors"
        className="py-24"
        style={{ backgroundColor: "#f8faf9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                For Event Vendors & Service Providers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join Jam'a's network and get discovered by
                clients who are perfect for your services. Our
                AI matches you with events that fit your
                expertise, location, and availability.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1"
                    style={{ backgroundColor: "#9CAF88" }}
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Get More Bookings
                    </h4>
                    <p className="text-gray-600">
                      Connect with clients actively planning
                      events in your area and specialty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1"
                    style={{ backgroundColor: "#F88379" }}
                  >
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Manage Your Calendar
                    </h4>
                    <p className="text-gray-600">
                      Keep track of bookings, availability, and
                      client communications in one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1"
                    style={{ backgroundColor: "#9CAF88" }}
                  >
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Build Your Reputation
                    </h4>
                    <p className="text-gray-600">
                      Collect reviews and showcase your work to
                      attract more high-quality clients.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="text-white rounded-full px-8 py-4 text-lg shadow-lg"
                style={{ backgroundColor: "#F88379" }}
              >
                Join as Vendor
              </Button>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679625769951-bf46136b682a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGFsJTIwc2hvd2VyJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU3MTY5NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wedding planning setup"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Blog */}
      <section className="py-24 bg-white px-[0px] py-[50px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#F88379" }}
          >
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join Our Blog
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert event planning tips, inspiring success
            stories, and the latest updates from the Jam'a
            community. Delivered weekly to your inbox.
          </p>
          <Card className="max-w-md mx-auto p-8 border-0 shadow-lg rounded-2xl bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Your email for blog updates"
                  className="flex-1 rounded-full border-2 px-6 py-3"
                  style={{ borderColor: "#F88379" }}
                />
                <Button
                  className="text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: "#9CAF88" }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Weekly tips and stories • Unsubscribe anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="py-[70px]"
        style={{ backgroundColor: "#f8faf9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meet the Team */}
          <div className="text-center mb-[40px] mt-[0px] mr-[0px] ml-[0px]">
            <motion.h2
             className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet the Team
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The passionate minds behind Jam'a who are
              revolutionizing event planning with AI.
            </motion.p>
          </div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24 place-items-center">
  {[
    {
      name: "Rawan Mudawi",
      role: "Co-founder & CEO",
      delay: 0,
    },
    {
      name: "Ummay Habiba",
      role: "Co-founder & CMO",
      delay: 0.1,
    },
    {
      name: "Zainab Latif",
      role: "Co-founder & CTO",
      delay: 0.2,
    },
    {
      name: "Lubna Mohammed",
      role: "Project Manager",
      delay: 0.3,
    },
    {
      name: "Noshin Sayara",
      role: "Software Engineer",
      delay: 0.4,
    },
  ].map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: member.delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="w-full max-w-[240px]"
    >
      <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 h-64 w-full flex flex-col justify-center items-center">


                  <CardContent className="p-0 text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "#9CAF88"
                            : "#F88379",
                      }}
                    >
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center whitespace-nowrap text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Jam'a Exists & What We Do */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white h-full">
                <CardContent className="p-0">
                  <h3
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
                  >
                    Why Jam'a Exists?
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Two strangers in Doha were struggling with
                      very different events. One was drowning in
                      calls and vendor chaos trying to plan a
                      birthday party, while the other wrestled
                      with organizing a small bridal shower,
                      juggling bookings and logistics. Despite
                      their different challenges, they came to
                      the same realization: planning events
                      shouldn't be this stressful.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white h-full">
                <CardContent className="p-0">
                  <h3
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
                  >
                    What We Do?
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      And that's how Jam'a was born: a platform
                      where hosts can plan without the headache,
                      vendors get to shine doing what they do
                      best, and guests get to truly enjoy the
                      celebration, the way it's meant to be.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section
        className="py-24"
        style={{ backgroundColor: "#9CAF88" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Event Planning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing community of early adopters and be
            part of the event planning revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistForm>
              <Button
                size="lg"
                className="text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: "#F88379" }}
              >
                Join the Waitlist{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </WaitlistForm>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg border-2 border-white text-white hover:bg-white transition-all"
              style={{
                borderColor: "white",
                color: "white",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#9CAF88";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor =
                  "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="flex items-center text-2xl font-bold mb-4 text-white">
                <img 
                      src="static\Jam'a's logo.jpg" 
                      alt="Jam'a Logo" 
                      className="w-8 h-8 mr-2"
                        />
                        Jam'a
              </h3>

              <p className="font-bold text-green-400 mb-6 max-w-md">
                  Connect, Gather, Create
                  </p>

                <p className="text-gray-400 font-bold mb-6 max-w-md">Phone: +974-50414599 <br />
                Email: Jamaa.qatar@gmail.com</p>
              
              
            </div>

            <div>
              <h3 className="font-bold mb-6">Follow Us</h3>
              <ul className="space-y-2 text-gray-400">
                <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <FaEnvelope className="h-5 w-5" />
                </div>
              </div>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Social media coming soon
                  </a>
                </li>

                
                
                
              </ul>
            </div>

            
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Jam'a. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

