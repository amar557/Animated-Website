function AnimateHeading() {
  return (
    <div className="-mt-4  bg-[#004D43] rounded-t-xl  pt-14 h-max w-full whitespace-nowrap pb-16 ">
      <div className="flex items-center justify-start flex-row flex-nowrap gap-2 text-white    whitespace-nowrap border-t-2 border-b-2     overflow-hidden ">
        <h1 className="font-[Anton] leading-none text-8xl   uppercase ">
          we are oochi
        </h1>
        <h1 className="font-[Anton] leading-none text-8xl  ">we are oochi</h1>
      </div>
    </div>
  );
}

function Line() {
  return <div className="h-[2px] bg-[#4d837c]"></div>;
}
export default AnimateHeading;
