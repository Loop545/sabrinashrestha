import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import FrontPage from "./pages/Front";

// Styles
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
