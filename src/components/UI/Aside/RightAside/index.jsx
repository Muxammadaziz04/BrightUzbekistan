import Navbar from "../../Navbar";
import cls from './RightAside.module.scss'

const RightAside = ({children}) => {
    return (
        <aside className={cls.aside}>
            <Navbar />
            {children}
        </aside>
    );
}

export default RightAside;
