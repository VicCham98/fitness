import React from "react";
import Welcome from "../components/Welcome";
import ExerciseList from "../components/ExerciseList";
import AddButton from "../components/AddButton";

const Exercise = ({data}) => (
    <React.Fragment>
        <Welcome
            username="Victor"
        />
        <ExerciseList
            exercises={data}
        />
        <AddButton/>
    </React.Fragment>
);

export default Exercise