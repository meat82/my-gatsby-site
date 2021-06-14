import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import sportDB from "thesportsdb";
import _ from "lodash";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }
  },
}))(TableRow);

function createData(name, formed, stadium) {
  return { name, formed, stadium };
}

async function getNHLTeams() {
  sportDB.setApiKey(1);
  return await sportDB.getTeamsByLeagueName("NHL");
};

function createNHLTeamData(){
  let teams = [];
  
  getNHLTeams().then(response => {
    _.forEach(response.teams, function(team){
      teams.push(team);
    });
  })
  
  return teams
}
const rows = createNHLTeamData();

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function NHLTab() {
  const classes = useStyles();
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Formed</StyledTableCell>
            <StyledTableCell align="right">Home Stadium</StyledTableCell>
            <StyledTableCell align="right">Web site</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idTeam}>
              <StyledTableCell component="th" scope="row">
                {row.strTeam}
              </StyledTableCell>
              <StyledTableCell align="right">{row.intFormedYear}</StyledTableCell>
              <StyledTableCell align="right">{row.strStadium}</StyledTableCell>
              <StyledTableCell align="right">{row.strWebsite}</StyledTableCell>
              <StyledTableCell align="right">{row.strCountry}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}