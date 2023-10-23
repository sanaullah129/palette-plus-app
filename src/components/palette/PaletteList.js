import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";


class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: "",
      menuAnchorEl: null,
    };
    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    // Clear local storage
    window.localStorage.removeItem("palettes");
    // Reload the page
    window.location.reload();
  }

  toggleDeleteDialog(id) {
    this.setState((prevState) => ({
      openDeleteDialog: !prevState.openDeleteDialog,
      deletingId: id,
    }));
  }

  handleDelete() {
    const { deletingId } = this.state;
    this.props.deletePalette(deletingId);
    this.toggleDeleteDialog(deletingId);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleMenuOpen = (event) => {
    this.setState({ menuAnchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuAnchorEl: null });
  };

  handleCreatePalette(){
    window.location.href = "/palette/new"
  }

  redirectToAbout(){
    window.location.href = "/about"
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog, menuAnchorEl } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>Palette Plus</h1>
            <IconButton
              aria-owns={menuAnchorEl ? "menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleMenuOpen}
              title="More Options"
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleCreatePalette}  title="Create a new Palette" >
                Create Palette
              </MenuItem>
              <MenuItem onClick={this.handleReset}  title="Delete all current palettes and retrieve the original 9 palettes">Reset all Palettes</MenuItem>
              <MenuItem onClick={this.redirectToAbout} title="Use Case, Information, Contact">About</MenuItem>
            </Menu>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  goToPalette={this.goToPalette}
                  toggleDeleteDialog={this.toggleDeleteDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.toggleDeleteDialog}
        >
          <DialogTitle className={classes.dialogTitle} id="delete-dialog-title">
            Are you sure you want to <br /> Delete this Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.toggleDeleteDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
