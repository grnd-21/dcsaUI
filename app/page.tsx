import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#4C4B7A] text-white py-24 px-4" data-aos="fade-down" data-aos-duration="500">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Technical engineering background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#4C4B7A]/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            S.Y. 2025-2026 Applications Are Now Open For College & SHS
          </h2>
            <Button
            asChild
            className="bg-[#B85450] hover:bg-[#A04A46] text-white px-8 py-3 text-sm md:text-lg font-semibold border-white shadow-lg cursor-pointer"
            >
            <a href="/enroll">APPLY TODAY</a>
            </Button>
        </div>
      </section>

      {/* Why Datamex Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left md:text-center" data-aos="fade-up" data-aos-duration="500">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#B85450] mb-8 leading-tight">
              Why Datamex College of St. Adeline?
            </h2>

            <div className="space-y-6 text-[#B85450] text-lg leading-relaxed">
              <p>
                At Datamex College of Saint Adeline, we offer a wide range of
                academic programs designed to meet the diverse interests and
                career ambitions of our students. Our experienced faculty is
                dedicated to not only delivering high-quality education but also
                ensuring an enriching and supportive learning experience.
              </p>

              <p>
                Through our comprehensive approach, we prepare our students for
                success in an increasingly competitive global environment,
                equipping them with the skills necessary to excel in their
                chosen fields.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#B85450] text-white p-6 rounded-lg" data-aos="fade-left" data-aos-duration="500">
              <div className="text-3xl font-bold mb-2">01.</div>
              <h3 className="text-xl font-bold">DIVERSE PROGRAMS</h3>
            </div>

            <div className="bg-[#B85450] text-white p-6 rounded-lg" data-aos="fade-left" data-aos-duration="500">
              <div className="text-3xl font-bold mb-2">02.</div>
              <h3 className="text-xl font-bold">STUDENT-CENTRIC APPROACH</h3>
            </div>

            <div className="bg-[#4C4B7A] text-white p-6 rounded-lg" data-aos="fade-left" data-aos-duration="500">
              <div className="text-3xl font-bold mb-2">03.</div>
              <h3 className="text-xl font-bold">CAREER READINESS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Minds Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left md:text-center" data-aos="fade-up" data-aos-duration="500">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#B85450] mb-4 leading-tight ">
              Empowering Minds,
            </h2>
            <h3 className="text-2xl font-semibold text-[#B85450] mb-8 ">
              Inspiring Futures.
            </h3>

            <p className="text-[#B85450] text-lg mb-8 leading-relaxed ">
              At Datamex College of Saint Adeline, we are dedicated to nurturing
              a passion for learning and fostering academic excellence. We
              empower our students to achieve their full potential. Join us on a
              journey of knowledge and growth, where every individual is
              encouraged to thrive. Explore a world of endless possibilities
              with Datamex College of Saint Adeline.
            </p>

            <div className=" mb-8">
              <h4 className="text-2xl font-bold text-[#B85450] mb-6 text-center">
                YOUR PATH TO SUCCESS STARTS HERE
              </h4>
            </div>

            <div className="">
              <Button asChild className="bg-[#4C4B7A] hover:bg-[#3A3A6A] text-white px-8 py-3 text-lg font-semibold shadow-lg w-full sm:w-auto cursor-pointer">
                <a href="/academics">EXPLORE MORE</a>
              </Button>
            </div>
          </div>

          <div className="bg-[#B85450] p-8 rounded-lg">
            <Image
              src="/empowering.png"
              alt="Students studying"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
