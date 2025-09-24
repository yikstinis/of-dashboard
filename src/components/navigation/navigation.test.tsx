import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Navigation } from './navigation';

describe('@/components/navigation', () => {
  it('renders element with correct tag name', () => {
    const testId = faker.string.uuid();
    render(<Navigation testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).tagName).toBe('NAV');
  });

  // TODO: Check rendered styles on the element.
  // TODO: Check provided children rendering.
  // TODO: Check inner SVG element presence.
});
