/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Blog() {
  return (
    <div className={`${monserat.className} bg-[#FFF]`}>
      <div className="w-[1440px] mx-auto py-28 relative">
        {/* SHAPE ACCESSORIES */}
        <div className="absolute inset-x-0 -top-20">
          <div className="flex justify-center">
            <img src="/Symbols/Scribble Black.svg" alt="" />
          </div>
        </div>
        {/* TITTLE */}
        <div className="mt-5">
          <p className="font-bold text-5xl text-center">Article and News</p>
          <p className="font-medium text-2xl text-[#4D4D4D] text-center mt-3">
            News, tips, tricks and more
          </p>
        </div>
        {/* CARD */}
        <div className="flex justify-center gap-5 mt-10">
          {/* CARD 1 */}
          <div>
            <div className="w-[570px] h-[634px] rounded-xl border-2 border-black mt-20 flex flex-col justify-between p-5">
              <div className="flex flex-col gap-y-8">
                <img src="Cover/cover-blog1.png" alt="cover blog" />
                <p className="font-bold text-sm text-[#4D4D4D]">PODCAST</p>
                <p className="font-bold text-4xl">Setup your own podcast</p>
                <p className="font-medium text-sm text-[#4D4D4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <button className="rounded font-medium text-sm text-[#4D4D4D] border-custom1 border-black px-2">
                    business
                  </button>
                  <button className="rounded font-medium text-sm text-[#4D4D4D] border-custom1 border-black px-2">
                    startup
                  </button>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#4D4D4D]">
                    Sep 14, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div>
            <div className="w-[570px] h-[634px] rounded-xl border-2 border-black mt-20 flex flex-col justify-between p-5">
              <div className="flex flex-col gap-y-8">
                <img src="Cover/cover-blog.png" alt="cover blog" />
                <p className="font-bold text-sm text-[#4D4D4D]">TIPS & TRICK</p>
                <p className="font-bold text-4xl">Doodle artwork 101</p>
                <p className="font-medium text-sm text-[#4D4D4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <button className="rounded font-medium text-sm text-[#4D4D4D] border-custom1 border-black px-2">
                    art
                  </button>
                  <button className="rounded font-medium text-sm text-[#4D4D4D] border-custom1 border-black px-2">
                    creative
                  </button>
                  <button className="rounded font-medium text-sm text-[#4D4D4D] border-custom1 border-black px-2">
                    tips and trick
                  </button>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#4D4D4D]">
                    Sep 12, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
