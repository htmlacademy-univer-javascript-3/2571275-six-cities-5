import {Link} from 'react-router-dom';
import './not-found.css';
import Header from '../../components/header/header.tsx';

function NotFoundScreen() : JSX.Element {
  return (
    <>
      <Header />
      <main className="page__main">
        <img src="markup/img/not-found.jpg" alt='404'/>
        <div className="container not-found--container">
          <h1>
            404.<br/>
            <small>Page not found :(</small>
          </h1>
          <Link to="/" className="not-found--nav">
            Go to main page
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFoundScreen;
