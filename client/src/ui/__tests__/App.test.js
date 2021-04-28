import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { BrowserRouter } from 'react-router-dom';
import App from '../../ui/App';

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component).toHaveLength(1);
});
