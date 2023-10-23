import Category from "../Category/Category"
type propTypes = {
    rows: { name: string, id: number, parentId: number, level: number }[][],
    addNode: Function
}
const CreatedCategories = ({ rows, addNode }: propTypes) => {
    return (
        <div className="rows">
            {
                rows.map((row: { name: string, parentId: number, id: number, level: number }[], index: number) => {
                    return (
                        <div className="row" key={index}>
                            {
                                row.map((category: { name: string, id: number, parentId: number, level: number }, index: number) => {
                                    return (
                                        <Category key={index} level={category.level} id={category.id} name={category.name} parentId={category.parentId} addNode={addNode} />
                                    )
                                })
                            }
                        </div>)
                })
            }
        </div>
    )
}

export default CreatedCategories