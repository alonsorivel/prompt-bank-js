import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPrompts = createAsyncThunk("prompts/fetch", async () => {
  const response = await axios.get("http://localhost:3005/prompts");

  //   await pause(1000);

  return response.data.sort((a, b) => b.createdAt - a.createdAt);
});

// // DEV ONLY!!!
// const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { fetchPrompts };
