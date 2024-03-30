import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const addPrompt = createAsyncThunk("prompts/add", async (prompt) => {
  const response = await axios.post("http://localhost:3005/prompts", {
    id: nanoid(),
    title: prompt.title
  });

  //   await pause(1000);

  return response.data;
});

// // DEV ONLY!!!
// const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { addPrompt };
