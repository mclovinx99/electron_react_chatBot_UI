import * as React from 'react';
import Sidebar from './includes/sidebar.jsx';
// import { SendIcon } from './molecules/sendIcon.jsx';
import SendIcon from '../public/arrow.png'
import recordIcon from '../public/record.png';
import elipse from '../public/Elipse.png';
// import Sendicon from 'public/arrow.png';


const Home = () => {
	return (
		<>
			<div className="app-container">
				<div className="sidebar">
					<Sidebar />
				</div>

				{/* Main Content */}
				<div className="chat-main">
					<div className="main-content">
						<div className='main-heading'>
							<div className='chat-sec'>
								{/* <div className='chat-heading'>
									<h1 className="mt-3">Welcome to Ai Interview Assistant</h1>
									<span className='p-3'>
										<h5>Maximizing Interview Success Through AI-Powered Guidance</h5>
									</span>
									<div class="info-container">
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p> <b>Accurate Answers</b></p>
											<p>Trustworthy, precise responses tailored to you.</p>
										</div>
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p><b>Audio Analysis</b></p>
											<p>Deep insights from cutting-edge audio technology.</p>
										</div>
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p><b>Fast response</b></p>
											<p>Rapid assistance for seamless productivity.</p>
										</div>
									</div>
								</div> */}
								<div className='chat-box'>
									{/* Questions */}
									<div>
										<img className="rounded p-1" src={recordIcon} style={{ backgroundColor: 'white', margin: '6px' }} />
										<div class="d-flex flex-column flex-grow-1 p-1">
											<div class="flex-grow-1">
												In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
											</div>
										</div>
									</div>
									{/* Response */}
									<div>
										<img className="rounded p-1" src={recordIcon} style={{ backgroundColor: 'white', margin: '6px' }} />
										<div class="d-flex flex-column flex-grow-1 p-1">
											<div class="flex-grow-1">
												In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='d-flex w-100 chat-input'>
								<div className='audio-recorder'>
									<img src={recordIcon} />
								</div>
								<form>
									<div className="input-group d-flex">
										<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your question" />
										<button type="submit" className="btn btn-primary">
											<img src={SendIcon} style={{ width: '30px' }} />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;