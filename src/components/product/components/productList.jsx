import { useEffect, useState } from "react";
import {
  selectAllProduct,
  fetchProductsByFilterAsync,
  selectSearch,
} from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./product";
export const ProductList = () => {
  const sortOptions = [
    { name: "Best Rating", sort: "rating", order: "desc", current: false },
    { name: "Price: Low to High", sort: "price", order: "asc", current: false },
    {
      name: "Price: High to Low",
      sort: "price",
      order: "desc",
      current: false,
    },
  ];
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();
  const products = useSelector(selectAllProduct);
  const search = useSelector(selectSearch);
  console.log("search", search);
  const handleSort = (e, option) => {
    sortOptions.forEach((option) => (option.current = false));
    option.current = true;
    const sort = { _sort: option.sort, _order: option.order };
    console.log({ sort });
    setSort(sort);
  };
  console.log("products", products);

  //   console.log("products", products);
  useEffect(() => {
    dispatch(fetchProductsByFilterAsync({ sort, search }));
  }, [dispatch, sort, search]);
  // useEffect(() => {
  //   products = products.filter((product) => product.title.includes(search));
  // }, [search, products]);
  return (
    <div>
      <div className="flex items-center justify-between max-w-5xl mx-auto mt-6 text-gray-700 mb-6">
        <span>Items 1–12 of 19</span>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm">
            Sort By
          </label>
          <select
            id="sort"
            className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            onChange={(e) =>
              handleSort(
                e,
                sortOptions.find((option) => option.name === e.target.value)
              )
            }
          >
            {sortOptions.map((option) => (
              <option
                key={option.name}
                value={option.name}
                className=" border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-[100vh] overflow-y-scroll px-4 md:px-10 lg:px-20">
        {products &&
          products.map((product) => (
            <div key={product.id} className="my-4 mx-2 ">
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};
