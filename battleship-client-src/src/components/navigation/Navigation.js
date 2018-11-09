import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Navigation.css';

class Navigation extends Component {

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        return (
            <div className="Navigation">
                <AppBar position="static">
                    <Toolbar>
                        <Grid
                            justify="space-between"
                            container
                            spacing={24}
                        >
                            <Grid item>
                                <Typography type="title" variant="h6" color="inherit">
                                    Battleship!
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">New Game</Button>
                                <Button color="inherit">Load Game</Button>
                                <Button color="inherit">Save Game</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navigation;