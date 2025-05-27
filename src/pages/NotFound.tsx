import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 – Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ marginTop: '1rem', display: 'inline-block', color: '#646cff' }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
