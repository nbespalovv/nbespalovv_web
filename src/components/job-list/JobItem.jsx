import JobMarker from "./JobMarker";
import JobTitle from "./JobTitle";
import JobState from "./JobState";

const JobItem = (props) => (
    <div className={"job-item"}>
        <JobMarker/>
        <JobTitle>{props.children}</JobTitle>
        <JobState state={props.state} color={props.color}/>
    </div>
)

export default JobItem;