import { render } from '@testing-library/react';

import GradientBackground from './GradientBackground';

describe('GradientBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GradientBackground />);
    expect(baseElement).toBeTruthy();
  });
});
