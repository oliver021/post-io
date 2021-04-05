import { Box, Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ChatMonitor from "../chat-monitor";
import { MonitorHisotry } from '../../../types/modelMonitor';
import { SignalROperator } from '../../engines/signalr/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 0,
      borderRadius: 0,
      textAlign: 'center',
      height: '95vh',
      color: theme.palette.text.secondary,
    },
  }),
)
;

const mockData: MonitorHisotry = {
    serviceName: "test",
    serviceStatus: "online",
    logs: [
        {
            owner: false,
            fromText: () => "tremendo",
            type: 'text',
            timestamp: new Date,
        },
        {
            owner: true,
            fromText: () => "data is data",
            type: 'text',
            timestamp: new Date,
        },
        {
            owner: false,
            fromText: () => "data is data ssssssssssssssssssssssssssssssssssssssss",
            type: 'text',
            timestamp: new Date,
        },
        {
            owner: true,
            fromText: () => "data support",
            type: 'text',
            timestamp: new Date,
        },
        {
            owner: false,
            fromText: () => "data is data",
            type: 'text',
            timestamp: new Date,
        }
    ]
};

export default function SignalRTab() {
    const classes = useStyles();
    return <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <ChatMonitor operatorPanel={ <SignalROperator handler={e=>null} />} data={mockData}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
        </Grid>;
};