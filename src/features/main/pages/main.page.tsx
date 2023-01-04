import { RobotAdd } from '../components/robot.add/robot.add';
import { RobotList } from '../components/robot.list/robot.list';
import { useEffect } from 'react';
import { useRobots } from '../../../core/components/hooks/useRobots';

export function MainPage() {
    const { robots, handleDelete, handleAdd, handleFavorite, handleLoad } =
        useRobots();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <section className="main-page">
            <RobotAdd handleAdd={handleAdd}></RobotAdd>
            <RobotList
                handleDelete={handleDelete}
                handleFavorite={handleFavorite}
                robots={robots}
            ></RobotList>
        </section>
    );
}
