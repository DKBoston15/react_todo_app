import { Drawer, Modal } from "@material-ui/core";
import { useState } from "react";
import NavList from "./NavList";
import { v4 as uuid } from "uuid";
import NewNavItemModal from "./NewNavItemModal";

function NavDrawer({ open }) {
    const [navItems, setNavItems] = useState([]);
    const [input, setInput] = useState();
    const [openModal, setOpenModal] = useState(false);

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
        setOpenModal(false);
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Drawer variant="persistent" open={open}>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <NewNavItemModal
                    addNavItem={addNavItem}
                    handleInputChange={handleInputChange}
                    navItems={navItems}
                />
            </Modal>

            <NavList navItems={navItems} />
        </Drawer>
    );
}
export default NavDrawer;
