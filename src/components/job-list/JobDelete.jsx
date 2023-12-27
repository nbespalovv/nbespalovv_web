import delete_icon from '../../assets/delete-icon.png'

const JobDelete = (props) => (
    <img src = {delete_icon} width={"20px"} height={"20px"} className={"job-marker"} onClick={props.onClick}/>
)

export default JobDelete;