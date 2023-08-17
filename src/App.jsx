import SliderCard from "./components/SliderCard";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <>
      <div className="bg-purple-300 h-screen flex items-center justify-center">
        <div className="w-1/2 mx-auto bg-white p-8 min-h-[500px] relative">
          <SliderCard />
          <ButtonContainer />
        </div>
      </div>
    </>
  );
}

export default App;
