import styleReferences from "../constants/sizes.js";
import background from '../constants/background.svg'

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "140vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#394bad",
    backgroundImage: `url(${background})`,
    overflow: "scroll"
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "80%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [styleReferences.down("xl")]: {
      width: "80%"
    },
    [styleReferences.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a":{
      color: "white"
    }    
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "30px",
    [styleReferences.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [styleReferences.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "14px"
    }
  },
  dialogTitle:{
    "& h2":{
      fontSize: "20px"
    }
  }
};

export default styles;