import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useThunk, removePrompt } from "../store";
import ErrorModal from "./ErrorModal";
import { format } from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import "./PromptItem.css";

const FormatDateFromUnix = ({ unixms, label, time = true }) => {
  const date = new Date(unixms);

  const formatStr = time ? "MMM do, yyyy HH:mm:ss" : "MMM do, yyyy";

  const formattedDate = format(date, formatStr);

  return (
    <div className="fst-italic">
      <small>
        {label} {formattedDate}
      </small>
    </div>
  );
};

const PromptItem = ({ prompt }) => {
  const [expand, setExpand] = useState(false);
  const [doRemovePrompt, isLoading, error] = useThunk(removePrompt);

  const handleRemove = () => {
    doRemovePrompt(prompt);
  };

  const ExpandButton = () => {
    return (
      <Button variant="light" size="sm" onClick={() => setExpand(!expand)}>
        <FontAwesomeIcon icon={expand ? faChevronUp : faChevronDown} />
      </Button>
    );
  };

  return (
    <div className="PromptItem">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center mb-2"
      >
        <div>
          <div>
            <h5>
              {prompt.title} <ExpandButton />
            </h5>
          </div>
          {expand && (
            <Card>
              <Card.Body className="bg-white paragraph">
                {prompt.prompt}
              </Card.Body>
            </Card>
          )}
          <FormatDateFromUnix unixms={prompt.createdAt} label="Created on:" />
        </div>
        <Button
          className="ml-1"
          variant="danger"
          size="sm"
          onClick={handleRemove}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Container>
      {error && (
        <ErrorModal title="Error Removing Prompt" message={error.message} />
      )}
    </div>
  );
};

export default PromptItem;
