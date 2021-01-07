import { Divider } from "@material-ui/core";

const NavItem = ({ name }) => {
    return (
        <div>
            <li className="nav-item">{name}</li>
            <Divider />
        </div>
    );
};

export default NavItem;
