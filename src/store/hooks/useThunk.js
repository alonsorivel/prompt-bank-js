import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg, onSuccess = () => {}) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => {
          setIsLoading(false);
          setError(false);
          onSuccess();
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
