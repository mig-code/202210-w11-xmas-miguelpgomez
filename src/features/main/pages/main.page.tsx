import { RobotAdd } from "../components/robot.add/robot.add";
import { RobotList } from "../components/robot.list/robot.list";

export function MainPage() {
    return (
        <div>
            <h1>Main page</h1>
            <RobotAdd></RobotAdd>
            <RobotList></RobotList>
        </div>
    );
}
