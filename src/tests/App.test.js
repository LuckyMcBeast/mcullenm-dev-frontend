import {render, screen} from '@testing-library/react';
import App from '../App';

describe("<App/>", () => {
    test('should render main page content', () => {
        render(<App/>);
        const topBar = screen.getByTestId("topBar")
        const sideBar = screen.getByTestId("sideBar")
        const mainContent = screen.getByTestId("mainContent")
        const title = screen.getByTestId("title")
        const logo = screen.getByAltText("logo")
        const blogs = screen.getByTestId("blogs")
        const mainPageContent = [topBar, sideBar, mainContent, title, logo, blogs]

        mainPageContent.forEach((element) => {
            expect(element).toBeInTheDocument()
        })
    });
})

