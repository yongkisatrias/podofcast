/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

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
              <Image
                src="/Vector/Illustration 01.svg"
                width={275}
                height={275}
                alt="Illustration 1"
              />
            </div>
            <p className="text-center text-base font-medium pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className="w-[472px] h-[367px]">
            <div className="flex justify-center">
              <Image
                src="/Vector/Illustration 02.svg"
                width={275}
                height={275}
                alt="Ilustration 2"
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
            <div className="mt-28">
              <p className="font-bold text-4xl text-center">
                One of the best daily podcasts that
              </p>
              <p className="font-bold text-4xl text-center mt-3">
                covers every topic on Spotify.
              </p>
            </div>
            <div className="flex justify-center mt-14 gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src="User_Profile/avatar.svg"
                  alt="Avatar"
                  width={48}
                  height={48}
                />
                <p className="text-sm font-medium">John Smith,</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="Symbols/Vector.svg"
                  alt="Spotify"
                  width={16}
                  height={16}
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
