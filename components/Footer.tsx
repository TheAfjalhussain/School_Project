import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold font-playfair">Dummy School</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Excellence in education since 1985. Nurturing minds, building futures, and creating tomorrow's leaders.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link href="/students" className="text-gray-300 hover:text-amber-500 transition-colors">Students</Link></li>
              <li><Link href="/agenda" className="text-gray-300 hover:text-amber-500 transition-colors">Academic Agenda</Link></li>
              <li><Link href="/achievements" className="text-gray-300 hover:text-amber-500 transition-colors">Student Achievements</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-amber-500 transition-colors">Events</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Primary Education</li>
              <li>Secondary Education</li>
              <li>Higher Secondary</li>
              <li>Science & Technology</li>
              <li>Arts & Humanities</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">123 Education Lane, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">info@harmonyacademy.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 Dummy School. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}