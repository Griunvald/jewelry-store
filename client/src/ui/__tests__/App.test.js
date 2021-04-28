import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { BrowserRouter } from 'react-router-dom';
import App from '../../ui/App';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component).toHaveLength(1);
  });

  test('Shows Header', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  test('Shows Footer', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });
});
