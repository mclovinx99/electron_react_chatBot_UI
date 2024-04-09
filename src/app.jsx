import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import Home from './components/home.jsx';

const root = createRoot(document.body);
root.render(
	<Home />
);