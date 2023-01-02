import { SyntheticEvent, useState } from 'react';
import { Robot, RobotInfo } from '../../../../core/types/robots.type';

export function RobotAdd( 
    { handleAdd }: { handleAdd: (robot: RobotInfo) => Promise<void> }
) {
    const initialRobotInfo: Partial<RobotInfo> = {
        name: '',
        speed: 0,
        resistance: 0,
        user: '',
    };

    const [robotFormData, setRobotFormData] = useState(initialRobotInfo);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setRobotFormData({ ...robotFormData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log('Robot añadido');
        console.log(robotFormData);
        handleAdd(
            new Robot(
                robotFormData.name as string,
                robotFormData.speed as number,
                robotFormData.resistance as number,
                robotFormData.user as string
            )
        );

        setRobotFormData(initialRobotInfo);
    };
    return (
        <section>
            <h3>Añadir Robot</h3>
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
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </section>
    );
}
