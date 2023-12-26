import JobListTitle from "./job-list-title/JobListTitle";
import JobList from "./job-list/JobList";
import React from "react";

const JobModule = (props) => (
    <div className={"job-module"}>
        <JobListTitle onCreateTaskClick={props.onCreateTaskClick}/>
        <JobList items={[
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Urgent",
                "color": "#FF5252",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Important",
                "color": "#FFC107",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Later",
                "color": "#9C27B0",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "To study",
                "color": "#25A7B8",
                "title": "Memorize the fifty states and their capitals"
            }
        ]}/>
    </div>
)

export default JobModule;