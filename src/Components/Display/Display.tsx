import { useEffect } from "react"
import TopCategory from "../TopCategory/TopCategory";
import CreatedCategories from "../CreatedCategories/CreatedCategories";
// PROP TYPE
type propTypes = {

}
const Display = ({ }: propTypes) => {

    // Make the canvas full width of the viewport
    useEffect(() => {
        const canvas: HTMLCanvasElement = document.querySelector('.display')!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [])
    return (
        <div className="display-add">
            <canvas className="display"></canvas>
            <div className="categories-container">
                <TopCategory />
                <CreatedCategories />
            </div>
        </div>
    )
}

export default Display