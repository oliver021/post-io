import {
     Grid, Button, TextField,
     makeStyles, Theme, createStyles 
} from '@material-ui/core';


// typed style flow
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input:{
        width: '100%',
        padding: 0,
        height: '4px',
        fontWeight: 'bold'
    },
  }),
);

export interface SignalRInvoke{
    command: string,
    args: string,
    time?: Date
}

function makeInvokation(elms?: string): SignalRInvoke{
    alert(1111);
    return {
        command: '',
        args: ''
    };
}

export function SignalROperator(props: {
    handler: (invokeEvent: SignalRInvoke)=>void })
{
    const classes = useStyles();
    return <Grid container>
        <Grid item xs={10}>
            <TextField 
            onKeyPress={ev =>alert(ev)}
            className={classes.input} 
            id="standard-basic" 
            label="Invoke Action"
            variant="outlined"/>
        </Grid>
        <Grid item xs={2}>
            <Button variant="outlined" size={'large'} onClick={ev => props.handler.call(null, makeInvokation())}>
                Invoke
            </Button>
        </Grid>
    </Grid>
}