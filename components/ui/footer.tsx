"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#B85450] to-[#4C4B7A] text-white py-16 px-4" data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Avatar className="w-12 h-12 bg-white">
              <AvatarImage
                src="/logo.png"
                alt="Datamex College of Saint Adeline Logo"
              />
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-dark">
                DATAMEX
              </h3>
              <p className="text-sm text-dark/90 uppercase tracking-wide">
                COLLEGE OF SAINT ADELINE
              </p>
            </div>
          </div>

          <h4 className="text-lg md:text-xl text-dark/95 mb-6 text-center sm:text-left">
            Are you ready to embark on your academic journey?
          </h4>

          <p className="text-sm md:text-lg mb-6 leading-relaxed text-center sm:text-left">
            We encourage you to connect with us through our Facebook pages or
            contact your preferred branch directly for any enrollment inquiries.
            If you do not have any further questions, we invite you to apply
            today.
          </p>

          <p className="text-sm md:text-lg mb-8 leading-relaxed text-center sm:text-left">
            Your future starts here, and we are eager to assist you every step
            of the way.
          </p>

          <Button asChild className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3 w-full sm:w-auto" variant="outline" >
           <a href="/enroll">APPLY NOW</a>
          </Button>
        </div>
      </section>
      <footer className="bg-[#B85450] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">
            YOUR PATH TO SUCCESS STARTS HERE
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3"
            >
              <a href="/">Home</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3"
            >
              <a href="/academics">Academics</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3"
            >
              <a href="/enroll">Enroll</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3"
            >
              <a href="/contact">Contact Us</a>
            </Button>

              <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#B85450] py-3"
            >
              <a href="/faqs">FAQs</a>
            </Button>

          </div>

          <p className="text-sm opacity-90">
            © 2025 by Datamex College of Saint Adeline
          </p>
        </div>
      </footer>
    </>
  );
}
