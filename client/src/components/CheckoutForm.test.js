import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const formHeader = getByText(/Checkout Here/i)

    expect(formHeader).toBeInTheDocument()
});

test('form input successfully renders', () => {
    const { queryByTestId } = render(<CheckoutForm />);
    const input = queryByTestId('firstName-input');
    
    expect(input).toBeTruthy()
})

describe('tests input', () => {
    it('changes input', () => {
        const { queryByTestId } = render(<CheckoutForm />)
        const input = queryByTestId('firstName-input');
        // const successMessage = queryByTestId('successMessage')
        
        fireEvent.change(input, {target: { value: 'Jeremy'}})

        expect(input.value).toBe('Jeremy')
    })
})

describe('checks the submit button', () => {
    it('changes an input and clicks submit button', () => {
        const { queryByTestId, getByDisplayValue } = render(<CheckoutForm />)

        const input = queryByTestId('firstName-input');
        fireEvent.change(input, { target: { value: 'Jeremy' } });
        expect(getByDisplayValue(/jeremy/i)).toBeInTheDocument()

        const submitButton = queryByTestId('checkout')
        fireEvent.click(submitButton)

        const successMessage = queryByTestId('successMessage')
        expect(successMessage).toBeInTheDocument()
    })
})
