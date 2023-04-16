import { Link, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import Navbar from "./Navbar";
export default function SingleProduct({ projects, user }) {
  const { id } = useParams();
  console.log(projects);
  return (
    <>
      <Navbar />
      <div className="single-project">
        {projects[id].image ? (
          <img src={projects[id].image} alt="" />
        ) : (
          <img src={projects[i]} alt="" />
        )}
        <h2>{projects[id].name}</h2>
        <span>{projects[id].detail1}</span>
        <span>{projects[id].detail2}</span>
        <span>{projects[id].detail3}</span>
        <span>{projects[id].detail4}</span>
      </div>
    </>
  );
}
