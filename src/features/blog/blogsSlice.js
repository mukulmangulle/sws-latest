
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogcontent",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    blogcontents:[ {
      id:1,
      name: "123456789"
    },
    {
      id:2,
      name: "123"
    },
   ],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchblogcontents.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchblogcontents.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contents = action.payload
      })
      .addCase(fetchblogcontents.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true

      })
  },
});

export default blogSlice.reducer;

export const fetchblogcontents = createAsyncThunk("FETCH/BLOGCONTENTS", async () => {
  const response = await fetch("https://sohamsolution.com/wp-json/wp/v2/posts/");
  const data = await response.json();
  return data;
  
});


