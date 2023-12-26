const JobInput = (props) => (
    <div className={"job-input"}>
        <input className={"job-input-title"} type={"text"} placeholder={"Text description..."} onInput={(e) => props.onDescriptionChanged(e.target.value)}/>
    </div>

)

export default JobInput;