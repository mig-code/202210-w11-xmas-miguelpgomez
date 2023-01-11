import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import {
    mockRobot2,
    mockAddRobot,
    mockUpdateRobot,
    mockValidRepoResponse,
} from './mock.testing';

import { RobotRepository } from '../../../core/services/repository/repository';
import { UseRobots, useRobots } from './useRobots';

jest.mock('../../../core/services/repository/repository');
RobotRepository.prototype.load = jest.fn();
RobotRepository.prototype.create = jest.fn();
RobotRepository.prototype.update = jest.fn();
RobotRepository.prototype.delete = jest.fn();

describe(`Given useRobots (custom hook)
            render with a virtual component`, () => {
    let current: UseRobots;
    beforeEach(() => {
        ({
            result: { current },
        } = renderHook(() => {
            return useRobots();
        }));
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);
        test('Then its data should be accessible starting empty', () => {
            expect(current.robots).toEqual([]);
        });
        test('Then its function handleLoad should be add robots to the state', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotRepository.prototype.load).toHaveBeenCalled();
        });
        test('Then its function handleAdd should be used', async () => {
            await act(async () => {
                await current.handleAdd(mockAddRobot);
            });
            expect(RobotRepository.prototype.create).toHaveBeenCalled();
        });

        test('Then its function handleFavoriteshould be used', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotRepository.prototype.load).toHaveBeenCalled();
            await act(async () => {
                current.handleFavorite(mockUpdateRobot);
            });
            expect(RobotRepository.prototype.update).toHaveBeenCalled();
        });

        test('Then its function handleDelete should be used', async () => {
            await act(async () => {
                current.handleLoad();
            });
            expect(RobotRepository.prototype.load).toHaveBeenCalled();
            await act(async () => {
                current.handleDelete(mockRobot2.id);
            });
            expect(RobotRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
