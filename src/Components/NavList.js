import NavItem from "./NavItem";

const NavList = ({ navItems }) => {
    return (
        <ul className="nav-item-list">
            {navItems.map((navItem) => {
                return <NavItem key={navItem.id} name={navItem.name} />;
            })}
        </ul>
    );
};

export default NavList;
