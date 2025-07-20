import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import LoginPage from "./components/Home/LoginPage";
import SignupPage from "./components/Home/SignupPage";
function App() {


  return (
    <>
      <div style={{background : "rgba(34, 30, 103, 1)", minHeight: "100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
