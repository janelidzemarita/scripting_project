import React from "react";
import FontAwesome from 'react-fontawesome';
import SocialFollow from "./SocialFollow";
import yourlogo from "./yl.png";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
 
		<Box>
		{/*	<img src={yourlogo} alt="Logo" />*/}
		{/*<h1 style={{ color: "blue",*/}
		{/*			textAlign: "center",*/}
		{/*			marginTop: "-50px" }}>*/}
		{/*	*/}
		{/*</h1>*/}
		<Container>
			<Row>
				<Column>
					<Heading>About Us</Heading>
					<FooterLink href="#">Aim</FooterLink>
					<FooterLink href="#">Vision</FooterLink>
					<FooterLink href="#">Testimonials</FooterLink>
				</Column>
				<Column>
					<Heading>Services</Heading>
					<FooterLink href="#">Tours</FooterLink>
					<FooterLink href="#">Hiking</FooterLink>
					<FooterLink href="#">Camping</FooterLink>
					
				</Column>
				<Column>
					<Heading>Contact Us</Heading>
					<FooterLink href="#">Georgia</FooterLink>
					<FooterLink href="#">Germany</FooterLink>
					<FooterLink href="#">USA</FooterLink>
				</Column>
				<Column>
					<Heading>Social Media</Heading>
					<FooterLink/>
					<SocialFollow />
				</Column>
			</Row>
		</Container>
	</Box>
  
);
};
export default Footer;

