import { useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { useThunk, removePrompt } from "../store";
import UpdatePrompt from "./UpdatePrompt";
import ErrorModal from "./modals/ErrorModal";
import { format } from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import "./PromptItem.css";

const unixToDateTime = (ms) => {
  return format(new Date(ms), "MMM do, yyyy HH:mm:ss");
};

const PromptItem = ({ prompt, last }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [expand, setExpand] = useState(false);
  const [doRemovePrompt, isLoading, error] = useThunk(removePrompt);

  const handleRemove = () => {
    doRemovePrompt(prompt, { onSuccess: () => setExpand(false) });
  };

  const ExpandButton = () => {
    return (
      <Button
        className="float-end"
        variant="light"
        size="sm"
        onClick={() => setExpand(!expand)}
      >
        <FontAwesomeIcon icon={expand ? faChevronUp : faChevronDown} />
      </Button>
    );
  };

  return (
    <div className="PromptItem">
      {!isUpdating && (
        <Card className={!last && "mb-2"}>
          <Card.Header as="h5">
            {prompt.title} <ExpandButton />
          </Card.Header>
          {expand && (
            <>
              <Card.Body>
                <div className="text-wrap">{prompt.prompt}</div>
                {!prompt.updatedAt && (
                  <Badge className="mt-3" pill bg="secondary" text="light">
                    Created on {unixToDateTime(prompt.createdAt)}
                  </Badge>
                )}
                {prompt.updatedAt && (
                  <Badge className="mt-3" pill bg="secondary" text="light">
                    Updated on {unixToDateTime(prompt.updatedAt)}
                  </Badge>
                )}
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  size="sm"
                  disabled={isLoading}
                  onClick={() => setIsUpdating(true)}
                >
                  Update prompt
                </Button>
                <Button
                  className="float-end"
                  variant="danger"
                  size="sm"
                  onClick={handleRemove}
                  disabled={isLoading}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Card.Footer>
            </>
          )}
        </Card>
      )}
      {isUpdating && (
        <UpdatePrompt prompt={prompt} handleCancel={setIsUpdating} />
      )}
      {error && (
        <ErrorModal title="Error Removing Prompt" message={error.message} />
      )}
    </div>
  );
};

export default PromptItem;
