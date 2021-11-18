import { render } from '@testing-library/react';

import VennDiagramForm from './VennDiagramForm';

describe('VennDiagramForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VennDiagramForm />);
    expect(baseElement).toBeTruthy();
  });
});
