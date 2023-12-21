import JobItem from "./JobItem";
import JobFilter from "./JobFilter";

const JobList = (props) => (
    <div className={"job-list"}>
        <div className={"job-list-inner"}>
            {props.items.map((item, i) => {
                return (<JobItem state={item.state} color={item.color}>
                    {item.title}
                </JobItem>)
            })}
            <JobFilter/>
        </div>
    </div>
)

export default JobList;