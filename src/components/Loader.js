const Loader = ({ isLoading }) => {
  return (
    <>
      <div className="loading" style={{visibility: isLoading ? 'visible' : 'hidden' }}>
        <div className="loader"></div>
        <div className="loaderText">Saving counter value</div>
      </div>
    </>
  );
};

export default Loader