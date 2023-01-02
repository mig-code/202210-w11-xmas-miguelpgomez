import { RobotRepository } from '../../../core/services/repository';
import { RobotInfo } from '../../../core/types/robots.type';
import { RobotAdd } from '../components/robot.add/robot.add';
import { RobotList } from '../components/robot.list/robot.list';
import { useEffect, useState } from 'react';

export function MainPage() {
    const repo = new RobotRepository();
    const initialRobots = Array<RobotInfo>;

    const [robots, setRobots] = useState<RobotInfo[]>(initialRobots);
    const handleDelete = async (id: string) => {
        console.log(id);
        await repo.delete(id);
        setRobots(robots.filter((robot) => robot.id !== id));
    };
    const handleAdd = async (robot: RobotInfo) => {
        await repo.create(robot);
        setRobots([...robots, robot]);
    };
    useEffect(() => {
        repo.load().then((robots) => setRobots(robots));
    });
    return (
        <div>
            <h1>Main page</h1>
            <RobotAdd handleAdd={handleAdd}></RobotAdd>
            <RobotList handleDelete={handleDelete} robots={robots}></RobotList>
        </div>
    );
}
