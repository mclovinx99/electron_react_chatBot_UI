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
							<h2 class="mt-3">Welcome to Ai Interview Assistant</h2>

							<span className='p-3'>
								<p>Maximizing Interview Success Through AI-Powered Guidance</p>
							</span>
							<form>
								<div class="input-group">
									<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your question" />
									<div class="input-group-append">
										<button type="submit" class="btn btn-primary"></button>
									</div>
								</div>
							</form>
						</div>
						{/* <div className="submitForm">
						</div> */}
					</div>
				</div>
				{/* </div> */}
			</div>
		</>
	)
}

export default Home;