import { fireEvent, render, screen } from '@testing-library/react';

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

describe('select fires on change correctly', () => {
  beforeEach(() => {
    render(<RouteSelector/>);
  });

  it('calls onchange for select correctly', () => {
    const onChangeMock = jest.fn();
    const select = screen.getByRole('combobox');
    select.onchange = onChangeMock;
    fireEvent.change(select);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  })

  //I would want to add some more tests here to ensure the select is working
})