import styleReferences from "../constants/sizes.js";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "140vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "60%",
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
    width: "100%",
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
    gridGap: "2.5rem",
    [styleReferences.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [styleReferences.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};

export default styles;