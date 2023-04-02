import { render, screen } from '@testing-library/react';
import Product from '../components/Product';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const mockProduct = {
    name: "banana",
    imgSrc: "https://spoonacular.com/cdn/ingredients_100x100/banana.jpg"
}

test('renders correct product information', () => {
    render(<Product name={mockProduct.name} imgSrc={mockProduct.imgSrc}/>);
    const productName = screen.getByRole("heading");
    const productImg = screen.getByRole("img");
    expect(productName.textContent).toMatch(/banana/i);
    expect(productImg.src).toMatch(mockProduct.imgSrc);
});

test('increment button is functional', () => {
    render(<Product name={mockProduct.name} imgSrc={mockProduct.imgSrc} />)

    const button = screen.getByRole("button", {name:"+"});
    const input = screen.getByPlaceholderText("# of items");
    act(() => {
        userEvent.click(button);
    });

    expect(input).toHaveValue(1);
});

test("decrement button doesn't go negative", () => {
    render(<Product name={mockProduct.name} imgSrc={mockProduct.imgSrc}/>);

    const button = screen.getByRole("button", {name:"-"});
    const input = screen.getByPlaceholderText("# of items");
    act(() => {
        userEvent.click(button);
    });

    expect(input).toHaveValue(0);
});

test("Manually typing quantity value works", () => {
    render(<Product name={mockProduct.name} imgSrc={mockProduct.imgSrc}/>);
    const input = screen.getByPlaceholderText("# of items");
    act(() => {
        userEvent.type(input, "2");
    });

    expect(input).toHaveValue(2);
})