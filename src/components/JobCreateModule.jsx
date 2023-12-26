import JobCreate from "./job-create/JobCreate";

const JobCreateModule = (props) => (
    <div className={"job-create-task-module"}>
        <JobCreate onClose={props.onClose}/>
    </div>
)

export default JobCreateModule;