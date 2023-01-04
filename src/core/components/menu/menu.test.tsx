import React from 'react';
import { render, screen } from '@testing-library/react';

import { Menu } from './menu';
import { BrowserRouter } from 'react-router-dom';

describe('Given Menu component', () => {
    test('renders Menu', () => {
        render(
            <BrowserRouter>
                <Menu></Menu>
            </BrowserRouter>
        );
        const textElement = screen.getByText(/Inicio/i);
        expect(textElement).toBeInTheDocument();
        const textElement2 = screen.getByText(/Collección/i);
        expect(textElement2).toBeInTheDocument();
        const textElement3 = screen.getByText(/Favoritos/i);
        expect(textElement3).toBeInTheDocument();
    });
});
