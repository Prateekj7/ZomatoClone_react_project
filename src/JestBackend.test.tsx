import { render, screen } from "@testing-library/react";
import * as api from "./Api";
import JestBackend from "./JestBackend";

const data = [
    {
        name: "a",
        email: "a@gmail.com"
    }
]

describe("JestBackend", () => {
    it("test with mock backend", async () => {
        const mock = jest.spyOn(api, "apiCall");
        mock.mockImplementation(() => Promise.resolve(data));
        const {getByTestId} = render(<JestBackend />);
        expect (await screen.findByText(data[0].email)).toBeInTheDocument();
        expect(getByTestId("email0").textContent).toBe(data[0].email);
    })
})