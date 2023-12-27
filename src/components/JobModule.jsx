import JobListTitle from "./job-list-title/JobListTitle";
import JobList from "./job-list/JobList";
import React from "react";

const JobModule = (props) => (
    <div className={"job-module"}>
        <JobListTitle onCreateTaskClick={props.onCreateTaskClick}/>
        <JobList onEditClick={props.onEditClick}/>
    </div>
)

export default JobModule;