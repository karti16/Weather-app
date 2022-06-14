// main
import { Provider } from 'react-redux';
import Main from './components/main/main';
import SearchField from './components/searchField/searchField';
import store from './redux/store';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <SearchField />
        <Main />
      </Provider>
    </div>
  );
};

export default App;
