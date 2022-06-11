// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/main/main';
import SearchField from './components/searchField/searchField';
import HooksCakeContainer from './components/cake/hooksCakeContainer';
import HooksIceCreamContainer from './components/cake/hooksIceCreamContainer';
import HooksTodoContainer from './components/cake/hooksTodoContainer';
import ItemContainer from './components/cake/itemContainer';
import UserContainer from './components/cake/userContainer';

const App = () => {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <HooksTodoContainer />
      <ItemContainer />
      <ItemContainer cake />
      <UserContainer />
    </Provider>
  );
};

export default App;
