import NavItem from "./NavItem";

const NavList = ({ navItems }) => {
    const sortedNavItems = navItems.sort((a, b) => (a.name > b.name ? 1 : -1));
    return (
        <ul className="nav-item-list">
            {sortedNavItems.map((navItem) => {
                return <NavItem key={navItem.id} name={navItem.name} />;
            })}
        </ul>
    );
};

export default NavList;
