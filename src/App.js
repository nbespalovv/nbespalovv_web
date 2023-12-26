import './App.css';
import React, {useState} from "react";
import JobModule from "./components/JobModule";
import JobCategoriesModule from "./components/JobCategoriesModule";
import JobCreateModule from "./components/JobCreateModule";
import NewJobDialog from "./components/NewJobDialog";

function App() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="App">
            <header>
                PERSONAL
                <br/>
                TASK MANAGER
            </header>

            <article>
                <JobCategoriesModule/>
                <JobModule onCreateTaskClick={() => setOpen(true)}/>
                <NewJobDialog isOpen={isOpen} onClose={() => setOpen(false)}/>
            </article>

            <footer>
            </footer>
        </div>
    );
}

export default App;
