import { getStorageList } from '../../../core/services/storage/storage';

export function HomePage() {
    const totalRobots = getStorageList('robots');

    return (
        <section className="home-container">
            <p>
                {totalRobots.length === 0
                    ? 'No hay robots en la base de datos'
                    : `Hay ${totalRobots} robots en la base de datos`}
            </p>
            <img src="/assets/robot_home.png" alt="robot_home" />
        </section>
    );
}
