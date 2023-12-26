import PrimaryButton from "./PrimaryButton";

const JobListTitle = (props) => (
    <div className={"job-list-title"}>
        <div className={"job-list-title-inner"}>
            <span>5 tasks</span>
            <PrimaryButton onClick={props.onCreateTaskClick}>Add new task</PrimaryButton>
            <span>Clear completed</span>
        </div>
    </div>
)

export default JobListTitle;