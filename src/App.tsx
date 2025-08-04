import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Redirect } from "./components/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
