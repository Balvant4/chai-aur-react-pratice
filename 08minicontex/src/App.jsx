import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContexProvider from "./contex/UserContexProvider";

function App() {
  return (
    <UserContexProvider>
      <h1>Hello world</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  );
}

export default App;
