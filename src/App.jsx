import SliderCardContainer from "./components/SliderCardContainer";
import ButtonContainer from "./components/ButtonContainer";
import { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((oldValue) => {
      const result = (oldValue + 1) % data.length;
      return result;
    });
  };

  const handlePrev = () => {
    setActiveIndex((oldValue) => {
      // adding the data lentgh to avoid negative values and then taking the modulus of the data length to get the correct index.
      const result = (oldValue - 1 + data.length) % data.length;
      return result;
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      handleNext();
    }, 2000);
    return () => {
      clearInterval(intervalID);
    };
  }, [activeIndex]);


  return (
    <>
      <div className="bg-purple-300 h-screen flex items-center justify-center">
        <div className="w-1/2 mx-auto bg-white pt-8 min-h-[500px] relative overflow-hidden">
          <SliderCardContainer activeIndex={activeIndex} />
          <ButtonContainer handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </>
  );
}

export default App;
