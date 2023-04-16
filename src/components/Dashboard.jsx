import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import { Button, Card, CardBody, Text, Divider } from "@chakra-ui/react";
import uuid from "react-uuid";

const Dashboard = ({
  projects,
  handleLogout,
  user,
  changingSearchData,
  projectFilter,
  searchValue,
}) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      <h1>Projects</h1>
      <Search changingSearchData={changingSearchData} />
      <Link to={"/add-project"}>
        <Button mt={3}>Add a Project</Button>
      </Link>
      <div className="card">
        {searchValue
          ? projectFilter.map((project, i) => (
              <Card key={uuid()} style={{ width: "18rem", margin: "10px" }}>
                <Link to={`/${i}`}>
                  <img variant="top" src={project.image} />
                </Link>
                <CardBody>
                  <Text>{project.name}</Text>
                </CardBody>
                <Divider borderColor="gray.200" />
                <Link to={`/${i}`}>
                  <Button variant="primary">View Details</Button>
                </Link>

                <Text pr={30}>{projects.description}</Text>
              </Card>
            ))
          : projects.map((project, i) => (
              <Card key={uuid()} style={{ width: "18rem", margin: "10px" }}>
                <Link to={`/${i}`}>
                  <img
                    className="dashboard-image"
                    variant="top"
                    src={project.image}
                  />
                </Link>
                <CardBody>
                  <Text>{project.name}</Text>
                </CardBody>
                <Divider borderColor="gray.200" />
                <Link to={`/${i}`}>
                  <Button variant="primary">View Details</Button>
                </Link>

                <Text pr={30}>{projects.description}</Text>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
