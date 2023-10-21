import React from 'react'
type propTypes = {
    name: string,
    parentId: number,
    addNode: Function
}
const Category = ({ name, parentId }: propTypes) => {
    return (
        <div className='category'>
            <p className='category_label'>{name}</p>
            <section className='buttons-container'>
                <button className='add_button'>+</button>
                <button className="edit_button">-</button>
                <button className='delete_button'>x</button>
            </section>
        </div>
    )
}

export default Category