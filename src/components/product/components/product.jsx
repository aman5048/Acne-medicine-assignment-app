export const Product = ({ product }) => {
  return (
    <>
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative h-full">
        <a href="./">
          <img
            className="rounded-t-lg p-8"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </a>

        <div className="flex flex-col p-5 pb-5 space-between">
          <div>
            <div className="flex items-center mt-2.5 mb-5">
              <svg
                className="text-yellow-300 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="ms-3 text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {product?.rating || 0}
              </span>
            </div>
            <a href="./">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product?.title || "No title"}
              </h5>
              <p className="text-xl font-semibold text-gray-400">
                {product?.brand || "No brand"}
              </p>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product?.price || "Not Disclosed"}
              </span>
            </div>
          </div>
          <button className="w-full my-2 mx-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
