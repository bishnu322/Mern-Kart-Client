const PageNotFound = () => {
  return (
    <div className="min-h-full bg-gray-300">
      <div className="text-center my-20  mx-10 p-10 bg-white rounded">
        <h1 className="text-5xl font-bold">404 Page Not Found !</h1>
        <p className="text-gray-400 p-5">
          The page you are after is not longer exists. Check out
          <span> the Home Page </span> instead.It's usually nicer than this
          page.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
