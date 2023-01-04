import { render, screen } from '@testing-library/react';
import { FavoritePage } from './favorite.page';
describe('Given Favorite Page component', () => {
    describe('When it has been render', () => {
        test('Then  Favorite List should have been render', () => {
            render(<FavoritePage />);
            const textElement = screen.getByText(/Robots Favoritos/i);
            expect(textElement).toBeInTheDocument();
        });
    });
});
