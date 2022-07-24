import Header from './Header';
import { render, screen } from '@testing-library/react';


describe('header', () => {
  test('render Elige una ciudad', () => {
    //given
    //when
    render(<Header />);
    //then
    expect(screen.getByText("Weather - World - API")).toBeInTheDocument();
  });

});