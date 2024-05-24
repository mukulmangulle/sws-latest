import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CategoriesblogSlice = createSlice({
    name: "Categoriesblog",
    initialState: {
        isSuccess: false,
        isLoading: false,
        isError: false,
        Categoriesblogcontents: [
           
        ],
        message: "",
    },
    reducers: {
        addSlug(state, action) {
            state.Categoriesblogcontents.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchcategoriesblog.pending, (state) => {
                state.isLoading = true;
                state.message = "";
            })
            .addCase(fetchcategoriesblog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.Categoriesblogcontents = action.payload;
            })
            .addCase(fetchcategoriesblog.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = "categories Cannot Be Fetched!";
            });
    },
});


export const { addSlug } = CategoriesblogSlice.actions;
export default CategoriesblogSlice.reducer;


const API = `https://sohamsolution.com/wp-json/wp/v2/posts?categories=38`;
export const fetchcategoriesblog = createAsyncThunk("FETCH/CATEGORIES", async (id) => {
    const response = await fetch(`${API}${id}`);
    const data = await response.json();
    // console.log(data.id)
    return data;
}
);

