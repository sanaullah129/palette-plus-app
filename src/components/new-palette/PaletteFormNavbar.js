import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { AddToPhotosRounded } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import styles from '../../styles/PaletteFormNavbarStyles.js';
import Typography from "@material-ui/core/Typography";

export class PaletteFormNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = { newPaletteName: "", formShowing: false }
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    };

    showForm(){
        this.setState({formShowing: true})
    };

    hideForm(){
        this.setState({formShowing: false})
    };

    render() {

        const { classes, open, palettes, handleSubmit, handleDrawerOpen } = this.props;
        const { formShowing } = this.state;

        return (
            <div className={classes.root} >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, {[classes.hide]: open})}
                    >
                        <AddToPhotosRounded />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap >
                        Create a New Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns} >                    
                    <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button} >
                        Save Palette
                    </Button>
                    <Link to='/'>
                            <Button variant='contained' color='secondary' type="submit" className={classes.button} >Go Back</Button>
                    </Link>
                </div>
                </AppBar>
                { formShowing && (<PaletteMetaForm palettes={ palettes } hideForm = { this.hideForm } handleSubmit = { handleSubmit } />)}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNavbar);