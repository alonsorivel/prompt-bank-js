import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useThunk, addPrompt } from "../store";
import "./AddPrompt.css";

const AddPrompt = () => {
  const [title, setTitle] = useState("New prompt");

  const [doAddPrompt, isAddingPrompt, addingPromptError] = useThunk(addPrompt);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    doAddPrompt({ title });

    setTitle("");
  };

  return (
    <div className="AddPrompt">
      <Container className="p-1rem">
        <Card>
          <Card.Header as="h5">Create new prompt</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Prompt title</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={isAddingPrompt}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      {addingPromptError && (
        <Container>
          <Alert variant="danger">
            {addingPromptError.message} while adding prompt...
          </Alert>
        </Container>
      )}
    </div>
  );
};

export default AddPrompt;
