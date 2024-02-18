// import { i } from "vite/dist/node/types.d-jgA8ss1A";
// import Eyespic from "../assets/";
function PlayEyes() {
  return (
    // <></>
    <div className="h-60 w-full relative -mt-5">
      <div className="   bg-no-repeat bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-contain   h-full w-full ">
        <div className=" flex items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4  ">
          {Array.from({ length: 2 }, (_, i) => i + 1).map((num, i) => (
            <div className="bg-white  h-24 w-24 rounded-full relative " key={i}>
              <div className="bg-black absolute w-10 h-10 flex items-center justify-center rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white">
                <div className=" h-2   w-full bg-transparent">
                  <div className="h-2 w-2 bg-white rounded-full "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayEyes;
