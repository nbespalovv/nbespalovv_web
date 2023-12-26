const PrimaryButton = (props) => (
    <div className={"add-new-task"} onClick={props.onClick}>
        {props.children}
    </div>
)

export default PrimaryButton;