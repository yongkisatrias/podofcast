import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Pricing() {
  return (
    <div className={`${monserat.className} bg-[#FFF]`}>
      <div className="w-[1440px] mx-auto py-28">
        {/* TITTLE */}
        <div>
          <p className="font-bold text-5xl text-center">Become our sponsor</p>
          <p className="font-medium text-2xl text-[#4D4D4D] text-center mt-3">
            Get exclusive episodes, merch and more
          </p>
        </div>
        {/* CARD */}
        <div className="flex justify-center gap-5 mt-20">
          {/* CARD 1 */}
          <div className="flex flex-col gap-y-5">
            <div className="w-[373px] h-[357px] border-2 border-black rounded-lg flex flex-col justify-center gap-28">
              <div className="mx-10">
                <p className="font-bold text-4xl">Member</p>
                <p className="font-medium text-sm text-[#4D4D4D] mt-5">
                  Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
              <div className="flex items-center gap-10 mx-10">
                <div className="">
                  <button className="w-[184px] h-[65px] rounded-lg bg-black text-white shadow-custom">
                    SUBSCRIBE
                  </button>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#CD4631]">$9.99</p>
                  <p className="font-bold text-sm">/month</p>
                </div>
              </div>
            </div>
            <div className="w-[373px] h-[312px] border-2 border-black rounded-lg">
              <div className="flex flex-col gap-5 m-10 ">
                <p className="font-bold text-sm text-[#4D4D4D]">
                  What&apos;s included:
                </p>
                <p className="font-medium text-base">· Exclusive Content</p>
                <p className="font-medium text-base">· 5% Discount on Merch</p>
                <p className="font-medium text-base">· Join the Community</p>
                <p className="font-medium text-base">· Livestreaming Access</p>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="flex flex-col gap-y-5">
            <div className="w-[373px] h-[357px] border-2 border-[#CD4631] bg-[#F7EDE8] rounded-lg flex flex-col justify-center gap-28">
              <div className="mx-10">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-4xl">Family</p>
                  <p className="font-bold text-xs text-white bg-[#CD4631] rounded p-1">
                    MOST POPULAR
                  </p>
                </div>
                <p className="font-medium text-sm text-[#4D4D4D] mt-5">
                  Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
              <div className="flex items-center gap-10 mx-10">
                <div className="">
                  <button className="w-[184px] h-[65px] rounded-lg bg-black text-white shadow-custom">
                    SUBSCRIBE
                  </button>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#CD4631]">$14.99</p>
                  <p className="font-bold text-sm">/month</p>
                </div>
              </div>
            </div>
            <div className="w-[373px] h-[312px] border-2 border-[#CD4631] bg-[#F7EDE8] rounded-lg">
              <div className="flex flex-col gap-5 m-10 ">
                <p className="font-bold text-sm text-[#4D4D4D]">
                  What&apos;s included:
                </p>
                <p className="font-bold text-base">· Everything in Tier 1</p>
                <p className="font-medium text-base">· Free tickets to Event</p>
                <p className="font-medium text-base">· Limited Edition Merch</p>
                <p className="font-medium text-base">· Promote your Product</p>
                <p className="font-medium text-base">· Request Topic</p>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="flex flex-col gap-y-5">
            <div className="w-[373px] h-[357px] border-2 border-black rounded-lg flex flex-col justify-center gap-28">
              <div className="mx-10">
                <p className="font-bold text-4xl">Official</p>
                <p className="font-medium text-sm text-[#4D4D4D] mt-5">
                  Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
              <div className="flex items-center gap-10 mx-10">
                <div className="">
                  <button className="w-[184px] h-[65px] rounded-lg bg-black text-white shadow-custom">
                    SUBSCRIBE
                  </button>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#CD4631]">$29.99</p>
                  <p className="font-bold text-sm">/month</p>
                </div>
              </div>
            </div>
            <div className="w-[373px] h-[312px] border-2 border-black rounded-lg">
              <div className="flex flex-col gap-5 m-10 ">
                <p className="font-bold text-sm text-[#4D4D4D]">
                  What&apos;s included:
                </p>
                <p className="font-bold text-base">· Everything in Tier 2</p>
                <p className="font-medium text-base">
                  · Exclusive Badge on Livestreaming
                </p>
                <p className="font-medium text-base">
                  · Become an Official Sponsor
                </p>
                <p className="font-medium text-base">
                  · Early Access to All Episodes
                </p>
                <p className="font-medium text-base">
                  · Free Stickers and Merch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
