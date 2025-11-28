import React, { useState } from "react";

// Components
import aboutBg from "../../assets/images_about/about_us.jpg";
import Counter from "../../components/Counter";
import TextImage from "../../components/TextImage";

// Images pour l'équipe
import aboutTeam1 from "../../assets/images_about/Team_1.jpg";
import aboutTeam2 from "../../assets/images_about/Team_2.jpg";
import aboutTeam3 from "../../assets/images_about/Team_3.jpg";
import aboutTeam4 from "../../assets/images_about/Team_4.jpg";


const About_us: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="mx-1.5">
      {/* Section image de fond initiale */}
      <div
        className="h-screen mb-10"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Paragraphe */}
      <p className="mt-10 text-[#666666] text-center text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

     {/* Compteurs */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-15">
        <div className="bg-gray-100 p-12 rounded shadow hover:border hover:bg-white">
          <Counter target={800} speed={20} />
          <p>Product Types</p>
        </div>

        <div className="bg-gray-100 p-12 rounded shadow hover:border hover:bg-white">
          <Counter target={12} speed={100} />
          <p>Years Of Experience</p>
        </div>

        <div className="bg-gray-100 p-12 rounded shadow hover:border hover:bg-white">
          <Counter target={2500} speed={20} />
          <p>Trust Customers</p>
        </div>

        <div className="bg-gray-100 p-12 rounded shadow hover:border hover:bg-white">
          <Counter target={15} speed={100} />
          <p>Stores Nationwide</p>
        </div>
      </div>

      {/* Section vidéo YouTube */}
      <div className="relative flex items-center justify-center min-h-[500px] bg-black my-10">
        {!playVideo && (
          <button
            onClick={() => setPlayVideo(true)}
            className="flex items-center justify-center w-20 h-20 border-2 border-white rounded-full text-white text-3xl hover:scale-110 transition"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              boxShadow: "none",
            }}
          >
            ▶
          </button>
        )}

        {playVideo && (
          <div className="absolute z-50 w-[80%] max-w-[640px] h-auto aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1ap0baidLVo?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* Section Meet Our Team  Mes images circulaires */}
      <div className="my-10">
        <h1 className="text-3xl text-center mb-14">Meet Our Team</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
          <TextImage src={aboutTeam1} alt="Team 1" nom="Vladimir Radskin" metier="Pharmacist" />
          <TextImage src={aboutTeam2} alt="Team 2" nom="John Doe" metier="Boutiquier" />
          <TextImage src={aboutTeam3} alt="Team 3" nom="Micheal Phelps" metier="Web Designer" />
          <TextImage src={aboutTeam4} alt="Team 4" nom="Nina Buruns" metier="Tech Leader" />
        </div>
      </div>
    </div>
  );
};

export default About_us;
