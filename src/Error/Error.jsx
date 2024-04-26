import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page " className="text-center space-y-5 text-2xl mt-10">
        <h1 className="text-3xl text-red-700">404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default Error;