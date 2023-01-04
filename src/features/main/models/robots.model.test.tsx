
import { Robot } from './robots.models';

describe('Given "Robot" data model', () => {
    test('Then it should instantiate a ROBOT', () => {
        const mockRobot = new Robot('Robot 1', 1, 1, 'User 1');
        expect(mockRobot).toBeInstanceOf(Robot);
        expect(mockRobot).toHaveProperty('name', mockRobot.name);
        expect(mockRobot).toHaveProperty('speed', mockRobot.speed);
        expect(mockRobot).toHaveProperty('resistance', mockRobot.resistance);
        expect(mockRobot).toHaveProperty('user', mockRobot.user);
        expect(mockRobot).toHaveProperty('id', mockRobot.id);
        expect(mockRobot).toHaveProperty('date', mockRobot.date);
    });
});
