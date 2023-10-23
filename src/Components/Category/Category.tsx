import { useState } from "react";
type propTypes = {
    name: string,
    parentId: number,
    addNode: Function,
    id: number,
    level: number
}
const Category = ({ name, parentId, id, level, addNode }: propTypes) => {
    const [input, setInput] = useState<{ name: string }>({ name, });
    const handleAdd = () => {
        addNode(input.name, id, (level + 1));
    }

    return (
        <div className='category'>
            <div contentEditable="true" className='category_label'>{name}</div>
            <section className='buttons-container'>
                <button className='add_button' onClick={() => handleAdd()}>+</button>
                <button className="edit_button">-</button>
                <button className='delete_button'>x</button>
            </section>

        </div>
    )
}

export default Category