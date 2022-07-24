import Nav from './Nav';
import { render, screen } from '@testing-library/react';


describe('Nav', () => {
  test('render Elige una ciudad', () => {
    //given
    //when
    render(<Nav />);
    //then
    expect(screen.getByText("Elige una ciudad:")).toBeInTheDocument();
  });

});