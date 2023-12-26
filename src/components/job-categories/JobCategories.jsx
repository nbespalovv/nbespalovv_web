import JobCategoriesTitle from "./JobCategoriesTitle";
import JobState from "../job-list/JobState";

const JobCategories = (props) => (
    <div className={"job-categories"}>
        <JobCategoriesTitle>Categories</JobCategoriesTitle>
        <div className={"job-categories-list"}>
            <JobState state={"Completed"} color={"#4CAF50"} className={"possible-category"}/>
            <JobState state={"Urgent"} color={"#FF5252"} className={"possible-category"}/>
            <JobState state={"Important"} color={"#FFC107"} className={"possible-category"}/>
            <JobState state={"Later"} color={"#9C27B0"} className={"possible-category"}/>
            <JobState state={"To study"} color={"#25A7B8"} className={"possible-category"}/>
        </div>
    </div>
)


export default JobCategories;
