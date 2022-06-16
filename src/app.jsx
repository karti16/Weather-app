// main
import { Provider } from 'react-redux';
import MainTemp from './components/mainTemp/mainTemp';
import SearchField from './components/searchField/searchField';
import store from './redux/store';
import styles from './app.module.scss';
import DetailsTemp from './components/detailsTemp/detailsTemp';

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <MainTemp />
        <DetailsTemp />
      </div>
    </Provider>
  );
};

export default App;
