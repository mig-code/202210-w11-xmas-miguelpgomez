import { useEffect, useState } from "react";
import { RobotInfo } from "../../../../core/types/robots.type";

export function RobotList() {
const [robots, setRobots] = useState<RobotInfo[]>([]);
useEffect(() => {
    fetch('http://localhost:3001/robots')
        .then((response) => response.json())
        .then((data) => setRobots(data));
}, []);


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
                    </li>
                ))}
            </ul>
        </div>
    );
}
