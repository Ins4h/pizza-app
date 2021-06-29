import React from "react";
import { render, screen, within } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import { CartContext } from "../components/context/cart-context";
import CartView from "./CartView";
Enzyme.configure({ adapter: new Adapter() });

const dummyData = {
  state: {
    orders: [
      {
        price: 20,
        quantity: 2,
      },
      {
        price: 10,
        quantity: 3,
      },
      {
        price: 30,
        quantity: 1,
      },
    ],
  },
};

test("Should sum all orders", () => {
  //   const Context = React.createContext(CartContext);

  // Zammiast tworzyć context, wystarczy użyć tego co mamy

  const { getByText } = render(
    <CartContext.Provider value={dummyData}>
      <CartView></CartView>
    </CartContext.Provider>
  );

  // To zakomentowane niżej też działa

  //   const wrapper = mount(
  //     <CartContext.Provider value={dummyData}>
  //       <CartView></CartView>
  //     </CartContext.Provider>
  //   );
  //   console.log(wrapper);

  //   const element = wrapper.find("#sumDiv");
  //   expect(element.text()).toBe("100zł");

  expect(getByText("100zł")).toBeInTheDocument;
});
