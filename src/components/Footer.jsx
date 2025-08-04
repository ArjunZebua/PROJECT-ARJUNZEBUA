import { Facebook, Twitter, Instagram, Pointer, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Image and CTA */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img
                src="https://hypesneakerid.com/wp-content/uploads/2024/07/TAS-GEN-Z.jpg"
                alt="Tas Gen Z Collection"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Discover Amazing Collections
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Explore our exclusive range of trendy bags that perfectly blend style with functionality. 
                From casual to premium collections, find your perfect match.
              </p>
              
              <a
                href="http://www.urbanicon.co.id/?gad_source=1&gclid=Cj0KCQiAgJa6BhCOARIsAMiL7V8wEQJtgEVPLPmpjAj8IQwgEa95LfTuVjaZIXpGdPTd1s3tniv4gTwaAg4HEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <Pointer className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore Collection
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                We d love to hear from you. Contact us for any inquiries or support.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+6281262794631" className="text-lg font-semibold text-white hover:text-green-400 transition-colors duration-200">
                    +62 812 6279 4631
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-lg font-semibold text-white">
                    Jl. Cicendo No. 08, Bandung, Indonesia
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:BagInstyle@gmail.com" className="text-lg font-semibold text-white hover:text-purple-400 transition-colors duration-200">
                    BagInstyle@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-center lg:text-left">Follow Us</h4>
              <div className="flex justify-center lg:justify-start gap-4">
                
                <a
                  href="https://www.instagram.com/jun_s0304/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 px-4 py-3 rounded-xl hover:from-pink-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/NoobKu34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <Facebook className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Facebook</span>
                </a>

                <a
                  href="https://x.com/arjun_zebu42814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <Twitter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-gray-300 text-sm">
                © 2024 BagInstyle Girls. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}