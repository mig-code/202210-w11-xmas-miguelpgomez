import { Link } from 'react-router-dom';
import { RobotInfo } from '../../models/robots.models';

export function RobotItem({
    handleDelete,
    handleFavorite,
    robot,
}: {
    handleDelete: (id: string) => Promise<void>;
    handleFavorite: (robot: Partial<RobotInfo>) => Promise<void>;
    robot: RobotInfo;
}) {
    return (
        <>
            <h3>{robot.name}</h3>
            <img
                className={robot.isFavorite ? 'favourite' : ''}
                src={`https://robohash.org/${robot.name}`}
                alt={robot.name}
            />

            <p>Velocidad: {robot.speed}</p>
            <p>Resistencia: {robot.resistance}</p>
            <p>Usuario: {robot.user}</p>
            <div className="buttons-container">
                <button
                    className="button--isfavorite"
                    onClick={() => handleFavorite(robot)}
                >
                    {robot.isFavorite
                        ? 'Quitar de favoritos'
                        : 'Añadir a favoritos'}
                </button>
                <Link to={`/details/${robot.id}`}>
                    <button>Editar</button>
                </Link>
                <button
                    className="button--delete"
                    onClick={() => handleDelete(robot.id)}
                >
                    Borrar
                </button>
            </div>
        </>
    );
}
