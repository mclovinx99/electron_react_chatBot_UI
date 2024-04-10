import * as React from 'react';
import Sidebar from './includes/sidebar.jsx';
import { SendIcon } from './molecules/sendIcon.jsx';
// import Sendicon from 'public/arrow.png';


const Home = () => {
	return (
		<>
			<div className="app-container">
				{/* <div className="row"> */}
				{/* Sidebar */}
				<div className="col-md-3">
					<Sidebar />
				</div>

				{/* Main Content */}
				<div className="col-md-9">
					<div className="main-content">
						<div className='main-heading'>
							<div className='chat-sec'>
								<h1 className="mt-3">Welcome to Ai Interview Assistant</h1>
								<span className='p-3'>
									<h5>Maximizing Interview Success Through AI-Powered Guidance</h5>
								</span>
								<div class="info-container">
									<div class="info">
										<p> <b>Accurate Answers</b></p>
										<p>Trustworthy, precise responses tailored to you.</p>
									</div>
									<div class="info">
										<p><b>Audio Analysis</b></p>
										<p>Deep insights from cutting-edge audio technology.</p>
									</div>
									<div class="info">
										<p><b>Fast response</b></p>
										<p>Rapid assistance for seamless productivity.</p>
									</div>
								</div>
							</div>
							<form>
								<div class="input-group flex">
									<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your question" />
									<button type="submit" class="btn btn-primary"></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;