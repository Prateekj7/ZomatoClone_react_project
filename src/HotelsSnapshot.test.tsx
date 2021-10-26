import { render } from "@testing-library/react"
import * as react from "react";
import ErrorMessage from "./ErrorMessage"
import LoadingSpinner from "./LoadingSpinner";
import Profile from "./Profile";


describe("Hotels Sanpshot test", () => {
    it("Error Message", () => {
        const {baseElement} = render(<ErrorMessage message={"test message"}/>);
        expect(baseElement).toMatchSnapshot();
    })
    it("Loading Spinner", () => {
        const {baseElement} = render(<LoadingSpinner />);
        expect(baseElement).toMatchSnapshot();
    })
    it("Profile Page without mock", () => {
        const {baseElement} = render(<Profile />);
        expect(baseElement).toMatchSnapshot();
    })
})