import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RobotRepository } from '../../../../core/services/repository/repository';
import { RobotInfo } from '../../models/robots.models';
import { RobotUpdate } from '../../components/robot.update/robot.update';

export function DetailsPage() {
    const { robotId } = useParams();
    const [robot, setRobot] = useState<RobotInfo>();
    const repo = useMemo(() => new RobotRepository(), []);

    const handleLoad = useCallback(async () => {
        if (!robotId) return;
        const robot = await repo.queryId(robotId);
        setRobot(robot);
    }, [repo, robotId]);

    const handleUpdate = async (robot: Partial<RobotInfo>) => {
        if (!robotId) return;
        await repo.update(robot);
        handleLoad();
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <section className="edit-section">
            <div className="robot-item">
                <h3>{robot?.name}</h3>
                <img
                    className={robot?.isFavorite ? 'favourite' : ''}
                    src={`https://robohash.org/${robot?.name}`}
                    alt={robot?.name}
                />

                <p>Velocidad: {robot?.speed}</p>
                <p>Resistencia: {robot?.resistance}</p>
                <p>Usuario: {robot?.user}</p>
                <p>Fecha de Creción {robot?.date}</p>
            </div>
            <RobotUpdate
                handleUpdate={handleUpdate}
                robot={robot}
            ></RobotUpdate>
        </section>
    );
}
