import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const CustomTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "var(--gray)"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "var(--gray)"
            },
            "&:hover fieldset": {
                borderColor: "var(--primary)"
            },
            "&.Mui-focused fieldset": {
                borderColor: "var(--primary)"
            }
        }
    }
})(TextField);

const NewNavItemModal = ({ addNavItem, handleInputChange, navItems }) => {
    return (
        <Card className="new-nav-item-modal-card">
            <CardContent>
                <h3>New Section</h3>
            </CardContent>
            <CardActions className="new-nav-item-modal-actions">
                <CustomTextField
                    label="Name"
                    name="navItem"
                    type="navItem"
                    variant="outlined"
                    value={navItems.name}
                    onChange={handleInputChange}
                />
                <Button onClick={addNavItem} className="todo-button">
                    Add Section
                </Button>
            </CardActions>
        </Card>
    );
};
export default NewNavItemModal;
