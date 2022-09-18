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


const card = (
  <React.Fragment>
		<CardActions>
      <Button size="large">Leer meer</Button>
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Kom erachter hoe wij helpen bij vroegherkeninng van zeldzame vormen van Reuma
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
			<Box sx={{ minWidth: 275 }}>
    	</Box>
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
						{card}
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
						{card}
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
						{card}
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
						{card}
					</Box>
				</TableCell>
			</TableRow>
			</Box>
    </div>
	);
}