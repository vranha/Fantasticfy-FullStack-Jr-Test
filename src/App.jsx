import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Test from "./pages/Test";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Router>
          <Header />
              <Routes>
                  <Route path="*" element={<Navigate replace to="/" />} />
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/test" element={<Test />} />
              </Routes>
            </Router>
        </div>
    );
}

export default App;
