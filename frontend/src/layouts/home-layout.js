
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import InformatiePage from "../pages/informatie-page";
import OverOnsPage from "../pages/over-ons-page";
import SymptoMatrixPage from "../pages/sympto-matrix-page";

export default function HomeLayout() {

	return (
		
				<BrowserRouter>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

							<div style={{
									display: "flex",
									background: 'white',
									padding: '5px 0 5px 5px',
									fontSize: '20px',
									
							}}>
									<div style={{ margin: '10px' }}>
											<NavLink to="/" style={({ isActive }) => ({ 
													color: isActive ? 'midnightblue' : 'grey', textDecoration: 'none'})}>
													<Tab style={{fontWeight: 'bold'}} label="Over ons" />	
											</NavLink>
									</div>
									<div style={{ margin: '10px' }}>
											<NavLink to="/informatie" style={({ isActive }) => ({ 
													color: isActive ? 'midnightblue' : 'grey' , textDecoration: 'none'})}>
													<Tab label="Informatie" />		
											</NavLink>
									</div>
									<div style={{ margin: '10px' }}>
											<NavLink to="/symptomatrix" style={({ isActive }) => ({ 
													color: isActive ? 'midnightblue' : 'grey' , textDecoration: 'none'})}>
													<Tab label="SymptoMatrix" />											
											</NavLink>
									</div>
							</div>
					</Box>					
					<Routes>
							<Route exact path="/" element={<OverOnsPage />} />
							<Route exact path="/informatie" element={< InformatiePage/>} />
							<Route exact path="/symptomatrix" element={<SymptoMatrixPage />} />
					</Routes>
				</BrowserRouter>
);
}