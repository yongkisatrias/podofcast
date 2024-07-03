/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Features() {
  return (
    <div className={`${monserat.className} bg-[#FFF]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* TITTLE */}
        <div>
          <p className="font-bold text-5xl text-center">Membership benefits</p>
          <p className="font-medium text-2xl text-[#4D4D4D] text-center mt-3">
            Become our sponsor and get all benefits
          </p>
        </div>
        {/* CARD */}
        <div className="grid grid-cols-3 mt-16 gap-y-10 ml-14">
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Scribble.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">Topic by Request</p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Shining stars.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">Exclusive Content</p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Face 1.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">Join the Community</p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Face 5.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">
              Livestreaming Access
            </p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Fire.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">
              Exclusive Episodes & Merch
            </p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div className="w-[373px] h-[202px] mt">
            <div className="flex justify-center mb-7">
              <img src="Vector/Star.svg" alt="vector" />
            </div>
            <p className="font-bold text-2xl text-center">And much more!</p>
            <p className="font-medium text-base text-center">
              Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        {/* BUTTON */}
        <div className="flex justify-center pt-14">
          <button className="w-[150px] h-[50px] rounded-lg bg-black text-white shadow-custom font-bold text-sm">
            SEE PRICING
          </button>
        </div>
      </div>
    </div>
  );
}
