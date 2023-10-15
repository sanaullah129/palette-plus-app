import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorBoxStyles.js'

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