/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Testimonials() {
  return (
    <div className={`${monserat.className} bg-[#EDF3F7]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* TITTLE */}
        <div>
          <p className="font-bold text-5xl text-center mt-5">
            What our listeners say
          </p>
          <p className="font-medium text-3xl text-[#4D4D4D] text-center mt-3">
            Their experience throughout every platform
          </p>
        </div>
        {/* TESTIMONIAL */}
        <div className="mt-20 flex gap-5">
          <div className="bg-[#fff] w-[570px] h-[360px] flex flex-col justify-center">
            <div>
              <p className="font-bold text-8xl text-[#CD4631] pl-10">“</p>
            </div>
            <div>
              <p className="px-10 font-medium text-2xl">
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex gap-4 mt-10 px-10 items-center">
              <img
                src="User_Profile/avatar1.svg"
                alt="Avatar"
                className="rounded-full w-[48px] h-[48px]"
              />
              <p>Luna lovegood,</p>
              <div className="flex gap-2 items-center">
                <img
                  src="Symbols/Vector.svg"
                  alt="Spotify"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-sm font-bold">Spotify</p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-[570px] h-[360px] flex flex-col justify-center">
            <div>
              <p className="font-bold text-8xl text-[#CD4631] pl-10">“</p>
            </div>
            <div>
              <p className="px-10 font-medium text-2xl">
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex gap-4 mt-10 px-10 items-center">
              <img
                src="User_Profile/avatar2.svg"
                alt="Avatar"
                className="rounded-full w-[48px] h-[48px]"
              />
              <p>Emily Blunt,</p>
              <div className="flex gap-2 items-center">
                <img
                  src="Symbols/google-podcast.svg"
                  alt="google podcast"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-sm font-bold">Google Podcast</p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-[570px] h-[360px] flex flex-col justify-center">
            <div>
              <p className="font-bold text-8xl text-[#CD4631] pl-10">“</p>
            </div>
            <div>
              <p className="px-10 font-medium text-2xl">
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex gap-4 mt-10 px-10 items-center">
              <img
                src="User_Profile/avatar3.svg"
                alt="Avatar"
                className="rounded-full w-[48px] h-[48px]"
              />
              <p>Mia Winters,</p>
              <div className="flex gap-2 items-center">
                <img
                  src="Symbols/Vector.svg"
                  alt="Spotify"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-sm font-bold">Spotify</p>
              </div>
            </div>
          </div>
        </div>
        {/* ARROW */}
        <div className="flex gap-5 mt-16">
          <div>
            <img
              src="Vector/Arrow - Left Circle.png"
              alt="arrow left"
              className="w-[37px] h-[37px] mx-auto"
            />
          </div>
          <div>
            <img
              src="Vector/Arrow - Right Circle.png"
              alt="arrow right"
              className="w-[37px] h-[37px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
