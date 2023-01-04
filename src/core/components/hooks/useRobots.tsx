import { useCallback, useMemo, useState } from 'react';
import { RobotRepository } from '../../services/repository';
import { setStorageList } from '../../services/storage';
import { RobotInfo } from '../../models/robots.models';

export function useRobots() {
    const repo = useMemo(() => new RobotRepository(), []);
    const initialRobots = Array<RobotInfo>;

    const [robots, setRobots] = useState<RobotInfo[]>(initialRobots);
    const handleDelete = async (id: string) => {
        console.log(id);
        await repo.delete(id);
        setRobots(
            robots.filter((robot: Partial<RobotInfo>) => robot.id !== id)
        );
        setStorageList('robots', [robots.length - 1]);
    };
    const handleAdd = async (robot: RobotInfo) => {
        await repo.create(robot);
        setRobots([...robots, robot]);
        setStorageList('robots', [robots.length + 1]);
    };
    const handleFavorite = async (robot: Partial<RobotInfo>) => {
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
    return {
        robots,
        handleDelete,
        handleAdd,
        handleFavorite,
        handleLoad,
    };
}
