import { configureStore } from "@reduxjs/toolkit";
import promptsReducer from "./slices/promptsSlice";

export const store = configureStore({
  reducer: {
    prompts: promptsReducer
  }
});

// Export reducers directly from the store
export { setExpandedPrompt } from "./slices/promptsSlice";

// Export thunks directly from the store
export * from "./hooks/useThunk";
export * from "./thunks/addPrompt";
export * from "./thunks/fetchPrompts";
export * from "./thunks/removePrompt";
export * from "./thunks/updatePrompt";
