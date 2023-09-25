import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center my-8 md:my-40" id="error-page">
      <h1 className="text-red-400 text-5xl font-bold">Error!</h1>
      <p className="text-3xl font-semibold my-5">Sorry, 404 Not Found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
