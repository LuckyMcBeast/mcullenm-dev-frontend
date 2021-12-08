import {render, screen, within} from '@testing-library/react';
import TopBar from "../components/TopBar";

describe("<TopBar/>", () =>{
    test('should render title', () => {
        render(<TopBar/>)
        const title = screen.getByTestId("title")

        expect(title).toBeInTheDocument()
    });

    test('should contain HeaderTextAsCode within title', () => {
        render(<TopBar/>)
        const title = screen.getByTestId("title")
        const headerTextAsCode = within(title).getByTestId("headerTextAsCode")

        expect(headerTextAsCode).toBeInTheDocument()
    });
})
