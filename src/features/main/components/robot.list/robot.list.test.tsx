import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { arrayRobotsMock } from '../../mocks/mock.robot';
import { RobotList } from './robot.list';



describe('Given Favorite List component', () => {
    describe('When it has been render', () => {
        const handleDelete = jest.fn();
        const handleFavorite = jest.fn();
        const mockRobots = arrayRobotsMock;
        test('Then Robot list heading should appear', () => {
            render(
                <BrowserRouter>
                    <RobotList
                        handleDelete={handleDelete}
                        handleFavorite={handleFavorite}
                        robots={mockRobots}
                    />
                </BrowserRouter>
            );
            const heading = screen.getByRole('heading', {
                name: /Robots añadidos/i,
            });

            expect(heading).toBeInTheDocument();
        });
        test('Then buttons should work', () => {
            render(
                <BrowserRouter>
                    <RobotList
                        handleDelete={handleDelete}
                        handleFavorite={handleFavorite}
                        robots={mockRobots}
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
