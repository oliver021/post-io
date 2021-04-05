import { createStyles, makeStyles, Paper, Theme, Container, Divider, Box, Grid } from '@material-ui/core';
import { MessageLog } from '../../../types/modelMonitor';
import { RemoveRedEye } from '@material-ui/icons';

// typed style flow
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tools: (p: MessageLog) => ({
        float: p.owner ? 'left' : 'right',
        width: '1%'
    }),
    body:(p: MessageLog) => ({
        float: p.owner ? 'right' : 'left',
        width: '100%'
    }),
    date:{
        fontSize: '10px',
        color: theme.palette.grey[800]
    },
    message: (p: MessageLog) => ({
      padding: theme.spacing(0.8),
      borderRadius: 2,
      textAlign: p.owner ? 'right' : 'left',
      height: 'auto',
      float: p.owner ? 'left' : 'right',
      background:  p.owner ? theme.palette.info.light : theme.palette.grey[500],
      maxWidth: '83%',
      mixWidth: '40%',
      maxHeight: '200px',
      marginTop: 8,
      marginBottom: 8
    }),
  }),
);

export default function Message(props: MessageLog){
    const classes = useStyles(props);
    return <Grid item md={12} xs={12}>
        <Paper className={classes.message}>
            <Container>
                <Box className={classes.tools}>
                    <RemoveRedEye fontSize="small" />
                </Box>
                <Box className={classes.body}>
                <Divider/>
                    {props.fromText()}
                <Divider/>
                    <span className={classes.date}>{props.timestamp.toDateString()}</span>
                </Box>
            </Container>
        </Paper>
    </Grid>
}