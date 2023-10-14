import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
}

const DraggableColorBox = SortableElement((props) => {
  const { classes, color, handleDelete, name } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <Delete className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)