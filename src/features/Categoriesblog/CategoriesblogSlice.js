// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const CategoriesblogSlice = createSlice({
//     name: "Categoriesblog",
//     initialState: {
//         isSuccess: false,
//         isLoading: false,
//         isError: false,
//         Categoriesblogcontents: [
//             {
             
//             }
//         ],
//         message: "",
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchcategoriesblog.pending, (state) => {
//                 state.isLoading = true;
//                 state.message = "";
//             })
//             .addCase(fetchcategoriesblog.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.Categoriesblogcontents = action.payload;
//             })
//             .addCase(fetchcategoriesblog.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isSuccess = false;
//                 state.isError = true;
//                 state.message = "categories Cannot Be Fetched!";
//             });
//     },
// });

// export default CategoriesblogSlice.reducer;


// const apiUrl = "https://sohamsolution.com/wp-json/wp/v2/categories";
// export const fetchcategoriesblog = createAsyncThunk("FETCH/CATEGORIES", async () => {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
//     //   console.log(data)
// });

