class Category {
    name
    color

    constructor(name, color) {
        this.name = name
        this.color = color
    }

    static defaultCategories = [
        new Category("Completed", "#4CAF50"),
        new Category("Urgent", "#FF5252"),
        new Category("Important", "#FFC107"),
        new Category("Later", "#9C27B0"),
        new Category("To study", "#25A7B8")
    ]
}

export default Category;