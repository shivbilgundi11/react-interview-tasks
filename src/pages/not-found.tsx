export default function Notfound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! This page went on a coffee break ☕ and never came back.
      </p>
      <p className="mt-2 text-gray-500">
        Let’s get you somewhere that actually exists.
      </p>

      <a
        href="/"
        className="mt-6 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Take me home 🏠
      </a>
    </div>
  );
}
