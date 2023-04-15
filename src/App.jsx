require("dotenv").config();
import { useState, useEffect } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, child, get } from "firebase/database";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getDatabase();
        const uid = user.uid;

        get(child(ref(getDatabase()), `users/${uid}/projects`)).then(
          (snapshot) => {
            const data = snapshot.val();
            setProjects(Object.values(data));
          }
        );
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/signup" element={<Signup user={user} />} />
        <Route path="/dashboard" element={<Dashboard projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;
