import profilePic from "../assets/profile.jpg";
import { GoDotFill } from "react-icons/go";
const socialMediaLinks = ["instagram", "behance", "facebook", "linkedin"];
function OurApprouch() {
  return (
    <div className="bg-[#cdea68] rounded-2xl h-max pb-2 -mt-3 pt-10 ">
      <div className="font-NeueMontreal px-5 text-[2rem] leading-8 font-[400] -tracking-[1px]   text-black mb-14 ">
        Ochi is a strategic <br /> partner for fast-growing tech businesses that
        need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
        great people.
      </div>
      <TypoGraphy />
      <div className="border-t-[1px] border-slate-600 px-5 flex flex-col gap-y-10 pt-4">
        <div className="">
          <h1 className="font-NeueMontreal text-2xl font-normal text-black mb-5">
            Our approach:
          </h1>
          <button className="bg-black  text-white rounded-full uppercase flex items-center py-4 px-6 font-NeueMontreal  gap-x-4 justify-center">
            read more <GoDotFill />
          </button>
        </div>
        <div className="pb-5">
          <img
            src={profilePic}
            alt=""
            className="rounded-2xl max-w-full  mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

function TypoGraphy() {
  return (
    <>
      <div className="border-t-[1px] px-5 flex gap-8 flex-col py-4 border-slate-600 text-[#212121] mb-9 ">
        <p className="text-lg leading-6  font-normal font-NeueMontreal">
          What you can expect
        </p>
        <div>
          <p className="mb-8 font-NeueMontreal">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="font-NeueMontreal">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div>
          <p className="font-normal mb-4 font-NeueMontreal">S:</p>
          <div>
            {socialMediaLinks.map((data, i) => (
              <li key={i} className="list-none underline font-NeueMontreal">
                {data}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default OurApprouch;
