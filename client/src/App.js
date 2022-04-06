import "./App.css";
import LanderPage from "./components/LanderPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import StarterPage from "./components/StarterPage";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUpPage />
      {/* <StarterPage /> */}
    </div>
  );
}

export default App;
