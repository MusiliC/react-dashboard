import Header from "./components/header/Header";
import LeftPart from "./components/leftPart/LeftPart";
import Navbar from "./components/navbar/Navbar";
import RightPart from "./components/rightPart/RightPart";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 w-full col-span-10">
          {/* left part */}
          <LeftPart/>
          {/* right part */}
          <RightPart/>
        </div>
      </div>
    </div>
  );
}

export default App;
