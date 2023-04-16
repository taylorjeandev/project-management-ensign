import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./Navbar";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import uuid from "react-uuid";
function AddProject({ user }) {
  const [name, setName] = useState("");
  // const [id, setId] = useState("");
  const [detail1, setDetail1] = useState("");
  const [detail2, setDetail2] = useState("");
  const [detail3, setDetail3] = useState("");
  const [detail4, setDetail4] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await writeNewPost(name, detail1, detail2, detail3, detail4, image);
  };
  function writeNewPost(name, detail1, detail2, detail3, detail4, image) {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    // A project entry
    const projectData = {
      name: name,
      id: uuid(),
      image: image,
      detail1: detail1,
      detail2: detail2,
      detail3: detail3,
      detail4: detail4,
    };

    // Get a key for a new Post.
    const newProjectsKey = push(child(ref(db), "projects")).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/users/" + userId + "/" + newProjectsKey] = projectData;

    return update(ref(db), updates)
      .then(() => {
        alert("Project added successfully");
        setName("");
        setDetail1("");
        setDetail2("");
        setDetail3("");
        setDetail4("");
        setImage("");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="signup-form form">
        <FormControl m={2} isRequired onSubmit={handleSubmit}>
          <div>
            <div className="name">
              <label htmlFor="name">Name: </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* <div className="id">
              <label htmlFor="id">ID: </label>
              <Input
                type="text"
                id="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div> */}

            <div className="detail1">
              <label htmlFor="detail1">Detail 1: </label>
              <Input
                type="text"
                id="detail1"
                value={detail1}
                onChange={(event) => setDetail1(event.target.value)}
              />
            </div>

            <div className="detail2">
              <label htmlFor="detail2">Detail 2: </label>
              <Input
                type="text"
                id="detail2"
                value={detail2}
                onChange={(event) => setDetail2(event.target.value)}
              />
            </div>
            <div className="detail3">
              <label htmlFor="detail3">Detail 3: </label>
              <Input
                type="text"
                id="detail3"
                value={detail3}
                onChange={(event) => setDetail3(event.target.value)}
              />
            </div>
            <div className="detail4">
              <label htmlFor="detail4">Detail 4: </label>
              <Input
                type="text"
                id="detail4"
                value={detail4}
                onChange={(event) => setDetail4(event.target.value)}
              />
            </div>
            <div className="image">
              <label htmlFor="image">Image: </label>
              <Input
                type="text"
                id="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>

            <Button type="submit" onClick={handleSubmit}>
              Add Project
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default AddProject;
