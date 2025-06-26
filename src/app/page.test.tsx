import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Page from './page';

describe('Page component', () => {
  test('renders the heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { name: /hello, next\.js!/i });
    expect(heading).toBeInTheDocument();
  });
});
