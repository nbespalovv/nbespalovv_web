import JobItem from "./JobItem";
import JobFilter from "./JobFilter";
import {useEffect, useState} from "react";

const JobList = (props) => {

    const [jobs, setJobs] = useState([...(JSON.parse(window.localStorage.getItem("jobs")) || [])])
    const [fullJobs, setFullJobs] = useState([...(JSON.parse(window.localStorage.getItem("jobs")) || [])])

    const onFilterChanged = (predicate) => {
        setJobs(fullJobs.filter(predicate))
    }

    const deleteJob = (jobId) => {
        let newJobList = fullJobs
        newJobList.splice(jobId, 1)
        localStorage.setItem("jobs", JSON.stringify(newJobList))
        window.dispatchEvent(new Event("storage"))
    }

    useEffect(() => {
        window.addEventListener("storage", () => {
            setJobs(JSON.parse(window.localStorage.getItem("jobs")))
            setFullJobs(JSON.parse(window.localStorage.getItem("jobs")))
        })
    }, []);


    return (
        <div className={"job-list"}>
            <div className={"job-list-inner"}>
                {jobs.map((item, i) => {
                    return (<JobItem className={`job-item-list-${i}`} state={item.category.name} color={item.category.color} onDeleteJob={() => deleteJob(i)}>
                        {item.description}
                    </JobItem>)
                })}
                <JobFilter onFilterChoosen={(pred) => onFilterChanged(pred)}/>
            </div>
        </div>
    )
}
export default JobList;