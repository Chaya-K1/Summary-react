import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/ShowPayment.css'
import logo from '../Images/O-logo.png'
import { connect } from "react-redux";

function mapStateToProps(state) {
	return { glasses: state.glasses };
}

export default connect(mapStateToProps)(function ShowPayment(props) {

	const { glasses } = props
	const date = new Date();
	const randomNumder = Math.floor(Math.random() * 100000000) + 100000000;
	const [message, setMessage] = useState('Welcome')
	let dateHours = date.getHours();
	useEffect(() => {
		if (dateHours >= 6 && dateHours < 13) {
			setMessage('Good morning')
		} else if (dateHours >= 13 && dateHours < 19) {
			setMessage('Good afternoon')
		} else {
			setMessage('Good night')
		}
	}, [])
	return (
		<>

			<div className="receipt-content">
				<div className="container bootstrap snippets bootdey">
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="invoice-wrapper">
								<div className="intro">
									<div className="text-left"><img src={logo} alt="logo optic" width={48} height={48}></img>ptics</div>
									<strong>{message}</strong>
									<p className="m-3">This is the reception from Optics</p>
								</div>

								<div className="payment-info">
									<div className="row">
										<div className="col-sm-6">
											<span>Payment No.</span>
											<small><strong>{randomNumder}</strong></small>
										</div>
										<div className="col-sm-6 text-right">
											<span>Payment Date</span>
											<small><strong> {date.getDate()}/{date.getMonth()}/{date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</strong></small>
										</div>
									</div>
								</div>

								<div className="payment-details">
									<div className="text-center">
										<span>Payment To</span>
										<strong>
											Optics
											</strong>
										<p>
											344 9th Avenue <br></br>
												San Francisco <br></br>
												99383 <br></br>
												USA <br></br>
											<Link to="/optics">optics@gmail.com</Link>
										</p>
									</div>
								</div>
								<div className="line-items">
									<div className="headers clearfix">
										<div className="row">
											<div className="col-xs-4">Description&nbsp;</div>
											<div className="col-xs-3">Quantity&nbsp;</div>
											<div className="col-xs-5 text-right">Price per unit&nbsp;</div>
											<div className="col-xs-5 text-right">Total payment</div>
										</div>
									</div>
									<div className="items">
										{glasses.filter(g => g.check === true).map(ge =>
											<div className="row item" key={ge.id}>
												<div className="col-xs-4 desc">{ge.type}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
												<div className="col-xs-4 desc">{ge.count}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
												<div className="col-xs-3 qty">{ge.price}$&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
												<div className="col-xs-3 qty">{ge.price * ge.count}$</div>
											</div>
										)}
									</div>
									<div className="total text-right m-3">
										<p className="extra-notes">
											<strong>Thank you very much for buying from Optica.</strong>
											We will always be happy to serve you
											With the blessing of optical vision and solid health, you will thrive with help Hashem.
										</p>

										<div className="field grand-total ">
											Total <span>${glasses.filter(g => g.check == true).reduce((total, item) => total += parseInt(item.price*item.count), 0)}</span>
										</div>
									</div>
								</div>
							</div>

							<div className="footer">
								Copyright © <img src={logo} alt="logo\' optics" width={16}></img>ptics
				</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
})