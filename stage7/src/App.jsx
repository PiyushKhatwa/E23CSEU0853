import { useState } from "react";
import Home from "./pages/Home";
import Priority from "./pages/Priority";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" ? <Home /> : <Priority />}
    </div>
  );
}

export default App;