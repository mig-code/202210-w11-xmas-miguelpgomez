import { render, screen } from '@testing-library/react';
import { DetailsPage } from './details.page';



describe('Given Details Page component', () => {
    describe('When it has been render', () => {
        test('Then  Robot info should have been render', () => {
            render(<DetailsPage />);
            const textElement = screen.getByText(/Velocidad:/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then an edit form should have been render', () => {
            render(<DetailsPage />);
            const textElement = screen.getByText(/Editar Robot/i);
            expect(textElement).toBeInTheDocument();
        });
    });
});
