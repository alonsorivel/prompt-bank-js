import { useEffect } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useThunk, fetchPrompts } from "../store";
import PromptItem from "./PromptItem";
import "./ManagePrompts.css";

const ManagePrompts = () => {
  const [doFetchPrompts, isLoadingPrompts, loadingPromptsError] =
    useThunk(fetchPrompts);
  const { data } = useSelector((state) => {
    return state.prompts;
  });

  useEffect(() => {
    doFetchPrompts();
  }, [doFetchPrompts]);

  return (
    <div className="ManagePrompts">
      {isLoadingPrompts && (
        <Container>
          <Spinner animation="grow" />
        </Container>
      )}
      {loadingPromptsError && (
        <Container>
          <Alert variant="danger">
            {loadingPromptsError.message} while fetching prompts...
          </Alert>
        </Container>
      )}
      {data.length > 0 && (
        <Container>
          <Card>
            <Card.Header as="h5">Prompts list</Card.Header>
            <Card.Body className="max-height-500 overflow-auto">
              {data.map((prompt, i) => (
                <PromptItem
                  key={i}
                  prompt={prompt}
                  last={data.length === i + 1}
                />
              ))}
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default ManagePrompts;
