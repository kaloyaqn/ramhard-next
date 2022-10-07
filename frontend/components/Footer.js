import tiktok from "../Images/socials/tiktok.svg"
import facebook from "../Images/socials/facebook.svg"

export default function Footer() {
    return (
        <>
		<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
                    <h6>Ramhard</h6>
					{/*sanity*/}<p>
						Администриране на бизнес страници в социалните мрежи. Планиране, подготовка и публикуване на съдържание. Управление, оптимизиране и мониторинг на рекламни кампании.				
					</p>
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
                                    Политика за поверителност
								</li>
								<li>
                                    Право на отказ
								</li>
								<li>
                                    Правила и условия
								</li>
								<li>
                                    Политика за бисквитки
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
					<div class="footer-bottom-part">
                    ©2022, Всички права са запазени.
                    
                    <div>
                        <img src={tiktok} /> {/*sanity*/}
                        <img src={facebook} />{/*sanity*/}
					</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </>
    )
}