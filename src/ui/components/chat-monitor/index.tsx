import React, { ReactNode, useState } from "react";
import { MonitorHisotry } from '../../../types/modelMonitor';
import { Box, Container, Grid, createStyles, Theme, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Message from './message';
import { makeStyles } from '@material-ui/core/styles';
import {Restore, Favorite, LocationOn} from "@material-ui/icons"

var useStyle = makeStyles((t: Theme) =>
    createStyles({
        nav:{
            height: '50px',
            boxShadow: '2px 1px 3px rgba(111,111,111,0.66)',
            width: '100%',
            background: t.palette.background.default
        },
        btn:{
            float: 'right',
        },
        content:{
            height: '100%',
            overflow: 'hidden',
            padding: 0
        },
        room:{
            overflow: 'auto',
            height: '75%',
            padding: 11.8
        },
        panel:{
            boxShadow: t.shadows[8],
            background: t.palette.background.default,
            padding: 10
        }
    })
);

export default function ChatMonitor(props:{
    operatorPanel: ReactNode,
    data: MonitorHisotry
}){
    const classes = useStyle();
    const [value, setValue] = useState("");
    return <Grid container className={classes.content}>
        <BottomNavigation 
        className={classes.nav}
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels>
            <BottomNavigationAction className={classes.btn} label="Recents" icon={<Restore />} />
            <BottomNavigationAction className={classes.btn} label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction className={classes.btn} label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>

        <Grid xs={12} md={12} className={classes.room} item>
            <Grid container>
                {props.data.logs.map((m,i) => <Message key={i} {...m}/>)}
            </Grid>
        </Grid>
        
        <Grid className={classes.panel} xs={12} md={12} item>
           {props.operatorPanel}
        </Grid>
    </Grid>
}