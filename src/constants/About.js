import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import styles from '../styles/AboutStyles'
import { Link } from 'react-router-dom';
class About extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.title}>
          <Typography variant="h4"><Link to="/">Palette Plus</Link> - Play with Colors</Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">Welcome to Palette Plus Application - a unique and vibrant project inspired by the captivating world of Flat UI Colors. This application servers to bring the beauty and simplicity of Flat UI Colors to life, providing you with a palette of visually appealing and modern design choices.</Typography>
        </div>
        <div className={classes.container}>
          <div className={classes.section}>
            <h2>Use Case</h2>
            <ul>
              <li>There are 9 preset palettes from where you can get hex, rgb & rgba code for the color of your choice</li>
              <li>If you want you can create a new palette with colors of your choice from more options menu which are saved in browser's local storage</li>
              <li>You can always retrieve original 9 palettes and delete all custom made palettes by resetting from more options</li>
              <li>1</li>
            </ul>
          </div>
          <div className={classes.section}>
          </div>
          <div className={classes.section}>

          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(About);