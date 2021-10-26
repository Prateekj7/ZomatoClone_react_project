import { fireEvent, render } from "@testing-library/react"
import JestTestingUI from "./JestTestingUI"

describe("JestTestingUI", () => {
    it("if label exist in the UI", () => {
        const {baseElement} = render(<JestTestingUI />);
        expect(baseElement).toBeInTheDocument();
    })
    it("Check if label is correct", () => {
        const {getByTestId} = render(<JestTestingUI />);
        const input = getByTestId("input");
        fireEvent.change(input, {target:{value:"geeks"}})
        const output = getByTestId('output');
        expect(output.innerHTML).toBe("Hello geeks");
    })
    it("Snapshot testing", () => {
        const {baseElement} = render(<JestTestingUI />);
        expect (baseElement).toMatchSnapshot();
    })
})