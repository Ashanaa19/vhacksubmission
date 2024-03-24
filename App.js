import React from 'react';
import { AppBar, Toolbar, IconButton, Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, Home, Book, Search } from '@material-ui/icons';

function NewsFeed() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="https://via.placeholder.com/300x200"
          title="News feed"
        />
        <CardContent>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            News article title
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Button color="primary" size="small" variant="contained">
            Read more
          </Button>
        </CardContent>
      </Card>
      {/*  More news articles here... */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  tab: {
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  tabs: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <IconButton edge="start" aria-label="home" className={classes.menuButton}>
                <Home />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton edge="start" aria-label="account" className={classes.menuButton}>
                <AccountCircle />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.tabs}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" classes={{ root: classes.tab, selected: classes.tab }} icon={<Home />} />
          <Tab
            label="Learn"
            classes={{ root: classes.tab, selected: classes.tab }}
            icon={<Book />}
          />
          <Tab
            label="Explore"
            classes={{ root: classes.tab, selected: classes.tab }}
            icon={<Search />}
          />
          <Tab
            label="You"
            classes={{ root: classes.tab, selected: classes.tab }}
            icon={<AccountCircle />}
          />
        </Tabs>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NewsFeed />
        </Grid>
      </Grid>
    </div>
  );
}


