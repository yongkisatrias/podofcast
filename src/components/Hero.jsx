/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className={`${monserat.className} bg-[#F7EDE8]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* SHAPE ACCESSORIES */}
        <div className="relative flex items-center top-44">
          <img
            src="/Symbols/Hero Shape Swirl.svg"
            alt="logo podcast"
            className={"absolute left-0 w-[450px] h-[450px]"}
          ></img>
          <img
            src="/Symbols/Group 48095792.svg"
            alt="logo podcast"
            className={"absolute right-0 w-[150px] h-[150px]"}
          ></img>
        </div>
        {/* HERO SECTION */}
        <div>
          <p className="font-bold text-8xl flex justify-center">Your Daily</p>
          <p className="text-[#CD4631] font-bold text-8xl flex justify-center">
            Podcast
          </p>
        </div>
        <div className="pt-14">
          <p className="text-base font-medium flex justify-center">
            We cover all kinds of categories and
          </p>
          <p className="text-base font-medium flex justify-center">
            a weekly special guest.
          </p>
        </div>
        {/* SUBSCRIBE BUTTON */}
        <div className="flex justify-center pt-14">
          <button className="w-[184px] h-[65px] rounded-lg bg-black text-white shadow-custom">
            SUBSCRIBE
          </button>
        </div>
        {/* PODCASTS */}
        <div className="">
          <div className="flex gap-5 mt-28 overflow-x-scroll relative">
            <div className="flex-none">
              <div className="h-[373px] w-[373px] relative">
                <img
                  src="/Cover/8e8cb5542db4ebdb54669faa2300a916.jpeg"
                  alt="cover podcast"
                  className="h-[373px] w-[373px] object-cover rounded-xl grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <p className="text-[#81ADC8] font-bold text-4xl pl-5 pb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    Tesla Autopilot
                  </p>
                </div>
                <div className="absolute top-0 pt-3 pl-64 flex gap-3">
                  <img
                    src="/Symbols/google podcast.svg"
                    alt="google podcast"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/spotify.svg"
                    alt="spotify"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/youtube.svg"
                    alt="youtube"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="h-[373px] w-[373px] relative">
                <img
                  src="/Cover/1174a2e6e65a9d4f976d3094895b85a0.jpeg"
                  alt="cover podcast"
                  className="h-[373px] w-[373px] object-cover rounded-xl grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <p className="text-[#81ADC8] font-bold text-4xl pl-5 pb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    Self–confidence
                  </p>
                </div>
                <div className="absolute top-0 pt-3 pl-64 flex gap-3">
                  <img
                    src="/Symbols/google podcast.svg"
                    alt="google podcast"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/spotify.svg"
                    alt="spotify"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/youtube.svg"
                    alt="youtube"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="h-[373px] w-[373px] relative">
                <img
                  src="/Cover/e42201efbc673621436bbaa103d51b56.jpeg"
                  alt="cover podcast"
                  className="h-[373px] w-[373px] object-cover rounded-xl grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <p className="text-[#81ADC8] font-bold text-4xl pl-5 pb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    Perplexed Mind
                  </p>
                </div>
                <div className="absolute top-0 pt-3 pl-64 flex gap-3">
                  <img
                    src="/Symbols/google podcast.svg"
                    alt="google podcast"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/spotify.svg"
                    alt="spotify"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/youtube.svg"
                    alt="youtube"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="h-[373px] w-[373px] relative">
                <img
                  src="/Cover/423750a41eadef81f757a9e7793d9654.jpeg"
                  alt="cover podcast"
                  className="h-[373px] w-[373px] object-cover rounded-xl grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <p className="text-[#81ADC8] font-bold text-4xl pl-5 pb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    Women’s Rights
                  </p>
                </div>
                <div className="absolute top-0 pt-3 pl-64 flex gap-3">
                  <img
                    src="/Symbols/google podcast.svg"
                    alt="google podcast"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/spotify.svg"
                    alt="spotify"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/youtube.svg"
                    alt="youtube"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="h-[373px] w-[373px] relative">
                <img
                  src="/Cover/eca5b83a30fd652f7d2a93b7722d6242.jpeg"
                  alt="cover podcast"
                  className="h-[373px] w-[373px] object-cover rounded-xl grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <p className="text-[#81ADC8] font-bold text-4xl pl-5 pb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    Social Class
                  </p>
                </div>
                <div className="absolute top-0 pt-3 pl-64 flex gap-3">
                  <img
                    src="/Symbols/google podcast.svg"
                    alt="google podcast"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/spotify.svg"
                    alt="spotify"
                    className="w-[24px] h-[24px]"
                  />
                  <img
                    src="/Symbols/youtube.svg"
                    alt="youtube"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PLATFORM */}
        <div className="mt-28 px-20">
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Supported by:</p>
            <img src="/Symbols/1.svg" alt="" srcset="" />
            <img src="/Symbols/2.svg" alt="" srcset="" />
            <img src="/Symbols/3.svg" alt="" srcset="" />
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
