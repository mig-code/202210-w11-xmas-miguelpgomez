import { Robot, RobotInfo } from '../../../features/main/models/robots.models';

import { RobotRepository } from './repository';

describe('Given Repo', () => {
    const mockRobots = [new Robot('Robot 1', 1, 1, 'User 1'), new Robot('Robot 2', 2, 2, 'User 2')];
    const repo = new RobotRepository

    beforeEach(() => {
        // mocks de fetch
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockRobots),
        });
    });

    test('Then we can instantiate it', () => {
        expect(repo).toBeInstanceOf(RobotRepository);
    });

    describe('When we use load method', () => {
        test('Then we received the tasks contents in the repo', async () => {
            const data = await repo.load();
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockRobots);
        });
        test('Then if there are NO DATA, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.load();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use query method', () => {
        const id = mockRobots[0].id;
        test('Then, if the id is VALID, we received the note searched in the repo', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRobots[0]),
            });
            const data = await repo.queryId(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockRobots[0]);
        });
        test('Then, if there are NOT id, we received a rejected promise', async () => {
            await expect(async () => {
                await repo.queryId('');
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });

        test('Then, if the id is NOT VALID, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Not Found',
                json: jest.fn().mockRejectedValue(new Error()),
            });

            await expect(async () => {
                await repo.queryId('23');
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use create method', () => {
        test(`Then if the data are VALID, we received the task 
            created in the repo with its own new id`, async () => {
            const mockNewTaskPayload: Partial<RobotInfo> = {
                name: 'Robot 3',
                user: 'User 3',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockNewTaskPayload),
            });

            const data = await repo.create(mockNewTaskPayload);
            expect(data).toHaveProperty('name', mockNewTaskPayload.name);
            expect(data).toHaveProperty('user', mockNewTaskPayload.user);
        });
        test(`Then if the data are NOT VALID, we received a rejected promise`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });

            await expect(async () => {
                await repo.create({});
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use update method', () => {
        test(`Then if the ID are VALID, we received the task 
            update in the repo`, async () => {
            const updatePayload: Partial<RobotInfo> = {
                id: mockRobots[0].id,
                name: 'User 5',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(updatePayload),
            });
            const data = await repo.update(updatePayload);
            expect(data).toHaveProperty('name', updatePayload.name);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.update({});
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            const updatePayload: Partial<RobotInfo> = {
                id: 'bad',
                name: 'User 5',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.update(updatePayload);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use delete method', () => {
        test(`Then if the ID are VALID, we received the ID 
            of the task delete in the repo`, async () => {
            const id = mockRobots[0].id;
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(id),
            });
            const data = await repo.delete(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toBe(id);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.delete('');
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.delete('bad');
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
