import { useEffect } from "react";
import "./App.css";
import api from "./services/api";
import RoutesKenzieHub from "./routes";
import UserContextProvider from "./contexts/UserContext";

function App() {
  useEffect(() => {
    api.get("users").then((response) => console.log(response));
  });
  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider>
          <RoutesKenzieHub />
        </UserContextProvider>
      </header>
    </div>
  );
}

export default App;
