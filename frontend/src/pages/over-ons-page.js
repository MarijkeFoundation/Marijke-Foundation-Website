import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import over from './overons.png';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


const cardLeerMeer = (
  <React.Fragment>
		<CardActions>
		<NavLink to="/leer-meer">
			<Button size="large">Leer meer</Button>
		</NavLink>
      
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Kom erachter hoe wij helpen bij vroegherkeninng van zeldzame vormen van Reuma
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

const cardHelpMee = (
  <React.Fragment>
		<CardActions>
			<NavLink to="/help-mee">
      	<Button size="large">Help mee</Button>
			</NavLink>
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Ontdek hoe jij kan helpen
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

const cardDeel = (
  <React.Fragment>
		<CardActions>
			<NavLink to="/deel">
      	<Button size="large">Deel</Button>
			</NavLink>
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Deel onze info op je sociale netwerk(en) om awareness te creeren
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

const cardDoneer = (
  <React.Fragment>
		<CardActions>
			<NavLink to="/doneer">
      	<Button size="large">Doneer</Button>
			</NavLink>
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Doneer en help ons het verschil te maken
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

const cardStyle = {
	width: '100px',
}
export default function OverOnsPage(){
	return (
		<div >
			<img src={over}></img>
				<Box style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
					<TableRow >
						<TableCell style={{display: 'inline-block', width: 'auto'}}>
							<Box sx={{
									width: 270,
									height: 150,
									backgroundColor: 'primary',
									'&:hover': {
										backgroundColor: 'primary',
										opacity: [0.9, 0.8, 0.7],
									},
								}} >
									{cardLeerMeer}								
							</Box>
						</TableCell>
						<TableCell style={{display: 'inline-block', width: 'auto'}}>
							<Box sx={{
									width: 270,
									height: 150,
									backgroundColor: 'primary',
									'&:hover': {
										backgroundColor: 'primary',
										opacity: [0.9, 0.8, 0.7],
									},
								}} >
								{cardHelpMee}
							</Box>
						</TableCell>
						<TableCell style={{display: 'inline-block', width: 'auto'}}>
							<Box sx={{
									width: 270,
									height: 150,
									backgroundColor: 'primary',
									'&:hover': {
										backgroundColor: 'primary',
										opacity: [0.9, 0.8, 0.7],
									},
								}} >
								{cardDeel}
							</Box>
						</TableCell>
						<TableCell style={{display: 'inline-block', width: 'auto'}}>
							<Box sx={{
									width: 270,
									height: 150,
									backgroundColor: 'primary',
									'&:hover': {
										backgroundColor: 'primary',
										opacity: [0.9, 0.8, 0.7],
									},
								}} >
								{cardLeerMeer}
							</Box>
						</TableCell>
					</TableRow>
					
				</Box>
				<Box sx={{
								width: 'auto',
								height: 200,
								backgroundColor: '#8caffbb8'
							}}>
								<h2><b>Abonneer op onze niewsbrief en blijf op de hoogte van ons werk</b></h2>
								<TextField sx={{marginLeft:'50px', background:'white'}} id="outlined-basic" variant='outlined'/>
									<Button sx={{marginLeft:'50px'}} variant="contained">Abonneer</Button>
							</Box>
    </div>
	);
}