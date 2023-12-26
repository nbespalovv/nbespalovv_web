import JobItem from "./JobItem";
import JobFilter from "./JobFilter";
import {useEffect, useState} from "react";

const JobList = (props) => {

    const [jobs, setJobs] = useState([...(JSON.parse(window.localStorage.getItem("jobs")) || [])])

    useEffect(() => {
        window.onstorage = () => {
            setJobs(JSON.parse(window.localStorage.getItem("jobs")))
        }
    }, []);


    return (
        <div className={"job-list"}>
            <div className={"job-list-inner"}>
                {jobs.map((item, i) => {
                    return (<JobItem state={item.category.name} color={item.category.color}>
                        {item.description}
                    </JobItem>)
                })}
                <JobFilter/>
            </div>
        </div>
    )
}
export default JobList;