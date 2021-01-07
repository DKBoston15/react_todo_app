import { Drawer, Divider } from "@material-ui/core";
import { useState } from "react";
import NavList from "./NavList";
import { v4 as uuid } from "uuid";

function NavDrawer({ open }) {
    const [navItems, setNavItems] = useState([]);
    const [input, setInput] = useState();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const addNavItem = () => {
        setNavItems([
            {
                id: uuid(),
                name: input
            },
            ...navItems
        ]);
        document.getElementById("new-nav-item").value = "";
    };

    return (
        <Drawer variant="persistent" open={open}>
            <input
                id="new-nav-item"
                onChange={handleInputChange}
                value={navItems.name}
            />
            <button onClick={addNavItem}>Add Item +</button>
            <NavList navItems={navItems} />
        </Drawer>
    );
}
export default NavDrawer;
