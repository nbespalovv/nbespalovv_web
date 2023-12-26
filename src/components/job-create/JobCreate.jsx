import JobCategoriesTitle from "../job-categories/JobCategoriesTitle";
import JobCreateTitle from "./JobCreateTitle";
import JobInput from "./JobInput";

const JobCreate = (props) => (
    <div className={"job-create-task-title-wrapper"}>
        <JobCreateTitle>CREATE TASK</JobCreateTitle>
        <JobInput/>
    </div>
)

export default JobCreate;