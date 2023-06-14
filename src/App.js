import { Provider } from 'react-redux';
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Header />
      <TodoForm />
      <Todos />
      </Provider>
    </div>
  );
}

export default App;