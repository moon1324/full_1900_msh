import { handleActions } from "redux-actions";

const initialValue = {
    jobs: {
        developer: {
            name: "문승현",
            skills: ["React.js", "Node.js"],
        },
        planner: {
            name: "홍길동",
            skills: ["Excel", "PowerPoint"],
        },
    },
};

const route = handleActions({}, initialValue);

export default route;
