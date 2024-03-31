import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const addPrompt = createAsyncThunk("prompts/add", async (item) => {
  const response = await axios.post("http://localhost:3005/prompts", {
    id: nanoid(13),
    title: item.title,
    prompt: item.prompt,
    createdAt: Date.now()
  });

  //   await pause(1000);

  return response.data;
});

// // DEV ONLY!!!
// const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { addPrompt };
