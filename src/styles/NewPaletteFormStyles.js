import { DRAWER_WIDTH } from "../constants/constants.js";
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh"
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 15px 15px 15px"
  },
  buttons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    width: "45%",
    "& span":{
      fontSize: "12px"
    }
  }
});

export default styles;
