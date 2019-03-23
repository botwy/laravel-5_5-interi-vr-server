import { withStyles, StyleRulesCallback, StyleRules } from '@material-ui/core/styles';

export const styles: StyleRulesCallback<string> = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    addIconDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
    gridList: {
        //width: 500,
        // height: 450,
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button: {
        margin: theme.spacing.unit,
        color: '#ffffff',
    },
});