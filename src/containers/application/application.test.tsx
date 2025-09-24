import { render } from '@testing-library/react';
import { Application } from './application';

describe('@/containers/application', () => {
  it('renders correct tags structure', () => {
    const { container } = render(<Application />);
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  // TODO: Maybe add some extra layout checks later.
});
