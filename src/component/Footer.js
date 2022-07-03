import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted container footer'>
      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>


            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>ABOUT MIGHTY MINERALS</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refer & Earn
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Authenticate Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Carrer
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>POLICIES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Term & Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Delivery Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Return Policy
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONTACT</h6>
              <p className='d-flex gap-3'>
                <CallIcon />  +1235489237
              </p>
              <p className='d-flex gap-3'>
                <WhatsAppIcon />  +2343847893

              </p>
              <p className='d-flex gap-3'>
                <MessageIcon />  Chat with us
              </p>
              <p className='d-flex gap-3'>
                <EmailIcon />  Email
              </p>
              <p className='d-flex gap-3'>
                <HelpOutlineIcon />  Help
              </p>


              <section className='d-flex gap-0'>
                <a
                  className='btn btn-link  text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <Facebook />
                </a>

                <a
                  className='btn btn-link text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <Twitter />
                </a>

                <a
                  className='btn btn-link text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <InstagramIcon />
                </a>

                <a
                  className='btn btn-link text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <LinkedIn />
                </a>

                <a
                  className='btn btn-link text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <YouTubeIcon />
                </a>

                <a
                  className='btn btn-link text-dark'
                  href='#!'
                  role='button'
                  data-mdb-ripple-color='dark'
                >
                  <PinterestIcon />
                </a>
              </section>


            </div>
          </div>
        </div>
      </section>



      <div className='text-end p-3 bg-dark footer-end '>
        
        <a className='text-reset' href='/#'>
        2022, Copyright.com
        </a>
      </div>
    </MDBFooter>
  );
}