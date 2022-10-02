import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Navbar/Landing";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Navbar/Signin";
import SignUp from "./components/Navbar/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route
          path="signIn"
          element={
            <>
              <Signin />
            </>
          }
        />
                <Route
          path="signUp"
          element={
            <>
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
