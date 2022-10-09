import Link from 'next/link'
import Page404 from '../components/404Button'
import { PriButton } from '../components/buttons/Button'
import {chetiri} from '../Images/404.png'
import Image from 'next/image'

export default function FourOhFour(props) {
  return <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center page-404'>
          <img src='../Images/404.png' /> {/* sanity bojko :*/}
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




