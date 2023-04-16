import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SingleProject from "./components/SingleProject";
import Signup from "./components/Signup";
import AddProject from "./components/AddProject";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getDatabase();
        const uid = user.uid;

        const dbref = ref(db, `users/${uid}`);
        onValue(dbref, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setProjects(Object.values(data));
          } else {
            setProjects([]);
          }
        });
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  const projectFilter = projects.filter((project) =>
    project.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path=":id"
          element={<SingleProject projects={projects} user={user} />}
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              projects={projects}
              handleLogout={handleLogout}
              user={user}
              changingSearchData={changingSearchData}
              projectFilter={projectFilter}
              searchValue={searchValue}
            />
          }
        />
        <Route path="/add-project" element={<AddProject user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
