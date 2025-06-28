const ScrollEffectFour = ({ top }: { top: number }) => {
  console.log(top);
  return (
    <main className="h-[120vh] w-screen overflow-scroll flex flex-col justify-end bg-white">
      <div className="flex justify-between px-20 items-center gap-x-40 uppercase font-mono text-13 leading-16 tracking-10 gap-y-24 relative z-1 ">
        <div
          style={{
            transform: `translateY(${(-top /28) + 6}vh)`,
          }}
        >Careers</div>
        <div>Privacy Policy</div>
        <div>Cookie policy</div>
        <div
         style={{
            transform: `translateY(${(-top /28) + 6}vh)`,
          }}
        >terms of Service</div>
      </div>
      <div className="800:mt-10 h-[500px] 600:h-300 1000:h-[35vh]"></div>
      <div
        className="origin-bottom flex items-end   z-2 pointer-events-none 600:h-300 1000:h-[65vh] fixed bottom-0 left-0 right-0 w-ful flex-col  "
        aria-hidden="true"
      >
        <div
          style={{
            transform: `perspective(100px) rotateX(${
              (180 - top * 1.084999) / 4
            }deg)`,
            lineHeight: "1",
    
          }}
          className="text-[450px]  bg-pink-400 text-[#000957] text-center w-full  font-black text-red  perspective-origin-bottom flex flex-col"
        >
          MNSH
        </div>
      </div>
    </main>
  );
};

export default ScrollEffectFour;
