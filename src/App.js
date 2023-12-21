import './App.css';
import React from "react";
import JobModule from "./components/JobModule";
import JobCategoriesModule from "./components/JobCategoriesModule";

function App() {
    return (
        <div className="App">
            <header>
                PERSONAL
                <br/>
                TASK MANAGER
            </header>

            <article>
                <JobCategoriesModule/>
                <JobModule/>
            </article>

            <footer>

            </footer>
        </div>
    );
}

export default App;
