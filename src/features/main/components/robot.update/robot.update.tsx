import { SyntheticEvent, useEffect, useState } from 'react';
import {  RobotInfo } from '../../../../core/types/robots.type';

export function RobotUpdate({
    handleUpdate,
    robot,
}: {
    handleUpdate: (robot: RobotInfo) => Promise<void>;
    robot: RobotInfo | undefined;
}) {
    const initialRobotInfo: Partial<RobotInfo> = {
        name: robot?.name,
        speed: robot?.speed,
        resistance: robot?.resistance,
        user: robot?.user,
    };

    const [robotFormData, setRobotFormData] = useState(initialRobotInfo);
   

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setRobotFormData({ ...robotFormData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleUpdate(robotFormData as RobotInfo);
        setRobotFormData(initialRobotInfo);
    };
    useEffect(() => {
        const robotInfo = {
            name: robot?.name,
            speed: robot?.speed,
            resistance: robot?.resistance,
            user: robot?.user,
            id: robot?.id,
        };
        setRobotFormData(robotInfo);
    }, [robot]);
    return (
        <section className="edit-robots-container">
            <h3>Editar Robot</h3>
            <form className="add-robot" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre del robot"
                        value={robotFormData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="speed">Velocidad</label>
                    <input
                        type="number"
                        name="speed"
                        id="speed"
                        value={robotFormData.speed}
                        onInput={handleInput}
                        placeholder="Velocidad del robot"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="resistance">Resistencia</label>
                    <input
                        type="number"
                        name="resistance"
                        id="resistance"
                        value={robotFormData.resistance}
                        onInput={handleInput}
                        placeholder="Resistencia del robot"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user">User</label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        value={robotFormData.user}
                        onInput={handleInput}
                        placeholder="Nombre del usuario"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Actualizar</button>
                </div>
            </form>
        </section>
    );
}
