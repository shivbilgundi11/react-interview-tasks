import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div
      id="error-page"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-y-2"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>

      <Link to={"/"} className="text-base text-blue-700 underline">
        Go to home page?
      </Link>
    </div>
  );
}
