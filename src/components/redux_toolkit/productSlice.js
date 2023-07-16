// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   data: [],
// };

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     fetchproduct(state, action) {
//       state.data = action.payload;
//     },
//   },
// });

// export const { fetchproduct } = productSlice.actions;
// export default productSlice.reducer;

// export function getProduct() {
//   return async function getProductThunk(dispatch, getState) {
//     const data = await axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const result = response.data;
//         dispatch(fetchproduct(result));
//       });
//   };
// }

// improve Method using asyncThuk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchproduct(state, action) {
    //   state.data = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      });
  },
});

export const { fetchproduct } = productSlice.actions;
export default productSlice.reducer;

export const getProduct = createAsyncThunk("products/get", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const result = response.data;
  return result;
});
