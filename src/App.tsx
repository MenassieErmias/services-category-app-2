import { useState } from "react";

// COMPONENTS IMPORT
import Navbar from "./Components/Navbar/Navbar";
import Display from "./Components/Display/Display";

function App() {
  // STATE
  const [servicesCount, setServicesCount] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(100);

  return (
    <div className="App">
      <Navbar
        servicesCount={servicesCount}
        zoom={zoom}
      />
      <Display
      />
    </div>
  );
}

export default App;
