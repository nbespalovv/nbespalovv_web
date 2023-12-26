const JobState = (props) => (
    <div id={props.id} className={"job-state " + props.className} style={{backgroundColor: props.color}} onClick={props.onClick}>
        {props.state}
    </div>
)

export default JobState;