

// PROP TYPES

type propTypes = {
    servicesCount: number,
    zoom: number,
}
const Navbar = ({ servicesCount, zoom }: propTypes) => {
    return (
        <nav className="navbar">
            <section className="title">
                <h1 className="title_h1">
                    Services
                </h1>
                <span className="services-count_span">
                    {servicesCount}
                </span>
            </section>
            <section className="navbar-options">
                <button className="list_button btn">List View</button>
                <button className="center_button light-btn btn">&#x271B;</button>
                <section className="zoom_section">
                    <button className="zoom-out_button btn light-btn">-</button>
                    <span className="zoom_span">{zoom}%</span>
                    <button className="zoom-in_button btn light-btn">+</button>
                </section>
            </section>
        </nav>
    )
}

export default Navbar