import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const branches = [
  { name: "Fairview", href: "#fairview" },
  { name: "Valenzuela", href: "#valenzuela" },
  { name: "Caloocan", href: "#caloocan" },
  { name: "Meycauayan", href: "#meycauayan" },
];

export default function Enroll() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-48 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/enrolhero.jpeg"
            alt="Datamex College Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Diagonal line pattern overlay to match reference */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="diagonalLines"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="40"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left side instructions */}
          <div className="lg:col-span-2 space-y-8 my-auto">
            <div className="space-y-4" data-aos="fade-right" data-aos-duration="500">
              <p className="text-red-700 text-m md:text-2xl font-serif leading-relaxed">
                To enroll, please fill out the Google Form for your chosen
                branch.
              </p>
              <p className="text-red-700 text-m md:text-2xl font-serif leading-relaxed">
                Click on the branch you want, and you will be taken to the form.
              </p>
              <p className="text-red-700 text-m md:text-2xl font-serif leading-relaxed">
                If you have any questions, you can message us on our Facebook
                page or call us.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            {branches.map((branch) => (
              <Button
                key={branch.name}
                variant="default"
                size="lg"
                className="w-full h-20 bg-slate-800 hover:bg-slate-700 text-white text-2xl font-semibold shadow-lg rounded-sm"
                asChild
              >
                <a href={branch.href}>{branch.name}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
