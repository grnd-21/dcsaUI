import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Users, Facebook } from "lucide-react"

export default function FairviewBranch() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#B85450] to-[#4C4B7A] text-white py-30 px-4" data-aos="fade-down" data-aos-duration="500">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fairview Branch</h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">YOUR PATH TO SUCCESS STARTS HERE!</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="h-5 w-5" />
            <span>85 Commonwealth Ave, Quezon City, 1118 Metro Manila</span>
          </div>
        </div>
      </section>

      {/* Branch Description */}
      <section className="py-16 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4C4B7A] mb-6">Welcome to Our Fairview Branch</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located at the Quezon City, Fairview branch serves as the flagship location of Datamex
                College of Saint Adeline. This modern facility offers a minimalist classrooms, computer
                laboratories, and student amenities designed to foster academic excellence and personal growth.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With easy access to public transportation and surrounded by vibrant commercial areas, our Fairview
                Branch provides students with the perfect blend of academic focus and urban convenience.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-[#B85450]" />
                  <div>
                    <h3 className="font-semibold text-[#4C4B7A]">1000+</h3>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-[#B85450]" />
                  <div>
                    <h3 className="font-semibold text-[#4C4B7A]">Flexible</h3>
                    <p className="text-sm text-gray-600">Schedules</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/FAIRVIEW_BRANCH.png"
                alt="Fairview Campus Building"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Info */}
      <section className="py-16 px-4 bg-gray-50" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4C4B7A] mb-12">Visit Our Branch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1234567890123!2d121.0123456789!3d14.6789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s85%20Commonwealth%20Ave%2C%20Quezon%20City%2C%201118%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fairview Branch Location"
                ></iframe>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#B85450] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#4C4B7A] mb-2">Address</h3>
                      <p className="text-gray-700">
                        85 Commonwealth Ave
                        <br />
                        Quezon City, 1118
                        <br />
                        Metro Manila, Philippines
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#B85450] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#4C4B7A] mb-2">Contact Information</h3>
                      <p className="text-gray-700 mb-2">
                        Phone: 8921-83-50
                      </p>
                      <p className="text-gray-700">Email: fairview@datamex.edu.ph</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[#B85450] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#4C4B7A] mb-2">Office Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 6:00 AM - 6:00 PM
                        <br />
                        Saturday: 7:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                     <Facebook className="h-6 w-6 text-[#B85450] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#4C4B7A] mb-2">Facebook Page</h3>
                      <p className="text-gray-700">
                        Datamex College of St. Adeline
                        <a
                          href="https://www.facebook.com/datamexcollegeofstadeline"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#B85450] hover:text-[#4C4B7A] transition-colors text-sm sm:text-base"
                        >
                          Follow us on Facebook
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
