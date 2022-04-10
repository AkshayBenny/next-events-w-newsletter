import Link from 'next/link';
const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>The page could not be found</p>
      <Link href='/'>
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
