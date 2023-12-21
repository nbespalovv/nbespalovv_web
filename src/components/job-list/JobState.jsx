const JobState = (props) => (
    <div className={"job-state " + props.className} style={{backgroundColor: props.color}}>
        {props.state}
    </div>
)

export default JobState;