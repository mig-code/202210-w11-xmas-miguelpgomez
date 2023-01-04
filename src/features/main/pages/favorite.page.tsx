import { RobotRepository } from '../../../core/services/repository';
import { RobotInfo } from '../../../core/types/robots.type';

import { RobotList } from '../components/robot.list/robot.list';
import { useEffect, useMemo, useState } from 'react';

export function FavoritePage() {
    const repo = useMemo(() => new RobotRepository(), []);
    const initialRobots = Array<RobotInfo>;

    const [robots, setRobots] = useState<RobotInfo[]>(initialRobots);
    const handleDelete = async (id: string) => {
        console.log(id);
        await repo.delete(id);
        setRobots(robots.filter((robot) => robot.id !== id));
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
    useEffect(() => {
        repo.load().then((robots) => setRobots(robots));
        console.log('useEffect');
    }, [repo]);
    return (
        <div>
            <RobotList
                handleDelete={handleDelete}
                handleFavorite={handleFavorite}
                robots={robots}
            ></RobotList>
        </div>
    );
}
