'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/students', label: 'Students' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/events', label: 'Events & Activities' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-100/95 backdrop-blur-md shadow-lg' : 'bg-blue-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 transition-colors text-orange-600 `} />
            <span className={`text-xl font-bold font-playfair transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Dummy School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-orange-600 ${
                  pathname === link.href 
                    ? 'text-orange-600 font-bold' 
                    : scrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
              Admissions Open
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600 bg-blue-50 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Admissions Open
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}