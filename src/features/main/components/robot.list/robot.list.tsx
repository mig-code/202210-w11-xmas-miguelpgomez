
import { RobotInfo } from '../../../../core/types/robots.type';

export function RobotList({
    handleDelete,
    robots,
}: {
    handleDelete: (id: string) => Promise<void>;
    robots: Array<RobotInfo>;
}) {
   
  

    return (
        <div>
            <h2>Estos son los robots añadidos</h2>
            <ul>
                {robots.map((robot) => (
                    <li key={robot.id}>
                        <h3>{robot.name}</h3>
                        <img
                            src={`https://robohash.org/${robot.name}`}
                            alt={robot.name}
                        />

                        <p>Velocidad: {robot.speed}</p>
                        <p>Resistencia: {robot.resistance}</p>
                        <p>Usuario: {robot.user}</p>
                        <button onClick={() => handleDelete(robot.id)}>
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
