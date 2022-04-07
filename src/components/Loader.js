const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="loader"></div>
          <div className="loaderText">Saving counter value</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loader