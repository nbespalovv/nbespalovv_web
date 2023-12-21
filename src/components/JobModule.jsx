import JobListTitle from "./job-list-title/JobListTitle";
import JobList from "./job-list/JobList";
import React from "react";

const JobModule = (props) => (
    <div className={"job-module"}>
        <JobListTitle/>
        <JobList items={[
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            },
            {
                "state": "Completed",
                "color": "#4CAF50",
                "title": "Memorize the fifty states and their capitals"
            }
        ]}/>
    </div>
)

export default JobModule;