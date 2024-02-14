import { IoMdArrowUp } from "react-icons/io";
import image from "../assets/main.jpg";
const textData = ["we create", "eye opening", "presentations"];

function Main() {
  return (
    <div className="md:pt-36 pt-12 ">
      <div className="px-8">
        {textData.map((text, i) => (
          <div
            key={i}
            className="flex relative items-center justify-start gap-3"
          >
            {i === 1 && (
              <div>
                <img
                  src={image}
                  alt=""
                  className="md:h-[5.25rem] h-10  rounded-lg"
                />
              </div>
            )}
            <h1
              className={`md:text-9xl text-5xl md:leading-[130px] leading-[50px] text-black md:font-[Anton] font-[Anton]  uppercase   `}
            >
              {text}
            </h1>
          </div>
        ))}
      </div>
      <div className="bg-[#c5c5c5] h-[2px] md:mt-[17rem] mt-[146px] "></div>
      <div className="w-full flex md:items-center items-start gap-7 md:flex-row flex-col md:justify-between md:mt-2 mt-4 px-5">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((data, i) => (
          <h4 key={i} className="capitalize font-normal">
            {data}
          </h4>
        ))}
        <Button>start the project</Button>
      </div>
    </div>
  );
}
export function Button({ children }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="border-2  text-sm text-[#606060] rounded-full py-1 px-2 border-[#606060] uppercase  font-medium">
        {children}
      </button>
      <span className="border-2 md:block hidden text-sm text-[#606060] rounded-full p-[5px] border-[#606060] uppercase  font-medium  rotate-45">
        <IoMdArrowUp />
      </span>
    </div>
  );
}
export default Main;
