import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { Form, Link, Button } from 'react-bootstrap';
import { MemoryRouter } from 'react-router-dom';
import App from '../../ui/App';

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};

describe('Login component', () => {
  test('renders login button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-login');
    expect(component.find(Button).length).toBe(1);
  });

  test('renders email and password fields', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-login');
    expect(component.find(Form.Control).length).toEqual(2);
  });
});
