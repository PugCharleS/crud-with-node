import "./App.css";
import UserListContainer from "./components/UserListContainer/UserListContainer";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";
import PostUserForm from "./components/PostUserForm/PostUserForm";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<UserListContainer />} />
            <Route exact path="/edit-form" element={<UserForm />} />
            <Route exact path="/form" element={<PostUserForm />} />
          </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
