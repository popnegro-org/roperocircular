import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Catalog from './Catalog';

describe('Catalog', () => {
  it('does not display demo garments when the real inventory is empty', () => {
    render(<Catalog />);
    expect(screen.getByRole('heading', { name: 'Estamos preparando el catálogo' })).toBeInTheDocument();
    expect(screen.getByText('0 prendas disponibles.')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
