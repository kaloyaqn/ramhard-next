import tiktok from "../Images/socials/tiktok.svg"
import facebook from "../Images/socials/facebook.svg"
import Image from "next/image.js";
import { urlFor, client } from "../pages/client.js";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import biskvida from "../policies/cookiepolicy"
import { PortableText } from "@portabletext/react";

export default function Footer({arg}) {

    return (
        <>
		<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
                    <h6>Ramhard</h6>
					{arg?.map((Foot, index) => 
					<div key={index}>
						<PortableText value={Foot.title}/>
					</div>
					)}
				</div>
				<div class="col-sm-1 d-flex justify-content-center align-items-center">
					<div class="footer-divider"></div>
				</div>
				<div class="col-sm-8">
					<div class="row">

						<div class="col-sm-4 col-6">
							<b>Важна информация</b>
							<ul>
								<li>
                                    <Link href="../policies/privacypolicy"><a className="footer-link">Политика за поверителност</a></Link>
								</li>
								<li>
									<Link href="../policies/cancellationpolicy"><a className="footer-link">Право на отказ</a></Link>
								</li>
								<li>
                                    <Link href="../policies/termsandconditions"><a className="footer-link">Правила и условия</a></Link>
								</li>
								<li>
									<Link href="../policies/cookiepolicy"><a className="footer-link">Политика за бисквитки</a></Link>
								</li>
							</ul>
						</div>
                        <div class="col-sm-4 col-6">
							<b>Работно време</b>
							<ul>
								<li>
									Делнични дни: 9:00-19:00
								</li>
								<li>
                                    Събота: 9:00-13:00
								</li>
								<li>
                                    Неделя: Почивен ден
								</li>
								<li>
									Официални празници: Почивен ден
								</li>
							</ul>
						</div>
						<div class="col-sm-4 col-6">
							<b>Контакт</b>
							<ul>
								<li>
                                    Info@example.com
								</li>
								<li>
                                    +359 878 441 312
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-12">
					<div class="footer-bottom-part d-flex justfy-content-center">
                
					<div className="col-md-4 text-left">©2022, Всички права са запазени.</div>
					<div className="col-md-4 text-center madeby">Изработка на уебсайт от&nbsp;
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