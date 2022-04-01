import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { TestComp } from './App';
import { ProjectList } from './Home/ProjectArchive';
import App from './App';

test('Full app rendering, to each page', () => {
  render(<App />, {wrapper: MemoryRouter})
  
  expect(screen.getByText(/My Name's Ethan/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Testing Name/i), leftClick)
  expect(screen.getByText(/Testing page/i)).toBeInTheDocument()
})

test('Project listing without items', () => {
  render(<ProjectList />, {wrapper: MemoryRouter})

  expect(screen.getByText(/Dang, looks like I don't/i)).toBeInTheDocument()
})
