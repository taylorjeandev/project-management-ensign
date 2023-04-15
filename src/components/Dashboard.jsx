import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";

const Dashboard = ({ projects }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <Card key={project.id} style={{ width: "18rem", margin: "10px" }}>
            <img variant="top" src={project.image} />

            <CardHeader>{project.name}</CardHeader>
            <Text>{project.description}</Text>
            <Link to={`/project/${project.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
