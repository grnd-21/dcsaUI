import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Users } from "lucide-react"

export default function MeycauayanBranch() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#4C4B7A] via-[#B85450] to-[#4C4B7A] text-white py-16 px-4" data-aos="fade-down" data-aos-duration="500">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meycauayan Campus</h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">Expanding Horizons in Bulacan Province</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="h-5 w-5" />
            <span>85 Requito St. Saluysoy, Meycauayan, 3023 Bulacan</span>
          </div>
        </div>
      </section>

      {/* Campus Description */}
      <section className="py-16 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/MEYCAUYAN_BRANCH.png"
                alt="Meycauayan Campus Building"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4C4B7A] mb-6">Welcome to Our Meycauayan Campus</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our newest campus in Meycauayan, Bulacan extends quality education beyond Metro Manila, serving students
                in the northern provinces. Located in the growing city of Meycauayan, this campus offers the same high
                standards of education with the convenience of being closer to home for Bulacan residents.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Meycauayan campus features modern facilities designed to provide an excellent learning environment,
                complete with computer laboratories, library resources, and student support services that match our
                Metro Manila campuses.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-[#B85450]" />
                  <div>
                    <h3 className="font-semibold text-[#4C4B7A]">500+</h3>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-[#B85450]" />
                  <div>
                    <h3 className="font-semibold text-[#4C4B7A]">Community</h3>
                    <p className="text-sm text-gray-600">Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Info */}
      <section className="py-16 px-4 bg-gray-50" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4C4B7A] mb-12">Visit Our Campus</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1234567890123!2d120.9543210987!3d14.7321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s85%20Requito%20St.%20Saluysoy%2C%20Meycauayan%2C%203023%20Bulacan!5e0!3m2!1sen!2sph!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Meycauayan Campus Location"
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
                        85 Requito St. Saluysoy
                        <br />
                        Meycauayan, 3023
                        <br />
                        Bulacan, Philippines
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
                        Phone: (044) 456-7890
                        <br />
                        Mobile: +63 917 456 7890
                      </p>
                      <p className="text-gray-700">Email: meycauayan@datamex.edu.ph</p>
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
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 8:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
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
