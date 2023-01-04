import { RobotInfo } from '../../../../core/types/robots.type';
import { RobotItem } from '../robot.item/robot.item';

export function RobotList({
    handleDelete,
    handleFavorite,
    robots,
}: {
    handleDelete: (id: string) => Promise<void>;
    handleFavorite: (robot: Partial<RobotInfo>) => Promise<void>;
    robots: Array<RobotInfo>;
}) {
    return (
        <div className="robot-list">
            <h2>Robots añadidos</h2>
            <ul className="robots-container">
                {robots.map((robot) => (
                    <li className="robot-item" key={robot.id}>
                        <RobotItem
                            handleDelete={handleDelete}
                            handleFavorite={handleFavorite}
                            robot={robot}
                        ></RobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
