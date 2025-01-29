export const AcneSection = () => {
  return (
    <>
      <section className="p-4 bg-gray-50">
        <div className="relative h-64 bg-gray-200">
          <img
            src="https://via.placeholder.com/1200x300"
            alt="Acne Banner"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative flex items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-4xl font-bold text-white">Acne</h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-6 text-center">
          <p className="text-gray-700">
            Our selection of acne products includes a range of medications. We
            offer topical creams, gels, and cleansers containing active
            ingredients such as Salicylic acid and Retinoids to help clear up
            acne and prevent future breakouts.
          </p>
        </div>
      </section>
    </>
  );
};
