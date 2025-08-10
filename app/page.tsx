'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  BookOpen, 
  Trophy, 
  Star, 
  Calendar, 
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Microscope,
  Palette,
  Music,
  Calculator,
  GraduationCap,
  CheckCircle,
  Play
} from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span className="animate-count-up">{count}{suffix}</span>;
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "Alumni, Class of 2020",
      image: "SA",
      content: "Dummy School provided me with not just excellent education, but also the confidence and skills I needed to succeed in university and beyond.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      role: "Parent",
      image: "MJ",
      content: "The teachers at Dummy School genuinely care about each student's success. My daughter has flourished both academically and personally.",
      rating: 5
    },
    {
      name: "Emily Liu",
      role: "Student, Grade 10",
      image: "EL",
      content: "I love coming to school every day! The teachers make learning fun and exciting, and I've made so many great friends here.",
      rating: 5
    },
    {
      name: "Dr. Robert Chen",
      role: "Parent & Professor",
      image: "RC",
      content: "As an educator myself, I'm impressed by the innovative teaching methods and the holistic approach to student development at Dummy School.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);



  const images = [
    "https://media.istockphoto.com/id/1384305179/photo/school-facade-exterior-3d-illustration.jpg?s=612x612&w=0&k=20&c=aoooB4XMTc9syPNeG0aR-gttZVlfAmak8WxY9wxcvDo=",
    "https://media.istockphoto.com/id/1847784988/photo/293.jpg?s=612x612&w=0&k=20&c=Z_nwOLyqrSPrh4yowDp-29KamuPljt1KMDu6OIawYVc=",
    "https://media.istockphoto.com/id/1464533610/photo/sunny-elementary-campus.jpg?s=612x612&w=0&k=20&c=KUBXyKkvH8v6XqNuzassUqs0mLqmqJ03pbrU1ALhDGs="
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     
  


    <section className="relative h-screen flex items-center pl-24 md:pl-48 overflow-hidden">
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        <Image
          src={images[currentIndex]}
          alt="Slider background"
          fill
          className=" transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray"></div>
      </div>

      <div className="relative z-10 text-white max-w-3xl mt-10">
        <h1 className="text-xl md:text-4xl font-bold font-playfair mb-6 animate-fade-in-up">
          Dummy International <span className="">School</span>
        </h1>
        <p
          className="mb-8 opacity-90 text-gray-100 max-w-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Dummy International School in india is a beacon of educational excellence. Recognized as the best ICSE school in india, it offers students a nurturing environment where academic rigor meets character development.
        </p>
        <Button
          size="lg"
          className="border-2 border-gray-400 hover:bg-blue-900"
        >
          Apply for Admission <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  



      {/* Statistics Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter end={25} duration={2000} suffix="+" />
              </div>
              <p className="text-gray-400">Years of Excellence</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                <Counter end={2500} duration={2500} suffix="+" />
              </div>
              <p className="text-gray-400">Happy Students</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                <Counter end={150} duration={2000} suffix="+" />
              </div>
              <p className="text-gray-400">Expert Teachers</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <Counter end={95} duration={2200} suffix="%" />
              </div>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-3xl font-bold font-playfair text-gray-900 mb-6">
                About Dummy School
              </h2>
              <p className="text-md text-gray-600 mb-6 leading-relaxed">
                For over 25 years, Dummy School has been at the forefront of educational excellence, 
                shaping young minds and preparing students for a bright future. Our commitment to holistic 
                development ensures that every student receives the best foundation for success.
              </p>
              <p className="text-md text-gray-600 mb-8 leading-relaxed">
                We believe in nurturing not just academic brilliance but also character, creativity, and 
                critical thinking. Our state-of-the-art facilities, experienced faculty, and innovative 
                teaching methods create an environment where students thrive and reach their full potential.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Academic Excellence</h3>
                    <p className="text-sm text-gray-600">Top-tier curriculum</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Character Building</h3>
                    <p className="text-sm text-gray-600">Values & ethics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-sm text-gray-600">Modern teaching methods</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safe Environment</h3>
                    <p className="text-sm text-gray-600">Secure & nurturing</p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Know More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative animate-fade-in-up">
              <Image
                src="https://lgisdehradun.com/wp-content/uploads/2025/07/1.jpg"
                alt="Students studying"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Why Choose Dummy School?</h2>
            <p className="text-xl text-gray-600">Discover what makes us the preferred choice for quality education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">25+ years of educational excellence with 98% college acceptance rate and outstanding academic achievements.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
                <p className="text-gray-600">Highly qualified teachers with advanced degrees and years of experience in their respective fields.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
                <p className="text-gray-600">State-of-the-art laboratories, smart classrooms, library, sports complex, and technology-enabled learning.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-gray-600">International curriculum, cultural exchange programs, and preparation for global citizenship.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Holistic Development</h3>
                <p className="text-gray-600">Focus on academics, sports, arts, leadership, and character development for well-rounded growth.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center hover:bg-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Award-Winning Programs</h3>
                <p className="text-gray-600">Nationally recognized programs in science, mathematics, arts, and athletics with numerous accolades.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-indigo-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-blue-900 mb-4">School Overview</h2>
            <p className="text-xl text-gray-600">A comprehensive look at our educational ecosystem</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Rigorous curriculum aligned with international standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Advanced Placement (AP) courses in 15+ subjects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>STEM-focused programs with hands-on learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Multilingual education with 5 language options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Research opportunities and science fair participation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Academic excellence"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Student life"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Life & Activities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>50+ clubs and extracurricular activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Competitive sports teams in 12 different sports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Arts programs including music, theater, and visual arts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Student government and leadership opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Community service and volunteer programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Learning Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive educational pathways for every student</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">STEM Excellence</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced mathematics, science, technology, and engineering programs</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Robotics & AI</li>
                  <li>• Advanced Physics</li>
                  <li>• Computer Science</li>
                  <li>• Engineering Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Arts & Creativity</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive arts education fostering creative expression</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Visual Arts</li>
                  <li>• Digital Design</li>
                  <li>• Theater Arts</li>
                  <li>• Creative Writing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Music & Performance</h3>
                <p className="text-gray-600 text-sm mb-4">World-class music education and performance opportunities</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Orchestra</li>
                  <li>• Jazz Band</li>
                  <li>• Choir</li>
                  <li>• Music Theory</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Global Studies</h3>
                <p className="text-gray-600 text-sm mb-4">International perspective and cultural understanding</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• World Languages</li>
                  <li>• Cultural Studies</li>
                  <li>• Model UN</li>
                  <li>• Exchange Programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Image Gallery Preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Student Life Gallery</h2>
            <p className="text-xl text-gray-600">Capturing moments of learning, growth, and achievement</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Students in classroom"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Science lab"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Sports activities"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Cultural events"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Art class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/6146962/pexels-photo-6146962.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Technology lab"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Library study"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 hover-lift">
              <Image
                src="https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Graduation ceremony"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className='bg-transparent'>
              View All Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            To provide a nurturing environment where every student can discover their potential, 
            develop critical thinking skills, and become confident, compassionate leaders who 
            contribute positively to society.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover-lift border hover:bg-gray-100">
              <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="opacity-80">Rigorous curriculum designed to challenge and inspire students to reach their full potential.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover-lift border hover:bg-gray-100">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="opacity-80">Building strong relationships and fostering a sense of belonging within our school family.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover-lift border hover:bg-gray-100">
              <Trophy className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Future Ready</h3>
              <p className="opacity-80">Preparing students with 21st-century skills for success in an evolving world.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Who Should Apply */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Who Should Apply?</h2>
            <p className="text-xl text-gray-600">Dummy School welcomes students who are ready to excel</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ambitious Learners</h3>
              <p className="text-gray-600">Students eager to challenge themselves and strive for excellence in academics.</p>
            </div>
            
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future Leaders</h3>
              <p className="text-gray-600">Young minds ready to develop leadership skills and make a positive impact.</p>
            </div>
            
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative Thinkers</h3>
              <p className="text-gray-600">Students who think outside the box and embrace innovation in learning.</p>
            </div>
            
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover-lift">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">All-Round Achievers</h3>
              <p className="text-gray-600">Students committed to excelling in academics, sports, and extracurricular activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Hear from students, parents, and alumni</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-600 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonials[currentTestimonial].image}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}