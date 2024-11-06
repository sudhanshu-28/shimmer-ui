const ShimmerUI = () => {
  return (
    <>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="m-5 p-4 border border-black rounded-lg">
            <div className="w-64 h-64 bg-gray-200"></div>
          </div>
        ))}
    </>
  );
};

export default ShimmerUI;
