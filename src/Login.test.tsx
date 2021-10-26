import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
    it("Check if login is working", () => {
        const {getByTestId} = render(<Login />);
        const emailAddress = getByTestId("emailAddress");
        userEvent.type(emailAddress, "geeks");
        const password = getByTestId('password');
        userEvent.type(password, "geeks");
        const primary = getByTestId('primary');
        userEvent.click(primary);
        
    });
})