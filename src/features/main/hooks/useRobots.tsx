import { useCallback, useMemo, useState } from 'react';
import { RobotRepository } from '../../../core/services/repository/repository';
import { setStorageList } from '../../../core/services/storage/storage';
import { RobotInfo } from '../models/robots.models';

export type UseRobots = {
    robots: Array<RobotInfo>;
    handleDelete: (id: RobotInfo['id']) => Promise<void>;
    handleAdd: (robotData: RobotInfo) => Promise<void>;
    handleFavorite: (robot: Partial<RobotInfo>) => Promise<void>;
    handleLoad: () => Promise<void>;
};

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotRepository(), []);
    const initialRobots = Array<RobotInfo>;

    const [robots, setRobots] = useState<RobotInfo[]>(initialRobots);
    const handleDelete = async (id: string) => {
        await repo.delete(id);
        setRobots(
            // robots.filter((robot: Partial<RobotInfo>) => robot.id !== id)
            (prev) =>
                prev.filter((robot: Partial<RobotInfo>) => robot.id !== id)
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
            (prev) =>
                prev.map((item) =>
                    item.id === robot.id ? { ...item, ...robot } : item
                )

            // OLD CODE

            // robots.map((item) =>
            //     item.id === robot.id ? { ...item, ...robot } : item
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
