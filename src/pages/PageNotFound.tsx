const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-full bg-gray-300">
      <div className="p-10 mx-10 my-20 text-center bg-white rounded ">
        <h1 className="text-5xl font-bold">404 Page Not Found !</h1>
        <p className="p-5 text-gray-400">
          The page you are after is not longer exists. Check out
          <span> the Home Page </span> instead.It's usually nicer than this
          page.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
