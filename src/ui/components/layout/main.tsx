import { Grid } from '@material-ui/core';
import { History, GitHub, Label, Inbox } from '@material-ui/icons';
import React, { ReactNode, useState } from 'react';
import { NavigationItems } from '../../../types/navigationModel';
import Navigation from './navigation';
import { AccessNetwork } from './nav-content';
import NavigationService from '../../../functions/navigationService';

// export layout component
export default function MainLayout(props: {children: ReactNode, nav: NavigationService}){
    const [id, node] = props.nav.router("welcome");
    const [page, setPage] = useState(id);

    const menuNavigation: NavigationItems = [
        {
            icon: <Inbox fontSize="large"/>,
            key: 'inbox',
            content: <AccessNetwork onNav={pageSelected => setPage(pageSelected)} navigation={props.nav}/>
        },
        {
            icon: <History fontSize="large"/>,
            key: 'access',
        },
        {
            icon: <Label fontSize="large"/>,
            key: 'inbox',
        },
        {
            icon: <GitHub fontSize="large"/>,
            key: 'github',
        }
    ];
    
    return <Grid container>
        <Grid item container xs={1} direction="column" justify="space-evenly" alignItems="center">
            <Navigation menu={menuNavigation}/>
        </Grid>
        <Grid item xs={11}>
            {props.nav.getPage(page)}
        </Grid>
    </Grid>
}