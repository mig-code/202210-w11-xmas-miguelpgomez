import { RobotInfo } from "../models/robots.models";

export const robotMock: RobotInfo = {
    "name": "test1",
    "speed": 1,
    "resistance": 0,
    "user": " user 1",
    "id": "123860",
    "date": "2/1/2023",
    "isFavorite": true
}

export const arrayRobotsMock: Array<RobotInfo> = [{
            "name": "test1",
            "speed": 1,
            "resistance": 0,
            "user": " user 1",
            "id": "123860",
            "date": "2/1/2023",
            "isFavorite": true
        },
        {
            "name": "test 2",
            "speed": 8,
            "resistance": 4,
            "user": "user 2",
            "id": "769364",
            "date": "4/1/2023",
            "isFavorite": false
        },
]
