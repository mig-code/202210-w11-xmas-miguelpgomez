import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { robotMock } from '../../mocks/mock.robot';

import { RobotInfo } from '../../models/robots.models';
import { RobotUpdate } from './robot.update';


describe('Given Robot Update component', () => {
    describe('When it has been render', () => {
        const handleUpdate = jest.fn();
        const robot = robotMock
        test('Then Robot Update heading should appear', () => {
            render(
                <BrowserRouter>
                    <RobotUpdate  handleUpdate={handleUpdate}robot={robot} />
                </BrowserRouter>
            );
            const heading = screen.getByRole('heading', {
                name: /Editar Robot/i,
            });

            expect(heading).toBeInTheDocument();
        });

        test('Then we should write in inputs and, check the robot has been loaded on the input and send', () => {
            const robotData: Partial<RobotInfo> = {
                name: 'Robot 1',
                user: 'User 1',
                speed: 1,
                resistance: 1,
            };
            render(
                <BrowserRouter>
                    <RobotUpdate handleUpdate={handleUpdate} robot={robot} />
                </BrowserRouter>
            );
            const inputElement = screen.queryAllByRole('textbox');
            expect(inputElement[0]).toHaveValue(robotMock.name);
            userEvent.type(inputElement[0], robotData.name as string);
            expect(inputElement[0]).toHaveValue(robotMock.name+ robotData.name ) ;
            
            expect(inputElement[1]).toHaveValue(robotMock.user);
            userEvent.type(inputElement[1], robotData.user as string);
            expect(inputElement[1]).toHaveValue(robotMock.user+ robotData.user);

            const submitButton = screen.queryAllByRole('button');
            fireEvent.click(submitButton[0]);
            expect(handleUpdate).toHaveBeenCalled();
        });
    });
});
