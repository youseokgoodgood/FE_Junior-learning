import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CommonHeader from './header/commonHeader';
import Main from './article/main';
import RegistrationFrom from './loginFrom/RegistrationFrom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md">
      <Grid container>
      <Grid item xs={12}>
        <Main/>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
