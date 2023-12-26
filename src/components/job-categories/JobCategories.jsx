import JobCategoriesTitle from "./JobCategoriesTitle";
import JobState from "../job-list/JobState";
import Category from "../../types/Category";

const JobCategories = (props) => (
    <div className={"job-categories"}>
        <JobCategoriesTitle>Categories</JobCategoriesTitle>
        <div className={"job-categories-list"}>
            {
                Category.defaultCategories.map((category, i) =>
                    <JobState state={category.name} color={category.color} className={"possible-category"}/>
                )
            }
        </div>
    </div>
)


export default JobCategories;
