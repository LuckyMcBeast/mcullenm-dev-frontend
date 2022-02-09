import {render, screen, within} from '@testing-library/react';
import SideBar from "../components/SideBar";

describe("<SideBar/>", () => {
   test('should render logoContainer and full spanning div', () => {
      render(<SideBar/>)
      const logoContainer = screen.getByTestId("logoContainer")
      const hFullDiv = screen.getByTestId("hFullDiv")

      expect(logoContainer).toBeInTheDocument()
      expect(hFullDiv).toBeInTheDocument()
   });

   test('should contain logo within logoContainer', () => {
      render(<SideBar/>)
      const logoContainer = screen.getByTestId("logoContainer")
      const logo = within(logoContainer).getByAltText('logo')

      expect(logo).toBeInTheDocument()
   })
});