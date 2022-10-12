import tiktok from "../Images/socials/tiktok.svg"
import facebook from "../Images/socials/facebook.svg"
import Image from "next/image.js";
import { urlFor, client } from "../pages/client.js";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import biskvida from "../pages/policies/cookiepolicy"

export default function Footer_en() {

    return (
        <>
		<footer>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
                    <h6>Ramhard</h6>
					{/*sanity*/}<p>
                    Administration of business pages in social networks. Planning, preparing and publishing content. Management, optimization and monitoring of advertising campaigns.					</p>
				</div>
				<div className="col-sm-1 d-flex justify-content-center align-items-center">
					<div className="footer-divider"></div>
				</div>
				<div className="col-sm-8">
					<div className="row">

						<div className="col-sm-4 col-6">
							<b>Important information</b>
							<ul>
								<li>
                                    <Link href="../policies/privacypolicy_en"><a className="footer-link">Политика за поверителност</a></Link>
								</li>
								<li>
									<Link href="../policies/cancellationpolicy_en"><a className="footer-link">Право на отказ</a></Link>
								</li>
								<li>
                                    <Link href="../policies/termsandconditions_en"><a className="footer-link">Правила и условия</a></Link>
								</li>
								<li>
									<Link href="../policies/cookiepolicy_en"><a className="footer-link">Политика за бисквитки</a></Link>
								</li>
							</ul>
						</div>
                        <div className="col-sm-4 col-6">
							<b>Working hours</b>
							<ul>
								<li>
                                Weekdays: 9:00-19:00
								</li>
								<li>
                                    Saturday: 9:00-13:00
								</li>
								<li>
                                    Sunday: Почивен ден
								</li>
								<li>
									Offical holidays: Почивен ден
								</li>
							</ul>
						</div>
						<div className="col-sm-4 col-6">
							<b>Contact</b>
							<ul>
								<li>
                                    <a href="tel:+359 878 441 312">+359 878 441 312</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-sm-12">
					<div className="footer-bottom-part d-flex justfy-content-center">
                
					<div className="col-md-4 text-left">©2022, All Rights Reserved</div>
					<div className="col-md-4 text-center madeby">Website development by&nbsp;
						<a href="https://static.studio">Static Studio</a>
					</div>
					<div className="col-md-4 d-flex invalid justufy-content-end text-right">
						<motion.div
						whileHover={{scale:1.1}}
						>
							<Image className="footer-img" src={tiktok} /> 

						</motion.div>

						<motion.div
						whileHover={{scale:1.1}}
						>
							<Image className="footer-img" src={facebook} />

						</motion.div>

					</div>

					</div>
				</div>
			</div>
		</div>
	</footer>

	
        </>
    )
}

/*
                    <div className="footer-img-container">

						<motion.div
						whileHover={{scale:1.1}}
						>
							<Image className="footer-img" src={tiktok} /> 

						</motion.div>

						<motion.div
						whileHover={{scale:1.1}}
						>
							<Image className="footer-img" src={facebook} />

						</motion.div>

					</div>  */