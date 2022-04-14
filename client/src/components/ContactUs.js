import React from "react";
import Icons from "./Icons";
import './contact.css';
import './style.css';
const ContactUs = () =>{
    
    return(
        <>
    <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>Contact Us</h1>
				</div>
				<div class="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			{/* <div class="image-section">
				<img src="image/img one.jpg" />
			</div> */}
		</div>
	</div>
    {/* <Icons/> */}
    </>
    );
}
export default ContactUs;