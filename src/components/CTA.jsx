/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CTA() {
  return (
    <div className={`${monserat.className} bg-[#EDF3F7]`}>
      <div className="w-[1440px] h-[816px] mx-auto py-28">
        <div className="flex flex-col gap-y-8">
          {/* SHAPE ACCESSORIES */}
          <div className="relative">
            <div className="absolute inset-x-0 -top-48">
              <div className="flex justify-center">
                <img src="/Symbols/scribble.svg" alt="" className="" />
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div className="relative">
            <img
              src="Cover/play.png"
              alt="play"
              className="absolute right-0 w-[373px] h-[700px]"
            />
          </div>
          <div className="relative">
            <img
              src="Cover/Home.png"
              alt="play"
              className="absolute bottom-0 left-0 top-72 w-[430px] h-[380px]"
            />
          </div>
          {/* TITTLE */}
          <div className="flex flex-col gap-y-8">
            <div className="flex justify-center">
              <div className="font-bold text-sm text-[#CD4631] border-[#CD4631] border-custom1 w-[52px] h-[28px] flex justify-center items-center text-center">
                BETA
              </div>
            </div>
            <p className="text-center font-bold text-6xl leading-tight">
              Available now <br />
              Pod of Cast App
            </p>
            <p className="text-center font-medium text-2xl text-[#4D4D4D]">
              We just launched our podcast app!
            </p>
          </div>
          {/* DOWNLOAD BUTTON */}
          <div className="flex justify-center mt-20">
            <button className="w-[184px] h-[65px] rounded-lg bg-black text-white shadow-custom">
              DOWNLOAD NOW
            </button>
          </div>
          {/* PLATFORM */}
          <div className="flex flex-col gap-y-3">
            <p className="text-center font-medium text-lg text-[#4D4D4D]">
              Content also available on:
            </p>
            <div className="flex justify-center gap-5">
              <a href="#">
                <img src="Symbols/Google podcast black.svg" alt="logo" />
              </a>
              <a href="#">
                <img src="Symbols/spotify black.svg" alt="logo" />
              </a>
              <a href="#">
                <img src="Symbols/youtube black.svg" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
