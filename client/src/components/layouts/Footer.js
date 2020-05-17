import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterStyles } from './layouts.styles';

const Footer = () => {
    const footer = FooterStyles();

    return (
        <Grid container className={footer.grid} align={"center"}>
            {/* <Grid item xs={12}>
                <img src={logo} style={{ marginTop: 5, padding: 10, width: 50, height: 60 }} />
            </Grid> */}
        </Grid>
    );
}

export default Footer;