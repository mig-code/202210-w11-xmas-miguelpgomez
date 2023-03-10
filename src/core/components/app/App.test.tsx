import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Home Page', () => {
    render(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    );
    const textElement = screen.getByText(/Total Robots/i);
    expect(textElement).toBeInTheDocument();
    const imageElement = screen.getByAltText(/robot_home/i);
    expect(imageElement).toBeInTheDocument();
});
