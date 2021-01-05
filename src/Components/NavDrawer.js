import { Drawer } from "@material-ui/core";

function NavDrawer({ open }) {
    return (
        <Drawer variant="persistent" open={open}>
            Aww yeah
        </Drawer>
    );
}
export default NavDrawer;
