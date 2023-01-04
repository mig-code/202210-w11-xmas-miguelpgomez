import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './home.page';

test('renders Home Page', () => {
    render(
        <BrowserRouter>
            <HomePage></HomePage>
        </BrowserRouter>
    );
    const textElement = screen.getByText(/Total Robots/i);
    expect(textElement).toBeInTheDocument();
    const imageElement = screen.getByAltText(/robot_home/i);
    expect(imageElement).toBeInTheDocument();
});
