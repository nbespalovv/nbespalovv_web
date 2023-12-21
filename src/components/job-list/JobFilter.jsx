import FilterItem from "./FilterItem";

const JobFilter = (props) => (
    <div className={"job-filter"}>
        <FilterItem>Active</FilterItem>
        <FilterItem isSelected={true}>All</FilterItem>
        <FilterItem>Completed</FilterItem>
    </div>
)

export default JobFilter;