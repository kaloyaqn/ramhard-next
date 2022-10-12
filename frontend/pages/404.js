import Link from 'next/link'
import Page404 from '../Buttons/buttons/404Button'
import PriButton from '../Buttons/buttons/Button'
import Image from 'next/image'
import four0four from '../public/static/novo404.png'

export default function FourOhFour(props) {
  return <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center page-404'>
          <Image src={four0four} /> {/* sanity bojko :*/}
        <h1>Страницата не бе <b>намерена</b>.</h1>
            <Link href="/">
              <a>
                <Page404 />
              </a>
            </Link>
        </div>
      </div>
    </div>
  </>
}


 

