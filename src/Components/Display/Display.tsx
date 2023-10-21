import { useEffect } from "react"
import TopCategory from "../TopCategory/TopCategory";
import CreatedCategories from "../CreatedCategories/CreatedCategories";
// PROP TYPE
type propTypes = {
    rows: { name: string, id: number, parentId: number, level: number }[][],
    addNode: Function
}
const Display = ({ rows, addNode }: propTypes) => {

    // Make the canvas full width of the viewport
    useEffect(() => {
        const canvas: HTMLCanvasElement = document.querySelector('.display')!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [])
    return (
        <div className="display-container">
            <canvas className="display"></canvas>
            <div className="categories-container">
                <TopCategory />
                <CreatedCategories rows={rows} addNode={addNode} />
            </div>
        </div>
    )
}

export default Display