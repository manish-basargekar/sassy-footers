import DiaFooterGradient from "./dia-footer-gradient"

interface DiaScrollEffectProps {
  top: number;
}

const DiaScrollEffect = ({ top }: DiaScrollEffectProps) => {

    console.log(top)

  return (
    <main className="h-[120vh] w-screen overflow-scroll flex flex-col justify-end">
    <div className="flex justify-between px-20 items-center gap-x-40 uppercase font-mono text-13 leading-16 tracking-10 gap-y-24 relative z-1 ">
      <div
        style={{
          transform: `translateY(-${top / 6}vh)`,
        }}
      >
        Careers
      </div>
      <div
        style={{
          transform: `translateY(-${top / 3.5}vh)`,
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
          transform: `translateY(-${top / 6}vh)`,
        }}
      >
        terms of Service
      </div>
    </div>
    <div className="800:mt-10 h-50 600:h-300 1000:h-[35vh]"></div>
    <div
      className="origin-bottom flex items-end  z-2 pointer-events-none h-175 600:h-300 1000:h-[65vh] fixed bottom-0 left-0 right-0 "
      aria-hidden="true"
      style={{ transform: `scaleY(${top / 200})` }}
    >
      <DiaFooterGradient />
 

   
    </div>
  </main>
  )
}

export default DiaScrollEffect