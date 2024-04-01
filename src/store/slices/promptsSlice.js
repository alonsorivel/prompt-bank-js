import { createSlice } from "@reduxjs/toolkit";
import { addPrompt } from "../thunks/addPrompt";
import { fetchPrompts } from "../thunks/fetchPrompts";
import { removePrompt } from "../thunks/removePrompt";

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

const counterSlice = createSlice({
  name: "prompts",
  initialState,
  extraReducers(builder) {
    // Fetch reducers
    builder.addCase(fetchPrompts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPrompts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPrompts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add reducers
    builder.addCase(addPrompt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addPrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [action.payload, ...state.data];
    });
    builder.addCase(addPrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Remove reducers
    builder.addCase(removePrompt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removePrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(
        (prompt) => prompt.id !== action.payload.id
      );
    });
    builder.addCase(removePrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export default counterSlice.reducer;
