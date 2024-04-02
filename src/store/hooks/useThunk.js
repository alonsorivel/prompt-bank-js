import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg, events = {}) => {
      // Events model
      const eventsModel = {
        onSuccess: () => {},
        onError: () => {},
        onFinally: () => {}
      };

      // Update events
      const doEvent = { ...eventsModel, ...events };

      setIsLoading(true);
      setError(null);
      dispatch(thunk(arg))
        .unwrap()
        .then(() => {
          setError(false);
          doEvent.onSuccess();
        })
        .catch((err) => {
          setError(err);
          doEvent.onError();
        })
        .finally(() => {
          setIsLoading(false);
          doEvent.onFinally();
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
