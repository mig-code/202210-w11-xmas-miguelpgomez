export type RobotInfo = {
    id: string;
    name: string;
    speed: number;
    resistance: number;
    user: string;
    date: string;
    imageUrl: string;
    isFavorite: boolean;
};

export class Robot implements RobotInfo {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    constructor(
        public name: string,
        public speed: number,
        public resistance: number,
        public user: string,
        public date: string,
        public imageUrl: string,
        public isFavorite: boolean
    ) {
        this.id = Robot.generateId();
        this.isFavorite = false;
        this.date = new Date().toLocaleDateString();
    }
}
