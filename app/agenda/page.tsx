import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function AgendaPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-playfair mb-4">Academic Agenda</h1>
          <p className="text-xl opacity-90">Stay updated with our academic calendar and important events</p>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-8 text-center">Academic Year 2025-2026</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* First Term */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge className="mr-3 bg-blue-600">Term 1</Badge>
                  Fall Semester
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">August 15 - December 20, 2025</p>
                    <p className="text-sm text-gray-600">Classes begin with orientation week</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Events:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Orientation Week</span>
                      <span className="text-gray-600">Aug 15-19</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mid-term Exams</span>
                      <span className="text-gray-600">Oct 15-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Parent-Teacher Conference</span>
                      <span className="text-gray-600">Nov 10-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Exams</span>
                      <span className="text-gray-600">Dec 10-17</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Term */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge className="mr-3 bg-green-600">Term 2</Badge>
                  Winter Semester
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">January 8 - May 25, 2026</p>
                    <p className="text-sm text-gray-600">Spring semester with major activities</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Events:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Classes Resume</span>
                      <span className="text-gray-600">Jan 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Science Fair</span>
                      <span className="text-gray-600">Feb 20-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spring Break</span>
                      <span className="text-gray-600">Mar 15-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Exams</span>
                      <span className="text-gray-600">May 15-22</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summer Term */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge className="mr-3 bg-amber-600">Summer</Badge>
                  Summer Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">June 1 - July 30, 2026</p>
                    <p className="text-sm text-gray-600">Enrichment and remedial programs</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Programs:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Summer Camps</span>
                      <span className="text-gray-600">Jun 1-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remedial Classes</span>
                      <span className="text-gray-600">Jun 15-Jul 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advanced Learning</span>
                      <span className="text-gray-600">Jul 1-30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teacher Training</span>
                      <span className="text-gray-600">Jul 20-30</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-100 z-99">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-playfair text-blue-900 mb-8 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift bg-blue-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Annual Sports Day</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Sports</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 ">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>March 28, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Main Athletic Field</span>
                </div>
                <p className="text-gray-600">Inter-house competitions featuring track and field events, team sports, and athletic showcases.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-blue-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Parent-Teacher Conference</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">Academic</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>April 5-6, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Individual meetings</span>
                </div>
                <p className="text-gray-600">Scheduled meetings to discuss student progress, academic performance, and development goals.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-blue-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Science Exhibition</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">STEM</Badge>
                </div>
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
                <p className="text-gray-600">Student-led science projects and experiments showcasing innovation and scientific thinking.</p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-blue-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Cultural Festival</CardTitle>
                  <Badge className="bg-amber-100 text-amber-800">Cultural</Badge>
                </div>
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
                <p className="text-gray-600">Celebration of diversity through music, dance, drama, and art performances by our talented students.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-8 text-center">Important Academic Dates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Examination Periods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Mid-term Exams</span>
                  <span className="text-gray-600">Oct 15-22, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Final Exams</span>
                  <span className="text-gray-600">Dec 10-17, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Spring Mid-terms</span>
                  <span className="text-gray-600">Mar 5-12, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Final Exams</span>
                  <span className="text-gray-600">May 15-22, 2026</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Holiday Breaks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fall Break</span>
                  <span className="text-gray-600">Oct 5-8, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Winter Break</span>
                  <span className="text-gray-600">Dec 21 - Jan 7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Spring Break</span>
                  <span className="text-gray-600">Mar 15-22, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Summer Vacation</span>
                  <span className="text-gray-600">May 26 - Aug 14</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Application Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Early Admission</span>
                  <span className="text-gray-600">Nov 15, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Regular Admission</span>
                  <span className="text-gray-600">Feb 1, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Transfer Students</span>
                  <span className="text-gray-600">Apr 1, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Summer Programs</span>
                  <span className="text-gray-600">May 1, 2026</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}