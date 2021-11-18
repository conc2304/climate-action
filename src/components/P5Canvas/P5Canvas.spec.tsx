import { render } from '@testing-library/react';

import P5Canvas from './P5Canvas';

describe('P5Canvas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<P5Canvas />);
    expect(baseElement).toBeTruthy();
  });
});
