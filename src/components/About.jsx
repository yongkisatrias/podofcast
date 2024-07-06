/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <div className={`${monserat.className} bg-[#FFF]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* HERO TEXT */}
        <div className="text-center">
          <p className="font-bold text-5xl">Talk. Listen. Get inspired</p>
          <p className="font-bold text-5xl mt-5">by every minute of it.</p>
        </div>
        {/* Section 1 */}
        <div className="flex justify-center gap-20 pt-20">
          <div className="w-[472px] h-[367px]">
            <div className="flex justify-center">
              <img
                src="/Vector/Illustration 01.svg"
                alt="Illustration 1"
                className="w-[275px] h-[275px]"
              />
            </div>
            <p className="text-center text-base font-medium pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className="w-[472px] h-[367px]">
            <div className="flex justify-center">
              <img
                src="/Vector/Illustration 02.svg"
                alt="Ilustration 2"
                className="w-[275px] h-[275px]"
              />
            </div>
            <p className="text-center text-base font-medium pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div>
          <div className="bg-[#F7EDE8] h-[366px] flex flex-col justify-center mt-20">
            <div className="">
              <p className="font-bold text-9xl text-[#CD4631] text-center">“</p>
              <p className="font-bold text-4xl text-center">
                One of the best daily podcasts that
              </p>
              <p className="font-bold text-4xl text-center mt-3">
                covers every topic on Spotify.
              </p>
            </div>
            <div className="flex justify-center mt-10 gap-5">
              <div className="flex gap-3 items-center">
                <img
                  src="User_Profile/avatar.svg"
                  alt="Avatar"
                  className="w-[48px] h-[48px]"
                />
                <p className="text-sm font-medium">John Smith,</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="Symbols/Vector.svg"
                  alt="Spotify"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-sm font-bold">Social Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
