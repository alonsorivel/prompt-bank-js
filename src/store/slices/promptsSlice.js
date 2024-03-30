import { createSlice } from "@reduxjs/toolkit";
import { addPrompt } from "../thunks/addPrompt";
import { fetchPrompts } from "../thunks/fetchPrompts";

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

const counterSlice = createSlice({
  name: "prompts",
  initialState,
  extraReducers(builder) {
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

    builder.addCase(addPrompt.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addPrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addPrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export default counterSlice.reducer;
