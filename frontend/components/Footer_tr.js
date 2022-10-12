import tiktok from "../Images/socials/tiktok.svg"
import facebook from "../Images/socials/facebook.svg"
import Image from "next/image.js";
import { urlFor, client } from "../pages/client";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import biskvida from "../policies/cookiepolicy_tr"

export default function Footer_tr({arg}) {

    return (
        <>
		<footer>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
                    <h6>Ramhard</h6>
					{arg?.map((Foot, index) => 
					<div key={index}>
						<PortableText value={Foot.title_tr}/>
					</div>
					)}
				</div>
				<div className="col-sm-1 d-flex justify-content-center align-items-center">
					<div className="footer-divider"></div>
				</div>
				<div className="col-sm-8">
					<div className="row">

						<div className="col-sm-4 col-6">
							<b>Önemli bilgi</b>
							<ul>
								<li>
                                    <Link href="../policies/privacypolicy_tr"><a className="footer-link">Gizlilik Politikası</a></Link>
								</li>
								<li>
									<Link href="../policies/cancellationpolicy_tr"><a className="footer-link">Vazgeçme hakkı</a></Link>
								</li>
								<li>
                                    <Link href="../policies/termsandconditions_tr"><a className="footer-link">Şartlar ve koşullar</a></Link>
								</li>
								<li>
									<Link href="../policies/cookiepolicy_tr"><a className="footer-link">Çerez politikası</a></Link>
								</li>
							</ul>
						</div>
                        <div className="col-sm-4 col-6">
							<b>Çalışma zamanı</b>
							<ul>
								<li>
                                Hafta içi: 9:00-19:00
								</li>
								<li>
                                Cumartesi: 9:00-13:00
								</li>
								<li>
                                Pazar: izin günü
								</li>
								<li>
								Resmi tatiller: İzin günü
								</li>
							</ul>
						</div>
						<div className="col-sm-4 col-6">
							<b>İletişim</b>
							<ul>
								<li>
                                    +359 878 441 312
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-sm-12">
					<div className="footer-bottom-part d-flex justfy-content-center">
                
					<div className="col-md-4 text-left">©2022, Tüm hakları saklıdır.</div>
					<div className="col-md-4 text-center madeby">Web sitesi geliştirme&nbsp;
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