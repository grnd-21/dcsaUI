import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Facebook, Mail, Clock } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B85450] to-[#4C4B7A] text-white py-20 px-4 overflow-hidden" data-aos="fade-down" data-aos-duration="500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/modern-college-campus-building-in-quezon-city-phil.jpg')",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-balance">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90 text-pretty max-w-3xl mx-auto">
            Get in touch with any of our campus locations. We're here to help you start your educational journey.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>info@datamex.edu.ph</span>
          </div>
        </div>
      </section>

      {/* Fairview Branch */}
      <section className="py-12 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#B85450] text-white py-6 px-4 rounded-t-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">FAIRVIEW BRANCH</h2>
            <p className="text-center text-sm sm:text-base md:text-lg mt-2 opacity-90">
              Our flagship campus in Quezon City
            </p>
          </div>

          <Card className="rounded-t-none border-t-0">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Address */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Address</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    85 Commonwealth Ave, Quezon City, 1118 Metro Manila, Philippines
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Telephone</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">8921-8350</p>
                </div>

                {/* Connect */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Facebook className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Connect</h3>
                  </div>
                  <a
                    href="https://www.facebook.com/CSAFairview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B85450] hover:text-[#4C4B7A] transition-colors text-sm sm:text-base"
                  >
                    <Facebook className="w-5 h-5" />
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Valenzuela Branch */}
      <section className="py-12 px-4 bg-gray-50" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#B85450] text-white py-6 px-4 rounded-t-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">VALENZUELA BRANCH</h2>
            <p className="text-center text-sm sm:text-base md:text-lg mt-2 opacity-90">
              Serving the northern Metro Manila area
            </p>
          </div>

          <Card className="rounded-t-none border-t-0">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Address */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Address</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    2nd flr. Gotaco Bldg 2.32 MacArthur Highway, Valenzuela, 1440 Metro Manila
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Telephone</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">8292-7536</p>
                </div>

                {/* Connect */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Facebook className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Connect</h3>
                  </div>
                  <a
                    href="https://www.facebook.com/datamexcollegeofstadelinevalenzuela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B85450] hover:text-[#4C4B7A] transition-colors text-sm sm:text-base"
                  >
                    <Facebook className="w-5 h-5" />
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Caloocan Branch */}
      <section className="py-12 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#B85450] text-white py-6 px-4 rounded-t-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">CALOOCAN BRANCH</h2>
            <p className="text-center text-sm sm:text-base md:text-lg mt-2 opacity-90">
              Accessible location in Caloocan City
            </p>
          </div>

          <Card className="rounded-t-none border-t-0">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Address */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Address</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    357 J. Teodoro St. Cor 10th Ave, Caloocan
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Telephone</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">8366-1970</p>
                </div>

                {/* Connect */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Facebook className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Connect</h3>
                  </div>
                  <a
                    href="https://www.facebook.com/datamexcollegeofsaintadelinecaloocan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B85450] hover:text-[#4C4B7A] transition-colors text-sm sm:text-base"
                  >
                    <Facebook className="w-5 h-5" />
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meycauayan Branch */}
      <section className="py-12 px-4 bg-gray-50" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#B85450] text-white py-6 px-4 rounded-t-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">MEYCAUAYAN BRANCH</h2>
            <p className="text-center text-sm sm:text-base md:text-lg mt-2 opacity-90">
              Serving Bulacan and surrounding areas
            </p>
          </div>

          <Card className="rounded-t-none border-t-0">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Address */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Address</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    85 Requito St. Saluysoy, Meycauayan, 3023 Bulacan
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Telephone</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700">(0951) 296-5086</p>
                </div>

                {/* Connect */}
                <div className="flex flex-col items-center text-center border-2 border-[#4C4B7A] rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Facebook className="w-6 h-6 text-[#B85450]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#4C4B7A]">Connect</h3>
                  </div>
                  <a
                    href="https://www.facebook.com/datamex.meycauayan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B85450] hover:text-[#4C4B7A] transition-colors text-sm sm:text-base"
                  >
                    <Facebook className="w-5 h-5" />
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* General Information Section */}
      <section className="py-16 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4C4B7A] mb-8">General Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-[#B85450]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#4C4B7A]">Office Hours</h3>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
                  <p>
                    <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 8:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-8 h-8 text-[#B85450]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#4C4B7A]">Email Us</h3>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
                  <p>
                    <strong>General Inquiries:</strong>
                  </p>
                  <p>info@datamex.edu.ph</p>
                  <p>
                    <strong>Admissions:</strong>
                  </p>
                  <p>admissions@datamex.edu.ph</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#B85450] to-[#4C4B7A] text-white rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Contact any of our branches today to learn more about our programs and enrollment process. Our friendly
              staff is ready to help you take the next step in your education.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
