import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from './authorization-status.ts';
import {AppRoutes} from '../app/AppRoutes.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
