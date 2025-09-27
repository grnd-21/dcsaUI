import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const branches = [
  { name: "Fairview", href: "https://forms.gle/1dh5AtKi8VzmJZZbA" },
  { name: "Valenzuela", href: "https://forms.gle/bAMSWmkotu7vmBkAA" },
  { name: "Caloocan", href: "https://forms.gle/yepcF7Pme3ysa33g7" },
  { name: "Meycauayan", href: "https://forms.gle/iahTg5GL56nSdPiUA" },
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

      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left side instructions */}
          <div className="lg:col-span-2 space-y-8 my-auto">
            <div className="space-y-4" data-aos="fade-right" data-aos-duration="500">
              <p className="text-red-700 text-m md:text-2xl font-semibold">
                To enroll, please fill out the Google Form for your chosen
                branch.
              </p>
              <p className="text-red-700 text-m md:text-2xl font-semibold">
                Click on the branch you want, and you will be taken to the form.
              </p>
              <p className="text-red-700 text-m md:text-2xl font-semibold">
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
                className="w-full h-20 bg-slate-800 hover:bg-[#B85450] text-white text-2xl font-semibold shadow-lg rounded-sm"
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
