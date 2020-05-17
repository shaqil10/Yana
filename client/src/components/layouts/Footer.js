import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterStyles } from './layouts.styles';

const Footer = () => {
    const footer = FooterStyles();

    return (
        <Grid container className={footer.grid} align={"center"}>
        </Grid>
    );
}

export default Footer;