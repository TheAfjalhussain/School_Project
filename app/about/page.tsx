import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, BookOpen, Globe, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-blue-900 text-white py-16">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="School building"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div> */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-5xl font-bold font-playfair mb-4">About Dummy School</h1>
          <p className="text-xl opacity-90">Discover our story, values, and commitment to educational excellence</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1985, Dummy School began as a small institution with a big dream: to provide 
                world-class education that nurtures not just academic excellence but also character development. 
                What started with 50 students has grown into a thriving community of over 2,500 students.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founders believed that education should be holistic, preparing students not just for exams 
                but for life. This philosophy continues to guide us today as we blend traditional values with 
                modern teaching methodologies.
              </p>
              
            </div>
            <div className="relative">
              <Image
                src="https://media.istockphoto.com/id/1468140092/photo/happy-elementary-students-raising-their-hands-on-a-class-at-school.jpg?s=612x612&w=0&k=20&c=BrkqxwR_nW4WzbDCAmpQEyF-QYvML9EktH4hhCj-76U="
                alt="Historical school photo"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We strive for the highest standards in teaching and learning, ensuring every student reaches their full potential.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We foster empathy, kindness, and understanding, creating a supportive community for all.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We uphold the highest moral and ethical standards in all our interactions and decisions.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We believe in the power of collaboration and building strong relationships within our school family.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We embrace new ideas, technologies, and teaching methods to enhance the learning experience.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We prepare students to be global citizens who understand and appreciate diverse cultures.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-blue-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-800">Meet the dedicated professionals leading our school</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bottom-2 z-10 border-4 border-blue-900 rounded-2xl hover:bg-blue-900 hover:text-gray-200">
              <CardContent className="p-12">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">DR</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Robert Mitchell</h3>
                <Badge className="mb-4">Principal</Badge>
                <p className=" text-sm leading-relaxed">
                  With over 20 years in education, Dr. Mitchell brings a wealth of experience in academic leadership and student development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bottom-2 z-10 border-4 border-blue-900 rounded-2xl hover:bg-blue-900 hover:text-gray-200">
              <CardContent className="p-12">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">MS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ms. Sarah Thompson</h3>
                <Badge className="mb-4">Vice Principal</Badge>
                <p className=" text-sm leading-relaxed">
                  Ms. Thompson oversees curriculum development and teacher training, ensuring our academic standards remain exceptional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bottom-2 z-10 border-4 border-blue-900 rounded-2xl hover:bg-blue-900 hover:text-gray-200">
              <CardContent className="p-12">
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-purple-600">MR</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mr. James Rodriguez</h3>
                <Badge className="mb-4">Academic Director</Badge>
                <p className=" text-sm leading-relaxed">
                  Mr. Rodriguez leads our academic programs and works closely with department heads to maintain educational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure supporting excellence in education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Modern Classrooms</h3>
              <p className="text-sm text-gray-600">Smart boards and digital learning tools</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Science Labs</h3>
              <p className="text-sm text-gray-600">Fully equipped physics, chemistry, and biology labs</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Sports Complex</h3>
              <p className="text-sm text-gray-600">Indoor and outdoor sports facilities</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Library</h3>
              <p className="text-sm text-gray-600">Extensive collection and digital resources</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}