import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Logotype } from './logotype';

describe('@/components/logotype', () => {
  it('renders element with correct tag name and href attribute', () => {
    const testId = faker.string.uuid();
    const href = faker.internet.url();
    render(
      <BrowserRouter>
        <Logotype testId={testId} href={href} />
      </BrowserRouter>
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).tagName).toBe('A');
    expect(screen.getByTestId(testId).getAttribute('href')).toBe(href);
  });

  // TODO: Check rendered styles on the element.
  // TODO: Check inner SVG element presence.
});
