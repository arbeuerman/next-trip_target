import {fireEvent, render, screen, act} from '@testing-library/react';
import RouteSelector from './RouteSelector';

describe('Route Selector Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<RouteSelector/>)}).not.toThrowError();
  });

  it('renders header correctly', () => {
    render(<RouteSelector />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Where will you go next?');
  });

  it('renders select correctly', () => {
    render(<RouteSelector />);
    const select = screen.getByRole('combobox'); //https://www.w3.org/TR/html-aria/#docconformance
    expect(select).toBeInTheDocument();
    //check that the first option is correct
    expect(select.options[0]).toHaveTextContent('Select a route')
  });
});

// describe('user interactions', () => {
//   beforeEach(() => {
//     render(<RouteSelector/>);
//   });

//   it('sets select correctly', () => {
//     const select = screen.getByRole('combobox');
//     const loadRoutes = jest.fn();
//     expect(loadRoutes).toHaveBeenCalledTimes(1);
//   })
// })