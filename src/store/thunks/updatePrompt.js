import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updatePrompt = createAsyncThunk("prompts/update", async (item) => {
  const updatedAt = Date.now();

  await axios.patch(`http://localhost:3005/prompts/${item.id}`, {
    title: item.title,
    prompt: item.prompt,
    updatedAt
  });

  // await pause(1000);

  return { ...item, updatedAt };
});

// // DEV ONLY!!!
// const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { updatePrompt };
