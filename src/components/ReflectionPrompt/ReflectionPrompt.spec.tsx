import { render } from '@testing-library/react';

import ReflectionPrompt from './ReflectionPrompt';

describe('ReflectionPrompt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReflectionPrompt />);
    expect(baseElement).toBeTruthy();
  });
});
