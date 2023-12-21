import JobCategoriesTitle from "./JobCategoriesTitle";
import JobState from "../job-list/JobState";

const JobCategories = (props) => (
    <div className={"job-categories"}>
        <JobCategoriesTitle>Categories</JobCategoriesTitle>
        <div className={"job-categories-list"}>
            <JobState state={"Ready"} color={"red"} className={"possible-category"}/>
            <JobState state={"Ready"} color={"red"} className={"possible-category"}/>
            <JobState state={"Ready"} color={"red"} className={"possible-category"}/>
        </div>
    </div>
)


export default JobCategories;
