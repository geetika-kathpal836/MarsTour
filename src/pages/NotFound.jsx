import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="text-center">
        <h1 className="mb-4 display-1 fw-bold" style={{ fontFamily: 'var(--font-display)', color: 'hsl(var(--primary))' }}>404</h1>
        <p className="mb-4 fs-5 text-secondary">Oops! Page not found</p>
        <a href="/" className="btn-mission btn-mission-primary text-decoration-none">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;