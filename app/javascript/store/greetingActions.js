import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get('/api/v1/greetings');
      const greeting = response.data.greeting;
      return greeting;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    greeting: "",
    loading: false,
    error: null,
  },
  reducers: {
    fetchGreetingStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchGreetingSuccess: (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
    },
    fetchGreetingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchGreetingStart,
  fetchGreetingSuccess,
  fetchGreetingFailure,
} = greetingSlice.actions;

export default greetingSlice.reducer;
