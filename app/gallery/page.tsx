import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Download, Share2, Heart } from 'lucide-react';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Interactive Learning",
      category: "Academics",
      description: "Students engaged in collaborative learning activities"
    },
    {
      src: "https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Science Laboratory",
      category: "STEM",
      description: "Advanced experiments in our state-of-the-art lab"
    },
    {
      src: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Athletic Excellence",
      category: "Sports",
      description: "Students competing in inter-school championships"
    },
    {
      src: "https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Cultural Celebration",
      category: "Arts",
      description: "Annual cultural festival showcasing diverse talents"
    },
    {
      src: "https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Art Workshop",
      category: "Arts",
      description: "Creative expression through visual arts"
    },
    {
      src: "https://images.pexels.com/photos/6146962/pexels-photo-6146962.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Technology Lab",
      category: "STEM",
      description: "Robotics and programming sessions"
    },
    {
      src: "https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Library Study",
      category: "Academics",
      description: "Quiet study sessions in our modern library"
    },
    {
      src: "https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Graduation Day",
      category: "Events",
      description: "Celebrating academic achievements and milestones"
    },
    {
      src: "https://images.pexels.com/photos/8199167/pexels-photo-8199167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Music Performance",
      category: "Arts",
      description: "Orchestra performance at the annual concert"
    },
    {
      src: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Group Discussion",
      category: "Academics",
      description: "Collaborative learning and peer interaction"
    },
    {
      src: "https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Drama Club",
      category: "Arts",
      description: "Theater rehearsal for the spring production"
    },
    {
      src: "https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Basketball Team",
      category: "Sports",
      description: "Training session with our championship team"
    }
  ];

  const categories = ["All", "Academics", "STEM", "Sports", "Arts", "Events"];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className=" bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-12 w-12 text-white mx-auto mb-4 opacity-80" />
          <h1 className="text-5xl text-white font-bold font-playfair mb-4">Student Life Gallery</h1>
          <p className="text-xl text-gray-200 opacity-90">Capturing moments of learning, growth, and achievement at Dummy School</p>
        </div>
      </section>

      {/* Gallery Stats */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift border hover:bg-gray-100 p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Photos</p>
            </div>
            <div className="hover-lift border hover:bg-gray-100 p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Events Covered</p>
            </div>
            <div className="hover-lift border hover:bg-gray-100 p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <p className="text-gray-600">Activities</p>
            </div>
            <div className="hover-lift border hover:bg-gray-100 p-6">
              <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
              <p className="text-gray-600">Months Coverage</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Category Filter
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {galleryImages.map((image, index) => (
              <Card key={index} className="hover-lift overflow-hidden group border-4 border-orange-600 p-2">
                <div className="relative h-64 border-4 ">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {/* <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600">{image.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className=" text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-playfair text-blue-900 mb-12 text-center">Featured Moments</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Science Fair Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our annual science fair brings together the brightest young minds to showcase 
                innovative projects and groundbreaking research. Students from all grades 
                participate in this celebration of scientific discovery and creativity.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📅 March 2025</span>
                <span>👥 200+ Participants</span>
                <span>🏆 15 Awards</span>
              </div>
            </div>
            <div className="relative h-80">
              <Image
                src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Science Fair"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80">
              <Image
                src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Cultural Festival"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Diversity Celebration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our multicultural festival celebrates the rich diversity of our student body. 
                With performances, food, and exhibitions representing over 25 countries, 
                this event showcases the global community that makes Dummy School special.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📅 November 2024</span>
                <span>🌍 25+ Countries</span>
                <span>🎭 30+ Performances</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-4">Share Your Moments</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have photos from school events? We'd love to feature them in our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Camera className="mr-2 h-5 w-5" />
              Upload Photos
            </Button>
            <Button variant="outline" size="lg">
              Submission Guidelines
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}