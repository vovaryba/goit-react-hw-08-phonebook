import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';

const styles = {
  header: {
    display: 'flex',
    borderBottom: (1, 'solid', '#2a363b'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default function AppBar() {
  return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
