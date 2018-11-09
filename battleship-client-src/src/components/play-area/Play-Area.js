import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import './Play-Area.css';

const styles = {
    card: {
        height: '55vh',
        width: '70%',
        margin: '0.5em auto',
    },
};

class PlayArea extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div className="Play-Area">
                <Card className={ classes.card }>
                    <CardContent>
                        Play Area!
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(PlayArea);