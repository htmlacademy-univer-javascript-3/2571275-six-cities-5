import {Link} from 'react-router-dom';
import {AppRoutes} from '../../components/app/AppRoutes.ts';

function NotFoundScreen() : JSX.Element {
  return (
    <>
      <div className="page page--gray">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={AppRoutes.Root} className="header__logo-link">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
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
