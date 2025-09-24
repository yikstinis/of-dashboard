import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { NavigationLink } from './navigation-link';

describe('@/components/navigation-link', () => {
  it('renders element with correct tag name, href and label', () => {
    const testId = faker.string.uuid();
    const label = faker.lorem.word();
    const href = faker.internet.url();
    render(
      <BrowserRouter>
        <NavigationLink testId={testId} label={label} href={href} />
      </BrowserRouter>
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).tagName).toBe('A');
    expect(screen.getByTestId(testId)).toHaveTextContent(label);
  });

  // TODO: Check rendered styles on the element.
  // TODO: Check provided children rendering.
  // TODO: Check provided children cause dropdown icon to render also.
});
