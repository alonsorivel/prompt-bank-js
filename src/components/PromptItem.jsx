import { Button, Container } from "react-bootstrap";
import { useThunk, removePrompt } from "../store";
import ErrorModal from "./ErrorModal";
import { format } from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FormatDateFromUnix = ({ unixms, label, time = true }) => {
  const date = new Date(unixms);

  const formatStr = time ? "MMM do, yyyy HH:mm:ss" : "MMM do, yyyy";

  const formattedDate = format(date, formatStr);

  return (
    <div>
      {label} {formattedDate}
    </div>
  );
};

const PromptItem = ({ prompt }) => {
  const [doRemovePrompt, isLoading, error] = useThunk(removePrompt);

  const handleRemove = () => {
    doRemovePrompt(prompt);
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center mb-2"
      >
        <div>
          <b>{prompt.title}</b>
          <br />
          <FormatDateFromUnix unixms={prompt.createdAt} label="Created on:" />
        </div>
        <Button
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
    </>
  );
};

export default PromptItem;
