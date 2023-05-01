import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Array from './pages/Array';
import Home from './pages/Home';
import Colors from './pages/Colors';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/array' element={<Array />} />
					<Route path='/colors' element={<Colors />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
