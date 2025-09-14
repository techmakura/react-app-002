import Navbar from "./navbar";
import "./drawer.css";

const Drawer = (props) => {
    const { open, onClose } = props

    return (
        <div className={`${open ? "drawer open" : "drawer"}`}>
            <div className="close" onClick={onClose}>X</div>

            <Navbar />
        </div>
    )
}

export default Drawer;