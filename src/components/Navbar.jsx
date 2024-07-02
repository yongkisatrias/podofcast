/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  return (
    <div className={`${monserat.className} bg-[#F7EDE8] py-5`}>
      <div className="w-[1440px] mx-auto px-20 flex justify-between items-center">
        <div className="flex justify-between gap-28 items-center font-bold">
          <Image src="/logo.svg" alt="logo podcast" width={74} height={74} />
          <div>
            <a href="#">Episodes</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div className="flex gap-2">
            <a href="#">More</a>
            <Image
              src="/Symbols/Arrow - Down.svg"
              alt="arrow down"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button className="rounded-lg border-2 border-black font-bold h-[41px] px-6">
            RECENT EPISODES
          </button>
          <button className="rounded-lg bg-black text-white font-bold h-[41px] px-6">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
