import './App.css';
import React, {useState} from "react";
import JobModule from "./components/JobModule";
import JobCategoriesModule from "./components/JobCategoriesModule";
import JobCreateModule from "./components/JobCreateModule";
import NewJobDialog from "./components/NewJobDialog";

function App() {
    const [isOpen, setOpen] = useState(false)
    const [editModeJobItem, setEditModeJobItem] = useState(null)

    const editJob = (jobItem, jobId) => {
        setEditModeJobItem(jobId)
        setOpen(true)
    }

    const onDialogClose = () => {
        setOpen(false)
        setEditModeJobItem(null)
    }

    return (
        <div className="App">
            <header>
                PERSONAL
                <br/>
                TASK MANAGER
            </header>

            <article>
                <JobCategoriesModule/>
                <JobModule onCreateTaskClick={() => setOpen(true)} onEditClick={(job, jobId) => editJob(job, jobId)}/>
                <NewJobDialog isOpen={isOpen} onClose={() => onDialogClose()} editMode={editModeJobItem}/>
            </article>

            <footer>
            </footer>
        </div>
    );
}

export default App;
