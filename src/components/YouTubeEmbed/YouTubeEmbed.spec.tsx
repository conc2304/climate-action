import { render } from '@testing-library/react';

import YouTubeEmbed from './YouTubeEmbed';

describe('YouTubeEmbed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YouTubeEmbed />);
    expect(baseElement).toBeTruthy();
  });
});
