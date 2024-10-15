import {Link} from 'react-router-dom';
import {Fragment} from 'react';

function NotFoundScreen() : JSX.Element {
  return (
    <Fragment>
      <div className="page page--gray">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="page__main">
        <img src="markup/img/not-found.jpg" alt='404'/>
        <div
          className="container not-found--container"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '50px',
            borderRadius: '10px'
          }}
        >
          <h1>
            404.
            <br/>
            <small>Page not found :(</small>
          </h1>
          <Link to="/" className="header__nav-link" style={{color: 'white', textDecoration: 'underline'}}>
            Go to main page
          </Link>
        </div>
      </main>
    </Fragment>
  );
}

export default NotFoundScreen;
