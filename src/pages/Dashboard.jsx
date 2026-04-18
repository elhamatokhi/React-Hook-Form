import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    // later you could remove auth token here
    console.log("User logged out");

    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
