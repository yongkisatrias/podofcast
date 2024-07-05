import { Montserrat_Alternates } from "next/font/google";

const monserat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Blog() {
  return (
    <div className={`${monserat.className} bg-[#FFF]`}>
      <div className="w-[1440px] mx-auto py-28">
        <div>
          <p>Article and News</p>
          <p>News, tips, tricks and more</p>
        </div>
      </div>
    </div>
  );
}
