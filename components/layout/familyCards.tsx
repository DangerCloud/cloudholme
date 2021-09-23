import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const FamilyCards: FC = (props) => (
  <Grid container justifyContent="center" spacing={2}>
    <Grid item xs={2}>
      <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              DADDO
            </Avatar>
          }
          title="Daddo"
          subheader="TN Bard"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={2}>
    <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              MAMMO
            </Avatar>
          }
          title="Mammo"
          subheader="LE Wizard"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={2}>
    <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              HIDERP
            </Avatar>
          }
          title="Hiderp"
          subheader="LN Paladin"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={2}>
    <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              IRATE
            </Avatar>
          }
          title="irate"
          subheader="CG Rogue"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={2}>
    <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              BAYBER
            </Avatar>
          }
          title="Bayber"
          subheader="CN Barbarian"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);
export default FamilyCards;