import { Link } from "react-router-dom";
import { RobotInfo } from "../../../../core/types/robots.type";

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
            <button onClick={() => handleDelete(robot.id)}>Borrar</button>

            <button
                className={'button--isFavorite'}
                onClick={() => handleFavorite(robot)}
            >
                {robot.isFavorite
                    ? 'Quitar de favoritos'
                    : 'Añadir a favoritos'}
            </button>
            <Link to={`/details/${robot.id}`}>
                <button>Editar</button>
            </Link>
        </>
    );
}
