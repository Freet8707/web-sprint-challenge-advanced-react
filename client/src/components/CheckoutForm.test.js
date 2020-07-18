import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const formHeader = getByText(/Checkout Here/i)

    expect(formHeader).toBeInTheDocument()
});



test("form shows success message on submit with form details", async () => {
    // const handleSubmit = jest.fn()
    const { getByTestId, getByLabelText } = render(<CheckoutForm />)
    const input = getByLabelText(/First Name:/i)
    // const submit = getByTestId(/checkout/)
    const submit = getByTestId(/checkout/)
    const submitMessage = 'Your new green friends will be shipped to:'
    
    // const { submitMessage } = setUp()

    // fireEvent.change(input, { target: { firstName: 'Jeremy' }})
    fireEvent.change(input, { target: { firstName: 'Jeremy' } })
    fireEvent.click(submit)
    
    const successSubmit = await findByText(submitMessage)

    expect(input.firstName).toBe('Jeremy')

    // expect(submitMessage).toBeInTheDocument()
    // expect(handleSubmit).toBeCalled()
    // expect(input).toBeInTheDocument()
    // expect(submit).toBeInTheDocument()
});
