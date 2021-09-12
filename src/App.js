import { Switch, Route } from 'react-router';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
// import ContactsList from './components/ContactsList';
// import Form from './components/Form';
// import Filter from './components/Filter';

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path="/contacts" component={ContactsView} /> */}
      </Switch>
      {/* <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList /> */}
    </>
  );
}

export default App;
