import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { RobotInfo } from '../../models/robots.models';
import { RobotAdd } from './robot.add';

describe('Given Robot Add component', () => {
    describe('When it has been render', () => {
        const handleAdd = jest.fn();
        test('Then Robot Add heading should appear', () => {
            render(
                <BrowserRouter>
                    <RobotAdd handleAdd={handleAdd} />
                </BrowserRouter>
            );
            const heading = screen.getByRole('heading', {
                name: /Añadir Robot/i,
            });

            expect(heading).toBeInTheDocument();
        });

        test('Then we should write in inputs and submit', () => {
            const robotData: Partial<RobotInfo> = {
                name: 'Robot 1',
                user: 'User 1',
                speed: 1,
                resistance: 1,
            };
            render(
                <BrowserRouter>
                    <RobotAdd handleAdd={handleAdd} />
                </BrowserRouter>
            );
            const inputElement = screen.queryAllByRole('textbox');
            userEvent.type(inputElement[0], robotData.name as string);
            expect(inputElement[0]).toHaveValue(robotData.name);
            userEvent.type(inputElement[1], robotData.user as string);
            expect(inputElement[1]).toHaveValue(robotData.user);

            const submitButton = screen.queryAllByRole('button');
            fireEvent.click(submitButton[0]);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
