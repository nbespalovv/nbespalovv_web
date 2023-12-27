import JobCreateModule from "./JobCreateModule";
import React from "react";

const NewJobDialog = (props) => {

    if(!props.isOpen)
        return

    return (
        <div className={"dialog"}>
            <JobCreateModule onClose={props.onClose} editMode={props.editMode}/>
        </div>
    )
}

export default NewJobDialog;