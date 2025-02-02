import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async (sort) => {
    const response = await fetch(
      sort
        ? `https://dummyjson.com/products?sortBy=${sort._sort}&orderBy=${sort._order}`
        : "https://dummyjson.com/products"
    );
    const data = await response.json();
    console.log("fetch products by filter ", data);
    return data.products;
  }
);

const initialState = {
  loading: false,
  products: [],
  status: "idle",
  selectedProduct: null,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(fetchProductsByFilterAsync.rejected, (state, { error }) => {
        state.loading = false;
        state.status = "failed";
        state.error = error.message;
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export const selectAllProduct = (state) => state.product.products;
export default productSlice.reducer;
