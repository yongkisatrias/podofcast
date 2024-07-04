/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className={`${monserat.className} bg-[#F7EDE8]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* TITTLE */}
        <div>
          <p className="font-bold text-5xl text-center">Recent Episodes</p>
          <p className="font-medium text-2xl text-[#4D4D4D] text-center mt-3">
            Available on your favorite platform
          </p>
        </div>
        {/* CARD */}
        <div className="grid grid-cols-2 mx-28 gap-5 mt-10">
          {/* CARD 6 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.6</p>
                  <p className="font-bold text-xl">Pandemic Becoming Endemic</p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    covid-19
                  </button>
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    button
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
          {/* CARD 5 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover2.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.5</p>
                  <p className="font-bold text-xl">
                    Tesla Autopilot Controversy
                  </p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    automation
                  </button>
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    tech
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover3.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.4</p>
                  <p className="font-bold text-xl">
                    Women&apos;s Rights? Is it alright?
                  </p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    women&apos;s rights
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover4.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.3</p>
                  <p className="font-bold text-xl">
                    How to Deal with Self-Confidence
                  </p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    self-esteem
                  </button>
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    health
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover5.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.2</p>
                  <p className="font-bold text-xl">
                    Type of Social Classes of People
                  </p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    social class
                  </button>
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    wealth
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
          {/* CARD 1 */}
          <div className="w-[570px] h-[249px] border-2 border-black bg-white rounded-xl">
            <div className="p-4">
              <div className="flex gap-4">
                <div className="w-[166px]">
                  <div className="w-[166px] h-[166px]">
                    <img src="/Cover/cover6.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-5">
                  <p className="font-bold text-base text-[#CD4631]">Eps.1</p>
                  <p className="font-bold text-xl">
                    Are you a perplexed Mind Person?
                  </p>
                  <hr />
                  <p className="font-medium text-sm text-[#4D4D4D]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 mt-3">
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    mind-behaviour
                  </button>
                  <button className="border-black border rounded px-2 py-1 text-sm">
                    health
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-1">
                  <p className="font-bold text-xs text-[#4D4D4D] order-1">
                    Hosted by:
                  </p>
                  <img src="/User_Profile/host.svg" alt="host" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
