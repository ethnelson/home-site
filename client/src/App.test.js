import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { TestComp } from './App';
import { ProjectList } from './Home/ProjectArchive';
import App from './App';

test('Full app rendering to front page', () => {
  render(<App />, {wrapper: MemoryRouter})
  expect(screen.getByText(/My Name's Ethan/i)).toBeInTheDocument()
})

test('Render app, click on a project', async () => {
  render(<App />, {wrapper: MemoryRouter})
  const user = userEvent.setup()

  await user.click(screen.getByText(/Testing Name/i))
  expect(screen.getByTestId("projectTestPage")).toBeInTheDocument()
})

test('Project listing without items', () => {
  render(<ProjectList />, {wrapper: MemoryRouter})

  expect(screen.getByText(/Dang, looks like I don't/i)).toBeInTheDocument()
})
