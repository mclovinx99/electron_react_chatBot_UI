import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
	return (
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand">
					<a href="#">
						<b>AI Interview Assistant</b>
					</a>
				</li>
				<li>
					<a href="#">Dashboard</a>
				</li>
				<li>
					<a href="#">Shortcuts</a>
				</li>
				<li>
					<a href="#">Overview</a>
				</li>
				<li>
					<a href="#">Events</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;