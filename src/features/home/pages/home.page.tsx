import { getStorageList } from '../../../core/services/storage';

export function HomePage() {
    const totalRobots = getStorageList('robots');
    return (
        <div>
            <h1>Total Robots {totalRobots ? `${totalRobots}` : '0'}</h1>
            <img src="/assets/robot_home.png" alt="robot_home" />
        </div>
    );
}
