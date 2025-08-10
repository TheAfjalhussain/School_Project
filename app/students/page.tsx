import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  BookOpen, 
  Trophy, 
  Star, 
  GraduationCap,
  Target,
  Heart,
  Globe,
  Lightbulb,
  Music,
  Palette,
  Calculator,
  Microscope
} from 'lucide-react';

export default function StudentsPage() {
  const studentProfiles = [
    {
      name: "Alex Sterling",
      grade: "Grade 12",
      achievements: ["Valedictorian 2024", "National Merit Scholar", "MIT Acceptance"],
      interests: ["Mathematics", "Physics", "Robotics"],
      image: "AS",
      quote: "Dummy School challenged me to think beyond limits and pursue my passion for STEM.",
      color: "blue"
    },
    {
      name: "Maya Chen",
      grade: "Grade 11",
      achievements: ["Science Fair Winner", "Research Publication", "Intel Finalist"],
      interests: ["Chemistry", "Environmental Science", "Research"],
      image: "MC",
      quote: "The research opportunities here have allowed me to contribute to real scientific discoveries.",
      color: "green"
    },
    {
      name: "Jordan Rivera",
      grade: "Grade 10",
      achievements: ["National Art Award", "Gallery Exhibition", "Design Competition"],
      interests: ["Visual Arts", "Digital Design", "Photography"],
      image: "JR",
      quote: "The arts program here has helped me find my creative voice and artistic identity.",
      color: "purple"
    },
    {
      name: "Sophia Williams",
      grade: "Grade 12",
      achievements: ["Student Council President", "Debate Champion", "Harvard Acceptance"],
      interests: ["Public Speaking", "Politics", "Community Service"],
      image: "SW",
      quote: "Leadership opportunities at Dummy School prepared me for making a difference in the world.",
      color: "amber"
    },
    {
      name: "Ethan Park",
      grade: "Grade 11",
      achievements: ["Orchestra Concertmaster", "State Music Competition", "Composition Award"],
      interests: ["Classical Music", "Composition", "Music Theory"],
      image: "EP",
      quote: "The music program here has nurtured my passion and helped me grow as a musician.",
      color: "red"
    },
    {
      name: "Isabella Martinez",
      grade: "Grade 9",
      achievements: ["Math Olympiad Medalist", "Coding Competition Winner", "App Developer"],
      interests: ["Mathematics", "Computer Science", "App Development"],
      image: "IM",
      quote: "Even as a freshman, I've found incredible opportunities to explore my interests in technology.",
      color: "indigo"
    }
  ];

  const studentClubs = [
    {
      name: "Robotics Club",
      members: 45,
      description: "Building and programming robots for competitions",
      achievements: ["Regional Champions 2024", "National Qualifiers"],
      icon: <Microscope className="h-8 w-8" />
    },
    {
      name: "Debate Society",
      members: 32,
      description: "Developing critical thinking and public speaking skills",
      achievements: ["State Champions", "National Tournament Participants"],
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      name: "Art Club",
      members: 28,
      description: "Exploring various forms of artistic expression",
      achievements: ["Gallery Exhibitions", "Community Art Projects"],
      icon: <Palette className="h-8 w-8" />
    },
    {
      name: "Music Ensemble",
      members: 55,
      description: "Orchestra, band, and choir performances",
      achievements: ["State Music Festival", "Concert Tours"],
      icon: <Music className="h-8 w-8" />
    },
    {
      name: "Math Club",
      members: 38,
      description: "Advanced mathematics and problem-solving",
      achievements: ["Math Olympiad Medals", "Competition Winners"],
      icon: <Calculator className="h-8 w-8" />
    },
    {
      name: "Environmental Club",
      members: 42,
      description: "Sustainability projects and environmental awareness",
      achievements: ["Green School Certification", "Community Gardens"],
      icon: <Globe className="h-8 w-8" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-5xl font-bold font-playfair mb-4">Our Students</h1>
          <p className="text-xl opacity-90">Meet the bright minds that make Dummy School exceptional</p>
        </div>
      </section>

      {/* Student Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-gray-600">Total Students</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Student Clubs</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-gray-600">Countries Represented</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-gray-600">Participation Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Students */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-blue-900 mb-4">Student Spotlight</h2>
            <p className="text-xl text-gray-600">Celebrating our outstanding students and their achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProfiles.map((student, index) => (
              <Card key={index} className="hover-lift border-2 border-blue-900 rounded-xl hover:bg-blue-900 hover:text-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-24 h-24 bg-${student.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl font-bold text-${student.color}-600`}>{student.image}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                  <Badge className="mb-4">{student.grade}</Badge>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold  mb-2">Achievements</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {student.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold  mb-2">Interests</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {student.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className=" text-sm italic">"{student.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Student Life at Dummy School</h2>
            <p className="text-xl text-gray-600">A vibrant community where students thrive academically and personally</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Rigorous curriculum with 20+ AP courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Personalized learning plans for every student</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Research opportunities with faculty mentors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-amber-600" />
                  </div>
                  <span>National competition participation and awards</span>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in classroom"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80">
              <Image
                src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Student activities"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beyond the Classroom</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <span>50+ clubs and extracurricular activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Student government and leadership roles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Community service and volunteer opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Cultural events and international exchanges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Student Clubs & Organizations</h2>
            <p className="text-xl text-gray-600">Discover your passion and connect with like-minded peers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentClubs.map((club, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {club.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                      <p className="text-sm text-gray-500">{club.members} members</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Achievements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {club.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Where our graduates are making their mark</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">College Acceptance</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">of graduates accepted to their first-choice colleges</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
                <p className="text-gray-600">in scholarships awarded to Class of 2024</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">National Recognition</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <p className="text-gray-600">students recognized at national level annually</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
    </div>
  );
}