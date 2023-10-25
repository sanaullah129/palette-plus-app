import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import styles from '../../styles/AboutStyles'
import { Link } from 'react-router-dom';
import linkedin from '../../constants/linkedin.svg';
import instagram from '../../constants/instagram.svg';
import github from '../../constants/github.svg';

class About extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <div className={classes.title}>
          <Typography variant="h4"><Link to="/">Palette Plus</Link> - Play with Colors</Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">Welcome to Palette Plus Application - a unique and vibrant project inspired by the captivating world of Flat UI Colors. This application servers to bring the beauty and simplicity of Flat UI Colors to life, providing you with a palette of visually appealing and modern design choices.</Typography>
        </div>
        <div className={classes.container}>
          <div className={classes.useCase}>
            <h2>Use Case</h2>
            <div className={classes.lists}>
              <ul>
                <li>Discover 9 preset palettes, each offering a unique selection of colors in HEX, RGB, and RGBAformats</li>
                <li>Create your own custom palettes by handpicking your favorite colors and save them in yourbrowser's local storage for quick and easy access</li>
                <li>Easily reset your palettes to revert to the original 9 presets or delete custom palettes</li>
                <li>Please note that palettes are stored in local storage, which means you won't have access toyour data after resetting or when using a different device</li>
              </ul>
            </div>
          </div>


          <div className={classes.social}>
            <h2>About</h2>
            <div className={classes.aboutDescription} >
              Greetings! I'm Sanaullah Ansari, the creator and administrator of this React-based application. I've  developed this project as part of my journey to sharpen my React skills and further my expertise in  various areas of software development. As a Junior Software Developer, I'm passionate about expanding  my knowledge and experience across a wide range of domains. My skillset includes proficiency in several  technologies and tools, such as: <a>ASP.NET Core, ReactJs, NodeJs, NextJs, Redux, WordPress, Java, Python,  JavaScript, MySQL | MSSQL , MongoDb, Puppeteer, Bootstrap, MaterialUI, CSS3, and HTML5.</a>
            </div>
            <div className={classes.socialProfile} >
            Feel free to explore my social profiles to get in touch and learn more about me:
              <div className={classes.icons} >
                <a href="https://github.com/sanaullah129?tab=repositories" target='blank'><img src={github} alt="github" />
</a>
                <a href="https://www.linkedin.com/in/sanaullah129" target='blank'><img src={linkedin} alt="linekdin" />
</a>                
                <a href="https://www.instagram.com/sanaullah129/" target='blank'><img src={instagram} alt="instagram" /></a>
              </div>              
            </div>            
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(About);