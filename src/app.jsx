import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter ,BrowserRouter, Routes, Route } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Dependencies from './components/dependencies.jsx';
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import Home from './components/home.jsx';

const root = createRoot(document.body);
root.render(
	<HashRouter>
	<Routes>
		<Route path="/home" element={<Dependencies />}>
			<Route index element={<Dependencies />} />
		</Route>
		<Route path="/" element={<Home />}>
			<Route index element={<Home />} />
		</Route>
	</Routes>
	</HashRouter>
);