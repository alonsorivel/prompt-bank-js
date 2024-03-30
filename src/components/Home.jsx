import { Container } from "react-bootstrap";
import AddPrompt from "./AddPrompt";
import ManagePrompts from "./ManagePrompts";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <AddPrompt />
        <ManagePrompts />
      </Container>
    </div>
  );
};

export default Home;
