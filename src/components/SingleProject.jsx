import { Link, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import Navbar from "./Navbar";
export default function SingleProduct({ projects, user }) {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      {/* <Link to={"/dashboard"}>
        <Text>Go Back</Text>
      </Link> */}
      <div className="single-project">
        <img src={projects[id].image} alt="" />
        <h2>{projects[id].name}</h2>
        <span>{projects[id].detail1}</span>
        <span>{projects[id].detail2}</span>
        <span>{projects[id].detail3}</span>
        <span>{projects[id].detail4}</span>
      </div>
    </>
  );
}
