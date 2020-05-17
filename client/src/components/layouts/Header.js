import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyles } from './layouts.styles';
import Lottie from 'react-lottie';

const Header = () => {
    const header = HeaderStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('./box.json'),
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    };

    return (
        <Grid container className={header.grid}>
            <Grid item xs={12} key={1} align={"center"} className={header.item}>
                <Link to="/">
                    <div className="header-lottie">
                        {
                            <Lottie
                                options={defaultOptions}
                                height={100}
                                width={100}
                            />
                        }
                    </div>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Header;
