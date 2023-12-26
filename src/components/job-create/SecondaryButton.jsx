const SecondaryButton = (props) => (
  <div className={"submit-task"} onClick={props.onClick}>
      {props.children}
  </div>
)

export default SecondaryButton;