import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";

import Collection from "./features/collection/Collection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collections" element={<Collection />}>
          <Route path="collections/:collectionId" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
