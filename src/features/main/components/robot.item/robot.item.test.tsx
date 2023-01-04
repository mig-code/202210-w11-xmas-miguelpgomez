import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Robot } from '../../models/robots.models';

import { RobotItem } from './robot.item';

describe('Given Item component', () => {
    describe('When it has been render', () => {
        const handleDelete = jest.fn();
        const handleFavorite = jest.fn();
        const mockRobot = new Robot('Robot 1', 1, 1, 'User 1');
        test('Then  Robot info should have been render', () => {
            render(
                <BrowserRouter>
                    <RobotItem
                        handleDelete={handleDelete}
                        handleFavorite={handleFavorite}
                        robot={mockRobot}
                    />
                </BrowserRouter>
            );
            const textElement = screen.getByText(/Usuario:/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then buttons should work', () => {
            render(
                <BrowserRouter>
                    <RobotItem
                        handleDelete={handleDelete}
                        handleFavorite={handleFavorite}
                        robot={mockRobot}
                    />
                </BrowserRouter>
            );
            const buttonElement = screen.queryAllByRole('button');
            fireEvent.click(buttonElement[0]);
            fireEvent.click(buttonElement[2]);
            expect(handleDelete).toHaveBeenCalled();
            expect(handleFavorite).toHaveBeenCalled();
        });
    });
});
