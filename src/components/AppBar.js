import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';

const styles = {
  header: {
    display: 'flex',
    borderBottom: (1, 'solid', '#2a363b'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
