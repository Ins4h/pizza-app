// import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme"
import CartView from './views/CartView';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './components/header/Header';

Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   render(<CartView />);
//   const linkElement = do;
//   expect(linkElement).toBeInTheDocument();
//   expect(<div></div>).toBeInTheDOM;
// });

let wrapper = shallow(<Header />)

test("render correctly", () => {
    expect(wrapper).toMatchSnapshot();
})