import {render, screen} from '@testing-library/react';
import MainContent from "../components/MainContent";

describe("<MainContent/>", () =>{
    test('should render TopBar and Blogs', () => {
        render(<MainContent/>)
        const topBar = screen.getByTestId("topBar")
        const blogs = screen.getByTestId("blogs")

        expect(topBar).toBeInTheDocument()
        expect(blogs).toBeInTheDocument()
    });
});

