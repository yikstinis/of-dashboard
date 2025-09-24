import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { PanelHeader } from './panel-header';

describe('@/components/panel-header', () => {
  it('renders element with provided title', () => {
    const testId = faker.string.uuid();
    const title = faker.lorem.words();
    render(<PanelHeader testId={testId} title={title} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveTextContent(title);
  });

  it('renders provided title inside h3 tag', () => {
    const testId = faker.string.uuid();
    const title = faker.lorem.words();
    render(<PanelHeader testId={testId} title={title} />);
    expect(screen.getByText(title).tagName).toBe('H3');
  });

  // TODO: Check rendered styles on the element.
});
