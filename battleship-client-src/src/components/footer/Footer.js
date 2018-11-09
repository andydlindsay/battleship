import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Grid
                    position="fixed"
                    bottom="0px"
                >
                    <BottomNavigation>
                        <Typography>
                            &copy;2018 <a target="_blank" href="www.andydlindsay.ca">Andy Lindsay</a>
                        </Typography>
                    </BottomNavigation>
                </Grid>
            </div>
        );
    }
}

export default Footer;