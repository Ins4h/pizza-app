import React from "react";
import { render, cleanup, fireEvent, screen} from "@testing-library/react";
import PizzaOrdering from "../pizzaOrdering/PizzaOrdering";
import { BrowserRouter } from "react-router-dom";

test('should render pizzas as grid', () => {
  render(<BrowserRouter>
    <PizzaOrdering/>
    </BrowserRouter>);
    const gridButton = screen.getByTestId('grid-button');

    fireEvent.click(gridButton);
  
  const pizzaList = screen.getByTestId('pizza-list');
  expect(pizzaList.isGrid).toBeTruthy;
});

afterEach(cleanup);
