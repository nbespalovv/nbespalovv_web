import FilterItem from "./FilterItem";
import {useState} from "react";

const JobFilter = (props) => {

    const [filterId, setFilterId] = useState(1)

    return (
        <div className={"job-filter"}>
            <FilterItem onClick={() => {
                setFilterId(0)
                return props.onFilterChoosen((job) => job.category.name !== "Completed")
            }} isSelected={filterId === 0}>Active</FilterItem>
            <FilterItem onClick={() => {
                setFilterId(1)
                return props.onFilterChoosen((job) => true)
            }} isSelected={filterId === 1}>All</FilterItem>
            <FilterItem onClick={() => {
                setFilterId(2)
                return props.onFilterChoosen((job) => job.category.name === "Completed")
            }} isSelected={filterId === 2}>Completed</FilterItem>
        </div>
    )
}

export default JobFilter;