import JobMarker from "./JobMarker";
import JobTitle from "./JobTitle";
import JobState from "./JobState";
import JobDelete from "./JobDelete";

const JobItem = (props) => (
    <div className={"job-item " + props.className}>
        <JobMarker/>
        <JobTitle>{props.children}</JobTitle>
        <JobState state={props.state} color={props.color} onClick={props.onEditJob}/>
        <JobDelete onClick={props.onDeleteJob}/>
    </div>
)

export default JobItem;