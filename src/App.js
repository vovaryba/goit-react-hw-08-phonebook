import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { authOperations, authSelectors } from 'redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

function App() {
	const dispatch = useDispatch();
	const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
	  !isFetchingCurrentUser && (
		  <>
      <AppBar />

		  <Switch>
			  <Suspense fallback={<p>Loading...</p>}>
				  <PublicRoute exact path="/"><HomeView /></PublicRoute>
				  <PublicRoute path="/register" restricted><RegisterView /></PublicRoute>
				  <PublicRoute path="/login" redirectTo="/contacts" restricted><LoginView /></PublicRoute>
				  <PrivateRoute path="/contacts" redirectTo="/login"><ContactsView /></PrivateRoute>
			  </Suspense >
      </Switch>
		  </>
	  )
  );
}

export default App;
