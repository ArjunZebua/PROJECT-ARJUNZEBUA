import { ShoppingBag, Star, Users, Award, Heart, Shield, Truck, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Quality",
      description: "Carefully curated collection of high-quality bags from trusted suppliers"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "5-star rated service with thousands of happy customers worldwide"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure shipping with real-time tracking for all orders"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "100% secure transactions with advanced encryption technology"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "50+", label: "Brands" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const galleryImages = [
    {
      src: "https://s4.bukalapak.com/img/96685556203/s-463-463/data.jpeg.webp",
      alt: "Elegant Handbag Collection",
      title: "Elegant Collection"
    },
    {
      src: "https://down-id.img.susercontent.com/file/039735ba0b45ade262da63f1ea28f6d2",
      alt: "Casual Crossbody Bags",
      title: "Casual Style"
    },
    {
      src: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-68315423/no-brand_promo-tas-wanita-branded-lokal-tas-selempang-wanita-tas-fashion_full01.jpg",
      alt: "Fashion Forward Bags",
      title: "Fashion Forward"
    },
    {
      src: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/4/f74b620f-e5a3-4b21-a940-4e6ed3af204a.jpg",
      alt: "Luxury Designer Bags",
      title: "Luxury Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600 font-medium">About BagInstyle</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome to BagInstyle!
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your premier destination for stylish, high-quality bags that perfectly complement your lifestyle and personality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="/gambar/gambarlogo.webp" 
                alt="BagInstyle Collection" 
                className="relative w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&crop=center";
                }}
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    I created this bag sales website with features that align perfectly with modern e-commerce needs, 
                    including advanced product search, category filtering, and intuitive user experience. Every feature 
                    has been carefully designed and developed with patience, ensuring a fast, easy, and secure shopping experience.
                  </p>
                  <p>
                    Built with React technology, this website offers a responsive and lightning-fast interface, 
                    making it easy for customers to browse through our extensive collection of quality bags. 
                    Additionally, every transaction is processed through a secure and trusted system, 
                    so you can shop with complete peace of mind.
                  </p>
                  <p>
                    We hope this website provides the perfect solution for those seeking quality bags at fantastic prices, 
                    while delivering an enjoyable shopping experience. Thank you for choosing our website for all your bag needs!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-100">
                <p className="text-gray-700 font-medium text-lg">
                  With competitive prices and modern designs, we guarantee youll find the perfect bag for every
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose BagInstyle?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We re committed to providing you with the best shopping experience and highest quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-pink-100 text-xl">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-pink-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Product Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our stunning collection of bags designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center&sig=${index}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">Premium Quality Collection</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our store or get in touch with us for personalized assistance
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Store Location</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-pink-600" />
                      </div>
                      <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <span>Personal shopping assistance available</span>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold">
                    <Award className="w-5 h-5" />
                    Trusted Since 2020
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12690.665578352168!2d106.6296581!3d-6.2040706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e468b7d45f91%3A0x924ec0de1d3f22c5!2sToko%20Tas%20Kami!5e0!3m2!1sid!2sid!4v1617950318985!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Bag?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection and discover bags that match your unique style and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;