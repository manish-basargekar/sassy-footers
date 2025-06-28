const ScrollEffectThree = ({ top }: { top: number }) => {
  return (
    <main className="h-[120vh] w-screen overflow-scroll flex flex-col justify-end">
      <div className="flex justify-between px-20 items-center gap-x-40 uppercase font-mono text-13 leading-16 tracking-10 gap-y-24 relative z-1 ">
        <div
          style={{
            transform: `translateY(-${top / 5}vh)`,
          }}
        >
          Careers
        </div>
        <div
          style={{
            transform: `translateY(-${top / 7}vh)`,
          }}
        >
          Privacy Policy
        </div>
        <div
          style={{
            transform: `translateY(-${top / 3.5}vh)`,
          }}
        >
          Cookie policy
        </div>
        <div
          style={{
            transform: `translateY(-${top / 7}vh)`,
          }}
        >
          terms of Service
        </div>
      </div>
      <div className="800:mt-10 h-50 600:h-300 1000:h-[35vh]"></div>
      <div
        className="origin-bottom flex items-end   z-2 pointer-events-none  600:h-300 1000:h-[65vh] fixed bottom-0 left-0 right-0 w-full"
        aria-hidden="true"
        style={{ transform: `scaleY(${top / 200})` }}
      >
        <div
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, #f7f7f7 100%), linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)",
            backgroundBlendMode: "color-dodge, normal",
          }}
          className="w-full h-[500px]"
        ></div>
      </div>
    </main>
  );
};

export default ScrollEffectThree;
