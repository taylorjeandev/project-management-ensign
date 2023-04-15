import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import { Button, Card, CardBody, Text, Divider } from "@chakra-ui/react";

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
      <div className="card">
        {searchValue
          ? projectFilter.map((project) => (
              <Card key={project.id} style={{ width: "18rem", margin: "10px" }}>
                <img variant="top" src={project.image} />
                <CardBody>
                  <Text>{project.name}</Text>
                </CardBody>
                <Divider borderColor="gray.200" />
                <Link to={`/${project.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>

                <Text pr={30}>{projects.description}</Text>
              </Card>
            ))
          : projects.map((project) => (
              <Card key={project.id} style={{ width: "18rem", margin: "10px" }}>
                <img variant="top" src={project.image} />
                <CardBody>
                  <Text>{project.name}</Text>
                </CardBody>
                <Divider borderColor="gray.200" />
                <Link to={`/${project.id}`}>
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
