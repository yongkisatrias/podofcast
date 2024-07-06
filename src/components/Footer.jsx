/* eslint-disable @next/next/no-img-element */
import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <div className={`${monserat.className}]`}>
      <div className="w-[1440px] mx-auto pt-28 pb-10">
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col gap-y-10">
              <div className="flex items-end gap-5">
                <img src="/logo.svg" alt="logo" />
                <p className="font-medium text-sm text-[#4D4D4D]">©2021</p>
              </div>
              <p className="font-medium text-base text-[#4D4D4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-5">
                <img src="Symbols/twitter.svg" alt="social" />
                <img src="Symbols/instagram.svg" alt="social" />
                <img src="Symbols/tiktok.svg" alt="social" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <a href="#">About</a>
            <a href="#">Testimonials</a>
            <a href="#">Features</a>
          </div>
          <div className="flex flex-col gap-y-5">
            <a href="#">Episodes</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <p className="font-medium text-base text-[#4D4D4D">
              Listen to episodes on your fav platform:
            </p>
            <div className="flex gap-5 mt-5">
              <img src="Symbols/Google Podcast full.svg" alt="logo" />
              <img src="Symbols/Spotify full.svg" alt="logo" />
              <img src="Symbols/Youtube full.svg" alt="logo" />
            </div>
            <p className="font-medium text-base text-[#4D4D4D] mt-10">
              App available on:
            </p>
            <div className="flex gap-5 mt-5">
              <img src="Symbols/app_store.svg" alt="logo" />
              <img src="Symbols/google_play.svg" alt="logo" />
            </div>
          </div>
        </div>
        <hr className="mt-20 mb-5" />
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="font-medium text-base">©2022. All Rights Reserved.</p>
            <p className="font-medium text-base text-[#CD4631]">Pod of Cast</p>
          </div>
          <div className="flex gap-5">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
