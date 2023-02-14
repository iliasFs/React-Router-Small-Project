import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*// the first Route is the App  path: '/'- element:we tell to ReactRouter what is the element that needs to be rendered when the URL matches this path '/' */}
      <Route path="about" element={<About />}/>
    </Routes>
  );
}

export default App;
