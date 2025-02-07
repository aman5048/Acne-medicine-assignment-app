import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async ({ sort, search }) => {
    const response = await fetch(
      sort
        ? `https://dummyjson.com/products?sortBy=${sort._sort}&orderBy=${sort._order}`
        : "https://dummyjson.com/products"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();
    if (search.trim().length > 0) {
      data.products = data.products.filter((product) =>
        product.title.toLowerCase().includes(search.trim().toLowerCase())
      );
      console.log("search", search);
    }
    console.log("fetch products by filter ", data);
    return data.products;
  }
);

const initialState = {
  loading: false,
  products: [],
  status: "idle",
  selectedProduct: null,
  search: "",
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.search = action.payload;
    },
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
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.rejected, (state, { error }) => {
        state.loading = false;
        state.status = "failed";
        state.error = error.message;
      });
  },
});

export const { clearSelectedProduct, setFilter } = productSlice.actions;
export const selectAllProduct = (state) => state.product.products;

export const selectSearch = (state) => state.product.search;
export default productSlice.reducer;
