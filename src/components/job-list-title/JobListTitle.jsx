import PrimaryButton from "./PrimaryButton";
import {useEffect, useState} from "react";

const JobListTitle = (props) => {

    const [jobs, setJobs] = useState([...(JSON.parse(window.localStorage.getItem("jobs")) || [])])

    useEffect(() => {
        window.addEventListener("storage", () => {
            setJobs(JSON.parse(window.localStorage.getItem("jobs")))
        })
    }, []);

    const clearCompletedTasks = () => {
        if(JSON.parse(localStorage.getItem("jobs")) == null) {
            return
        }
        let jobs = [...JSON.parse(localStorage.getItem("jobs"))]
        jobs = jobs.filter((job) => job.category.name !== "Completed")
        localStorage.setItem("jobs", JSON.stringify(jobs))
        window.dispatchEvent( new Event('storage') )
    }

    return (
        <div className={"job-list-title"}>
            <div className={"job-list-title-inner"}>
                <span>{jobs.length} tasks</span>
                <PrimaryButton onClick={props.onCreateTaskClick}>Add new task</PrimaryButton>
                <span onClick={clearCompletedTasks}>Clear completed</span>
            </div>
        </div>
    )
}

export default JobListTitle;