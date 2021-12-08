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

   //TODO: Implement test for hidden sidebar

   // test('should be hidden when screen size is xs', () => {
   //    Object.defineProperty(window, 'innerWidth', {
   //       writable: true,
   //       configurable: true,
   //       value: 321,
   //    });
   //    window.dispatchEvent(new Event('resize'));
   //    render(<SideBar/>)
   //    const sideBar = screen.getByTestId("sideBar")
   //
   //    expect(window.innerWidth).toBe(321);
   //    generatePluginCss()
   // })
});