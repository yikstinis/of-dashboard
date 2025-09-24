import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Header } from './header';

describe('@/components/header', () => {
  it('renders element with correct tag name', () => {
    const testId = faker.string.uuid();
    render(<Header testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).tagName).toBe('HEADER');
  });

  it('renders provided text children', () => {
    const testId = faker.string.uuid();
    const text = faker.lorem.words();
    render(<Header testId={testId}>{text}</Header>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  // TODO: Check rendered styles on the element.
  // TODO: Check multiple children nodes.
});
