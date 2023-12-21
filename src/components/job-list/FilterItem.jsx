const FilterItem = (props) => {
    if (props.isSelected === true)
        return <span className={"filter-item"} style={{color: "white"}}>{props.children}</span>
    return <span className={"filter-item"}>{props.children}</span>
}

export default FilterItem;