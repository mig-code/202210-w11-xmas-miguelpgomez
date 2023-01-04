import { RobotRepository } from '../../../core/services/repository';
import { RobotInfo } from '../../../core/types/robots.type';
import { RobotAdd } from '../components/robot.add/robot.add';
import { RobotList } from '../components/robot.list/robot.list';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function MainPage() {
    const repo = useMemo(() => new RobotRepository(), []);
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
    const handleFavorite = async (robot: Partial<RobotInfo>) => {
        console.log(robot);
        robot.isFavorite = !robot.isFavorite;
        await repo.update(robot);
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
    };
    const handleLoad = useCallback(async () => {
        const robots = await repo.load();
        setRobots(robots);
    }, [repo]);
    useEffect(() => {
        handleLoad();
        console.log('useEffect');
    }, [handleLoad]);
    return (
        <div>
            <RobotAdd handleAdd={handleAdd}></RobotAdd>
            <RobotList
                handleDelete={handleDelete}
                handleFavorite={handleFavorite}
                robots={robots}
            ></RobotList>
        </div>
    );
}
