import {fireEvent, render, screen} from '@testing-library/react';
import DirectionSelector from './DirectionSelector';

describe('Direction Selector Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<DirectionSelector/>)}).not.toThrowError();
  });

  it('renders select correctly', () => {
    render(<DirectionSelector />);
    const select = screen.getByRole('combobox'); //https://www.w3.org/TR/html-aria/#docconformance
    expect(select).toBeInTheDocument();
    //check that the first option is correct
    expect(select.options[0]).toHaveTextContent('Select a direction')
  });

})

describe('select fires on change correctly', () => {
  beforeEach(() => {
    render(<DirectionSelector/>);
  });

  it('calls onchange for select correctly', () => {
    const onChangeMock = jest.fn();
    const eventMock = {
      preventDefault() {},
      target: {value: ''}
    }
    const select = screen.getByRole('combobox');
    select.onchange = onChangeMock;
    fireEvent.change(select, {target: {value: 'north'}});
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    // expect(onChangeMock).toHaveBeenCalledWith('north');
  })
})