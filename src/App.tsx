import useDetectScroll from "@smakss/react-scroll-direction";
import Tabs from "./components/Tabs";
import DiaScrollEffect from "./components/dia/dia-scroll-effect";
import ScrollEffectTwo from "./components/scroll-effect-two";
import ScrollEffectThree from "./components/scroll-effect-three";
import ScrollEffectFour from "./components/scroll-effect-four";

function App() {
  const res = useDetectScroll();

  const tabs = [
    {
      id: "1",
      label: "Dia Scroll Effect",
      content: (
        <DiaScrollEffect top={res.scrollPosition.top} />
      ),
    },
    {
      id: "2",
      label: "Scroll Effect Two",
      content: (
        <ScrollEffectTwo top={res.scrollPosition.top} />
      ),
    },
      { 
        id: "3",
        label: "Scroll Effect Three", 
        content: (
          <ScrollEffectThree top={res.scrollPosition.top} />
        ),
      },
      { 
        id: "4",
        label: "Scroll Effect Four", 
        content: (
          <ScrollEffectFour top={res.scrollPosition.top} />
        ),
      },
  ];

  return <Tabs tabs={tabs} defaultTab="1" />;
}

export default App;
