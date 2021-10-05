import './App.css';
import {Grid} from '@material-ui/core'
import Header from './Header';

function App() {
  return (
<Grid container direction="column" >    
<Grid item>
  <Header />
</Grid>
<Grid item container>
  <Grid item xs={0} sm={2} />
  <Grid item xs={12} sm={8} >
  This is where the header will go
  This is where the header will go
  This is where the header will go
  This is where the header will go
  This is where the header will go
  This is where the header will go 
</Grid>
<Grid item xs={0} sm={2} />
</Grid>
</Grid>

  );
}

export default App;
