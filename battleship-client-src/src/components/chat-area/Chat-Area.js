import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import './Chat-Area.css';

const styles = {
    card: {
        height: '30vh',
        width: '40%',
        margin: '0.5em auto',
    },
};

class ChatArea extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div className="Chat-Area chat">
                <Card className={ classes.card }>
                    <CardContent>
                        Chat Area!
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(ChatArea);