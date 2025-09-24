import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Panel } from './panel';

describe('@/components/panel', () => {
  it('renders element with provided children', () => {
    const testId = faker.string.uuid();
    const text = faker.lorem.words();
    render(<Panel testId={testId}>{text}</Panel>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveTextContent(text);
  });

  it('renders element with provided flex grow style', () => {
    const testId = faker.string.uuid();
    const flexGrow = faker.number.int({
      min: 0,
      max: 5,
    });
    render(<Panel testId={testId} flexGrow={flexGrow} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveStyle({ flexGrow });
  });

  // TODO: Check other rendered styles on the element.
  // TODO: Check provided multiple children rendering.
});
