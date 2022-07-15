import "./App.css";
import UserListContainer from "./components/UserListContainer/UserListContainer";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserListContainer />
      </div>
    </UserContextProvider>
  );
}

export default App;
