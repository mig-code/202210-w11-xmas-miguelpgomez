import { render, screen } from '@testing-library/react';

import { MainPage } from './main.page';

describe('Given MainPage component', () => {
    describe('When it has been render', () => {
        test('Then Add robot should have been render', () => {
            render(<MainPage />);
            const textElement = screen.getByText(/Añadir Robot/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then Total robots should have been render', () => {
            render(<MainPage />);
            const textElement = screen.getByText(/Robots añadidos/i);
            expect(textElement).toBeInTheDocument();
        });
    });
});
