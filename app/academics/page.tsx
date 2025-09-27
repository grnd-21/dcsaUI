import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Footer from "@/components/ui/footer";

export default function Academics() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <section>
        {/* Hero Section */}
        <div className="relative bg-[#95312b] text-white py-55 px-4" data-aos="fade-down" data-aos-duration="500">
          <div className="absolute inset-0">
            <Image
              src="/OurProgram.jpg"
              alt="Typing background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#95312b]/80"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Our Program
            </h2>
          </div>
        </div>
      </section>

      {/* College Cources */}
      <section className="py-20 pb-20 px-10 bg-gray-50 mb-3 " data-aos="fade-up" data-aos-duration="500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
          <div className="flex-shrink-0 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#2c265c] leading-tight mb-2">
              College Courses
            </h2>
          </div>

          <div className="max-w-xl text-left gap-16">
            <p className="text-lg text-[#2c265c] leading-relaxed">
              The institution offers a comprehensive selection of college
              courses, meticulously designed to prepare individuals for career
              advancement in their chosen fields. With programs covering various
              disciplines, students acquire the essential knowledge and skills
              needed to their professional goals. Explore the programs to see
              how they can help achieve professional objectives.
            </p>
          </div>
        </div>

        {/* BSIT */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-16 justify-center" data-aos="fade-left" data-aos-duration="500">
          <div className="relative w-full md:w-[900px] h-[480px] overflow-hidden shadow-lg md:mr-8">
            <Image
              src="/BSIT.jpg"
              alt="IT Program background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2c265c]/70"></div>
          </div>

          <div className="bg-white pl-4 pr-4 md:pl-3 md:pr-3 w-full md:w-[900px] h-auto md:h-[500px] md:-ml-100 relative z-10 md:mt-16 mt-8 shadow-lg">
            <div className="max-w-auto mx-auto px-auto md:p-20">
              <h3 className="text-2xl md:text-1xl font-extrabold text-[#95312b] max-w-xl text-left gap-16 ">
                Bachelor of Science in Information Technology
              </h3>

              <p className="text-[#95312b] text-1xl text-left gap-20 mt-8">
                This program provides a comprehensive education in the design,
                implementation, and management of information systems. Students
                learn critical skills in programming, network administration,
                cybersecurity, and database management while gaining a deep
                understanding of emerging technologies. Through project-based
                learning and collaborative work, graduates are prepared to
                address complex IT challenges and adapt to the evolving
                technology landscape.
              </p>

              <p className="font-bold text-[#95312b] max-w-xl text-left gap-16 mt-8">
                Career Opportunities:
              </p>
              <p className="text-[#95312b] max-w-xl text-left gap-16 my-2">
                Computer Programmer, Cybersecurity Manager, IT Technician, Web
                Developer, Network Engineer, Software Developer, Software
                Engineer.
              </p>
            </div>
          </div>
        </div>

        {/* BSOA */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-16 justify-center" data-aos="fade-right" data-aos-duration="500">
          <div className="relative w-full md:w-[900px] h-[480px] overflow-hidden shadow-lg md:mr-8">
            <Image
              src="/BSOA.jpg"
              alt="IT Program background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#95312b]/70"></div>
          </div>

          <div className="bg-white pl-4 pr-4 md:pl-3 md:pr-3 w-full md:w-[900px] h-auto md:h-[500px] md:-ml-100 relative z-10 md:mt-16 mt-8 shadow-lg">
            <div className="max-w-auto mx-auto px-auto md:p-20">
              <h3 className="text-2xl md:text-1xl font-extrabold text-[#2c265c] max-w-xl text-left gap-16 ">
                Bachelor of Science In Office Administration
              </h3>

              <p className="text-[#2c265c] text-1xl text-left gap-20 mt-8">
                This program prepares students with the essential skills for
                success in today's business environment, focusing on management,
                organization, and technology in office settings. Students gain
                hands-on experience in human resources, project management, and
                financial administration. Graduates are well-equipped to enhance
                organizational efficiency and contribute to business success.
              </p>

              <p className="font-bold text-[#2c265c] max-w-xl text-left gap-16 mt-8">
                Career Opportunities:
              </p>
              <p className="text-[#2c265c] max-w-xl text-left gap-16 my-2">
                Office Manager, Administrative Assistant, Customer
                Relations/Receptionist, Office Supervisor,
                Stenographer/Transcriber, Executive Secretary/Assistant, Front
                Office Executive
              </p>
            </div>
          </div>
        </div>

        {/* BSTM */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-16 justify-center " data-aos="fade-left" data-aos-duration="500">
          <div className="relative w-full md:w-[900px] h-[480px] overflow-hidden shadow-lg md:mr-8">
            <Image
              src="/BSTM.jpg"
              alt="IT Program background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2c265c]/70"></div>
          </div>

          <div className="bg-white pl-4 pr-4 md:pl-3 md:pr-3 w-full md:w-[900px] h-auto md:h-[500px] md:-ml-100 relative z-10 md:mt-16 mt-8 shadow-lg">
            <div className="max-w-auto mx-auto px-auto md:p-20">
              <h3 className="text-2xl md:text-1xl font-extrabold text-[#95312b] max-w-xl text-left gap-16 ">
                Bachelor of Science In Tourism Management
              </h3>

              <p className="text-[#95312b] text-1xl text-left gap-20 mt-8">
                An engaging program that prepares students for diverse roles in
                the tourism and hospitality sectors. It covers essential topics
                such as sustainable tourism, marketing strategies, and
                destination management, emphasizing hands-on experience through
                internships. Graduates gain a strong understanding of industry
                trends and cultural dynamics crucial for success in the field.
              </p>

              <p className="font-bold text-[#95312b] max-w-xl text-left gap-16 mt-8">
                Career Opportunities:
              </p>
              <p className="text-[#95312b] max-w-xl text-left gap-16 my-2">
                Travel Agent, Tour Consultant, Hotel Manager, Event Planner,
                Destination Marketing Specialist, Cruise Director, Resort
                Manager, Travel Writer, Hospitality Operations Coordinator
              </p>
            </div>
          </div>
        </div>

        {/* BSHM */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-16 justify-center" data-aos="fade-right" data-aos-duration="500">
          <div className="relative w-full md:w-[900px] h-[480px] overflow-hidden shadow-lg md:mr-8">
            <Image
              src="/BSHM.jpg"
              alt="IT Program background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#95312b]/70"></div>
          </div>

          <div className="bg-white pl-4 pr-4 md:pl-3 md:pr-3 w-full md:w-[900px] h-auto md:h-[500px] md:-ml-100 relative z-10 md:mt-16 mt-8 shadow-lg">
            <div className="max-w-auto mx-auto px-auto md:p-20">
              <h3 className="text-2xl md:text-1xl font-extrabold text-[#2c265c] max-w-xl text-left gap-16 ">
                Bachelor of Science In Hotel Management
              </h3>

              <p className="text-[#2c265c] text-1xl text-left gap-20 mt-8">
                A dynamic program designed to develop the operational,
                managerial, and leadership skills necessary for a successful
                career in the hospitality industry. Students learn about hotel
                operations, guest service management, food and beverage
                management, and sustainable practices in hospitality. Through a
                combination of classroom instruction and hands-on experience,
                graduates are prepared to meet the challenges of a fast-paced
                industry while delivering exceptional guest experiences.
              </p>

              <p className="font-bold text-[#2c265c] max-w-xl text-left gap-16 mt-8">
                Career Opportunities:
              </p>
              <p className="text-[#2c265c] max-w-xl text-left gap-16 my-2">
                Hotel Manager, Front Office Manager, Food and Beverage Director,
                Events Coordinator, Sales and Marketing Manager, Revenue
                Manager, Guest Relations Manager, Housekeeping Manager, Catering
                Manager, Hospitality Consultant
              </p>
            </div>
          </div>
        </div>

        {/* ACT */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-16 justify-center" data-aos="fade-left" data-aos-duration="500">
          <div className="relative w-full md:w-[900px] h-[480px] overflow-hidden shadow-lg md:mr-8">
            <Image
              src="/ACT.jpg"
              alt="IT Program background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2c265c]/70"></div>
          </div>

          <div className="bg-white pl-4 pr-4 md:pl-3 md:pr-3 w-full md:w-[900px] h-auto md:h-[500px] md:-ml-100 relative z-10 md:mt-16 mt-8 shadow-lg">
            <div className="max-w-auto mx-auto px-auto md:p-20">
              <h3 className="text-2xl md:text-1xl font-extrabold text-[#95312b] max-w-xl text-left gap-16 ">
                Associate in Computer Technology
              </h3>

              <p className="text-[#95312b] text-1xl text-left gap-20 mt-8">
                Provides essential skills in computer systems, programming, and
                networking. With a focus on hands-on experience, students learn
                to tackle real-world problems and prepare for entry- level
                positions in the tech industry. This program lays the groundwork
                for a successful career in a rapidly evolving field.
              </p>

              <p className="font-bold text-[#95312b] max-w-xl text-left gap-16 mt-8">
                Career Opportunities:
              </p>
              <p className="text-[#95312b] max-w-xl text-left gap-16 my-2">
                Computer Support Specialist, Network Administrator, IT
                Technician, Software Developer, Web Developer, Systems Analyst,
                Database Administrator
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SENIOR HIGH SCHOOL */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto " data-aos="fade-up" data-aos-duration="500">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="flex-1">
              <h2 className="text-6xl lg:text-8xl font-bold text-[#2c265c] leading-tight mb-4">
                Senior High
                <br />
                Tracks
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-lg text-[#2c265c] leading-relaxed">
                The institution provides a comprehensive selection of senior
                high school tracks, meticulously aligned with government
                standards to facilitate students' preparation for future
                academic and career pursuits. Each track encompasses a range of
                disciplines, ensuring that students gain the essential knowledge
                and skills necessary to achieve their professional aspirations.
                We invite you to explore these tracks to understand how they can
                support your educational and career objectives.
              </p>
            </div>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ABM Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#95312b] overflow-hidden">
                  <img
                    src="/ABM.JPG"
                    alt="ABM Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#95312b] mb-4">
                Accountancy, Business, &<br />
                Management (ABM)
              </h3>
              <p className="text-[#95312b] text-sm leading-relaxed">
                The ABM track prepares students for careers in business and
                finance. Students learn foundational skills in accounting,
                marketing, and management, equipping them for various roles in
                the corporate world as well as for entrepreneurship.
              </p>
            </div>

            {/* GAS Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#2c265c] overflow-hidden">
                  <img
                    src="/GAS.JPG"
                    alt="GAS Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c265c] mb-4">
                General Academics Strand
                <br />
                (GAS)
              </h3>
              <p className="text-[#2c265c] text-sm leading-relaxed">
                The GAS track offers a flexible curriculum that caters to
                diverse interests and future academic pursuits. It is ideal for
                students who are undecided on their career path, providing a
                broad foundation in various subjects while allowing them to
                explore different fields of study.
              </p>
            </div>

            {/* HUMSS Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#95312b] overflow-hidden">
                  <img
                    src="/HUMSS.JPG"
                    alt="HUMSS Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#95312b] mb-4">
                Humanities & Social
                <br />
                Sciences (HUMSS)
              </h3>
              <p className="text-[#95312b] text-sm leading-relaxed">
                The HUMSS track focuses on social studies, literature, and the
                arts, fostering critical thinking and communication skills. It
                is designed for students interested in careers in education,
                social work, and the creative industries, encouraging them to
                investigate cultural and societal issues.
              </p>
            </div>

            {/* STEM Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#2c265c] overflow-hidden">
                  <img
                    src="/stem.jpg"
                    alt="STEM Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c265c] mb-4">
                Science, Technology, Engineering,
                <br />& Mathematics (STEM)
              </h3>
              <p className="text-[#2c265c] text-sm leading-relaxed">
                The STEM track is geared towards students with a strong interest
                in scientific inquiry, engineering, and mathematics. It prepares
                them for advanced education and careers in fields such as
                engineering, IT, healthcare, and research, promoting analytical
                skills and innovative thinking.
              </p>
            </div>

            {/* HE Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#95312b] overflow-hidden">
                  <img
                    src="/he.jpg"
                    alt="HE Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#95312b] mb-4">
                Home Economics (HE)
              </h3>
              <p className="text-[#95312b] text-sm leading-relaxed">
                The HE track equips students with practical skills in areas such
                as cooking, sewing, and budgeting. It aims to develop
                self-sufficiency and prepare students for careers in
                hospitality, nutrition, and household management, emphasizing
                both life skills and professional readiness.
              </p>
            </div>

            {/* ICT Track */}
            <div className="bg-white p-8 text-center shadow-lg" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#2c265c] overflow-hidden">
                  <img
                    src="/ict.jpeg"
                    alt="ICT Track"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c265c] mb-4">
                Information Communication
                <br />& Technology (ICT)
              </h3>
              <p className="text-[#2c265c] text-sm leading-relaxed">
                The ICT track focuses on digital literacy and the application of
                technology in various contexts. It prepares students for careers
                in information technology, digital communications, and
                multimedia, empowering them with the skills to thrive in a
                technology-driven world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
