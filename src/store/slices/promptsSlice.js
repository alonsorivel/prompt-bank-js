import { createSlice } from "@reduxjs/toolkit";
import { addPrompt } from "../thunks/addPrompt";
import { fetchPrompts } from "../thunks/fetchPrompts";
import { removePrompt } from "../thunks/removePrompt";
import { updatePrompt } from "../thunks/updatePrompt";

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

const promptSlice = createSlice({
  name: "prompts",
  initialState,
  reducers: {
    setExpandedPrompt(state, action) {
      // Copy state data
      const dataCopy = [...state.data];

      // Find the prompt
      const index = dataCopy.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        dataCopy[index] = {
          ...dataCopy[index],
          expanded: action.payload.expanded
        };
        state.data = dataCopy;
      }
    }
  },
  extraReducers(builder) {
    // Fetch reducers
    builder.addCase(fetchPrompts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPrompts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPrompts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add reducers
    builder.addCase(addPrompt.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addPrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = [action.payload, ...state.data];
    });
    builder.addCase(addPrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Remove reducers
    builder.addCase(removePrompt.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removePrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = state.data.filter(
        (prompt) => prompt.id !== action.payload.id
      );
    });
    builder.addCase(removePrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Update reducers
    builder.addCase(updatePrompt.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updatePrompt.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;

      // Copy state data
      const dataCopy = [...state.data];

      // Find the prompt
      const index = dataCopy.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        dataCopy[index] = { ...dataCopy[index], ...action.payload };
        state.data = dataCopy;
      }
    });
    builder.addCase(updatePrompt.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export default promptSlice.reducer;

// Export reducers
export const { setExpandedPrompt } = promptSlice.actions;
