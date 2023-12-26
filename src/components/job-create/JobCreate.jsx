import JobCreateTitle from "./JobCreateTitle";
import JobInput from "./JobInput";
import JobCategoriesTitle from "../job-categories/JobCategoriesTitle";
import JobState from "../job-list/JobState";
import SecondaryButton from "./SecondaryButton";
import {useState} from "react";
import Category from "../../types/Category";
import Job from "../../types/Job";

const JobCreate = (props) => {

    const [description, setDescription] = useState("")

    const [selectedCategoryIndex, selectCategoryIndex] = useState(-1)

    const onJobCreateClicked = () => {
        if (selectedCategoryIndex === -1) {
            alert("You have not selected category")
            return
        }
        let job = new Job(description, Category.defaultCategories.find((_, i) => i === selectedCategoryIndex))
        if (localStorage.getItem("jobs") == null) {
            localStorage.setItem("jobs", "[]")
        }
        let jobs = [...JSON.parse(localStorage.getItem("jobs"))]
        jobs.push(job)
        localStorage.setItem("jobs", JSON.stringify(jobs))
        props.onClose()
        window.dispatchEvent( new Event('storage') )
    }

    const onCategorySelected = (index) => {
        selectCategoryIndex(index)
        for (let element of document.getElementsByClassName("new-job-category")) {
            element.style.border = "none"
        }
        document.getElementById(`new-job-category-${index}`).style.border = "3px solid white"
    }



    return (
        <div className={"job-create-task-wrapper"}>
            <JobCreateTitle>CREATE TASK</JobCreateTitle>
            <JobInput onDescriptionChanged={setDescription}/>
            <JobCategoriesTitle>Categories</JobCategoriesTitle>
            <div className={"job-create-task-categories"}>
                {
                    Category.defaultCategories.map((category, i) =>
                        <JobState state={category.name} color={category.color} id={`new-job-category-${i}`} className={"possible-category new-job-category"} onClick={() => onCategorySelected(i)}/>
                    )
                }
            </div>
            <SecondaryButton onClick={onJobCreateClicked}>SUBMIT TASK</SecondaryButton>
        </div>
    )
}

export default JobCreate;