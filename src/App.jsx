import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SingleProject from "./components/SingleProject";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, child, get } from "firebase/database";

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

        get(child(ref(getDatabase()), `users/${uid}`)).then((snapshot) => {
          const data = snapshot.val();
          setProjects(Object.values(data));
          console.log(uid);
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
      </Routes>
    </div>
  );
}

export default App;
