import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store/configureStore';
import App from '../../App';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PersistGate loading={<p>Loading</p>} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
