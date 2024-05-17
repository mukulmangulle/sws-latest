import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const blogcontentSlice = createSlice({
  name: "blogcontents",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    blogcontents: [
      // {
      //   id: 1,
      //   title: {
      //     rendered: "Unlocking the Potential: Add Me to Search Strategies"
      //   },
      //   excerpt: {
      //     rendered: "Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive guide demystifies the ‘Add Me to Search‘ process offering insights and practical tips to elevate your online visibility game. Table Of Contents Introduction: What is add me on Google? Understanding the Significance of 'Add Me to Search' How To Create Your Google People Card? Where is my…"
      //   },
      // },

      // {
      //   id: 2,
      //   title: {
      //     rendered: "Shopify vs Squarespace – Which is Better?"
      //   },
      //   excerpt: {
      //     rendered: "In the vast landscape of e-commerce, two platforms stand out as popular choices for entrepreneurs looking to establish an online presence: Shopify vs Squarespace. Each platform comes with its unique set of features and advantages, making the decision-making process challenging but crucial for the success of your online venture. Today, we delve into the intricacies…"
      //   },
      // },

      // {
      //   id: 3,
      //   title: {
      //     rendered: "Top 10 UI/UX Design Trends Every Designer Must Know"
      //   },
      //   excerpt: {
      //     rendered: "In the ever-evolving world of technology, User Interface (UI) and User Experience (UX) design play a pivotal role in shaping the digital landscape. Designers must constantly adapt to new trends and technologies to create compelling and user-friendly interfaces. In this article, we’ll delve into the top 10 UI/UX design trends every designer must know to…"
      //   },
      // },
    ],
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchblogcontents.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(fetchblogcontents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogcontents = action.payload;
      })
      .addCase(fetchblogcontents.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "Products Cannot Be Fetched!";
      });
  },
});

export default blogcontentSlice.reducer;

export const fetchblogcontents = createAsyncThunk("FETCH/BLOGCONTENT", async () => {
  const response = await fetch("https://sohamsolution.com/wp-json/wp/v2/posts/");
  const data = await response.json();
  return data;
  // console.log(data)
});