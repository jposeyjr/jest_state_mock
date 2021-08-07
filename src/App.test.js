import App from './app';
import Levelone from './levelone';
import Leveltwo from './leveltwo';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

it('should render second component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(App)).toBeTruthy();
});

//set up a mock function to check any props
const mockLevelTwo = jest.fn();

//mock the child component file and grab props
//we then pass them to the jest mock function so it can listen for them
jest.mock('./leveltwo.js', () => (props) => {
  mockLevelTwo(props);

  //return something for react to render out
  return <mock-Leveltwo />;
});

it('If data is passed we can see level  two is called with prop isReady and data', () => {
  //render parent with props you to test
  render(<Levelone isReady data='some data' />);
  //check that jest mock function is call with an object
  //using objectContaining as we want to ignore other react props
  expect(mockLevelTwo).toHaveBeenCalledWith(
    expect.objectContaining({
      isReady: true,
      data: 'some data',
    })
  );
});

//ensuring it doesn't work when we don't pass props
it('Should not see leveltwo', () => {
  render(<Levelone />);
  expect(mockLevelTwo).not.toHaveBeenCalled();
});
