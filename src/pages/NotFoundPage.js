import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found" aria-label="Page not found">
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="not-found-link">
        Go Back Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
