import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-blue-900 py-16">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="School events"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/60"></div>
        </div> */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Events & Activities</h1>
          <p className="text-xl opacity-90">Discover the vibrant life at Dummy School</p>
        </div>
      </section>

      {/* About Events & Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-6">
                Enriching Student Life
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Dummy School, we believe that learning extends beyond the classroom. Our diverse 
                range of events and activities provides students with opportunities to explore their 
                interests, develop new skills, and create lasting memories.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From academic competitions and cultural festivals to sports tournaments and community 
                service projects, there's something for everyone to participate in and enjoy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-600">Annual Events</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <p className="text-gray-600">Clubs & Societies</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-600">Student Participation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                  <p className="text-gray-600">Months Activity</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students participating in activities"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-playfair text-blue-900 mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Science Fair"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">Academic</Badge>
              </div>
              <CardHeader>
                <CardTitle>Annual Science Fair 2025</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>April 15, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Science Building</span>
                </div>
                <p className="text-gray-600">Students showcase innovative projects in physics, chemistry, and biology.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Sports Championship"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Sports</Badge>
              </div>
              <CardHeader>
                <CardTitle>Inter-House Sports Championship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>April 20-22, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Sports Complex</span>
                </div>
                <p className="text-gray-600">Three days of competitive sports featuring all major athletic events.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Cultural Festival"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600">Cultural</Badge>
              </div>
              <CardHeader>
                <CardTitle>Spring Cultural Festival</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>May 10, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>6:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Main Auditorium</span>
                </div>
                <p className="text-gray-600">A celebration of diversity through music, dance, and art performances.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/6146962/pexels-photo-6146962.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Robotics Competition"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-indigo-600">Technology</Badge>
              </div>
              <CardHeader>
                <CardTitle>Robotics Workshop Series</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>April 25 - May 2, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>3:30 PM - 5:30 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>STEM Lab</span>
                </div>
                <p className="text-gray-600">Hands-on robotics programming and design workshops for all levels.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Art Exhibition"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-pink-600">Arts</Badge>
              </div>
              <CardHeader>
                <CardTitle>Student Art Exhibition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>May 15-20, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Art Gallery</span>
                </div>
                <p className="text-gray-600">Showcasing the creative talents of our students across all art forms.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift p-2 border-4 border-blue-900">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Community Service"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Community</Badge>
              </div>
              <CardHeader>
                <CardTitle>Community Service Day</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>April 12, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Various Locations</span>
                </div>
                <p className="text-gray-600">Students engage in meaningful community service projects throughout the city.</p>
                <Button className="w-full mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-12 text-center">Event Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Events</h3>
                <p className="text-gray-600 text-sm mb-4">Science fairs, math competitions, debate tournaments, and academic showcases</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Science Fair</li>
                  <li>• Debate Competition</li>
                  <li>• Math Olympiad</li>
                  <li>• Research Symposium</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sports & Athletics</h3>
                <p className="text-gray-600 text-sm mb-4">Inter-house competitions, tournaments, and physical fitness events</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Annual Sports Day</li>
                  <li>• Basketball Tournament</li>
                  <li>• Track & Field</li>
                  <li>• Swimming Gala</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Programs</h3>
                <p className="text-gray-600 text-sm mb-4">Music, dance, theater, and art celebrations throughout the year</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cultural Festival</li>
                  <li>• Art Exhibition</li>
                  <li>• Music Concert</li>
                  <li>• Drama Performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Special Events</h3>
                <p className="text-gray-600 text-sm mb-4">Graduation, fundraisers, guest speakers, and community outreach</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Graduation Ceremony</li>
                  <li>• Career Day</li>
                  <li>• Alumni Meet</li>
                  <li>• Fundraising Gala</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-12 text-center">Recent Event Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Winter Science Exhibition 2024</h3>
              <p className="text-gray-600 mb-4">
                Over 200 students participated in our biggest science fair yet, showcasing 
                innovative projects ranging from renewable energy solutions to AI applications.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>200+ participants, 500+ visitors</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Science Exhibition"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-64 md:h-80">
              <Image
                src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Cultural Night"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Cultural Night</h3>
              <p className="text-gray-600 mb-4">
                A spectacular evening celebrating our diverse student body with performances 
                representing 25+ countries, food stalls, and cultural exhibitions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span>November 20, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span>25 countries represented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}