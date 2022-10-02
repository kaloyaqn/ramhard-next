import Script from 'next/script'

/**
 * 
 * 
 *  <section className='logos slider'>
            <div className='container'>
              <div className='row'>
                <div className='logo-placeholder'>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"/></div>
                </div>
              </div>
            </div>
          </section>

 */

export default function Logos() {
    return (
        <>
        <Script>        
        </Script>
          <section className='logo-carousel slide'>
            <div className='container'>
              <div className='row'>
                <div className='logo-placeholder'>
                  <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" /></div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}