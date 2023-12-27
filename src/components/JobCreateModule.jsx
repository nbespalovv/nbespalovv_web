import JobCreate from "./job-create/JobCreate";

const JobCreateModule = (props) => (
    <div className={"job-create-task-module"}>
        <JobCreate onClose={props.onClose} editMode={props.editMode}/>
    </div>
)

export default JobCreateModule;