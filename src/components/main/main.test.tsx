import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Main } from './main';

describe('@/components/main', () => {
  it('renders element with correct tag name', () => {
    const testId = faker.string.uuid();
    render(<Main testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).tagName).toBe('MAIN');
  });

  // TODO: Check rendered styles on the element.
  // TODO: Check provided children rendering.
});
