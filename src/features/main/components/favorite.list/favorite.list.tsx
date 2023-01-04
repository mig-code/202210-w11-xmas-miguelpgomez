import { RobotInfo } from '../../models/robots.models';
import { RobotItem } from '../robot.item/robot.item';

export function FavoriteList({
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
            <h2>Robots Favoritos</h2>
            <ul className="robots-container">
                {robots.map(
                    (robot) =>
                        robot.isFavorite && (
                            <li className="robot-item" key={robot.id}>
                                <RobotItem
                                    handleDelete={handleDelete}
                                    handleFavorite={handleFavorite}
                                    robot={robot}
                                ></RobotItem>
                            </li>
                        )
                )}
            </ul>
        </div>
    );
}
