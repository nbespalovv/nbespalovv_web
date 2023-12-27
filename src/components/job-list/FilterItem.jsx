const FilterItem = (props) => {
    if (props.isSelected === true)
        return <span className={"filter-item"} style={{color: "white"}} onClick={props.onClick}>{props.children}</span>
    return <span className={"filter-item"} onClick={props.onClick}>{props.children}</span>
}

export default FilterItem;