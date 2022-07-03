import React from 'react'
import Carousal from './Carousal'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import '../App.css';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';

function Home() {
    return (
        <div>
            <div>
                <Navbar />
                <Carousal />
            </div>

            <div>
                {/* <MDBContainer className='p-4 '> */}
                <MDBRow className='d-flex my-3'>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>

                        <iframe width="500" height="315" src="https://www.youtube.com/embed/X9q2yjj6JXw"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </MDBCol>

                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Lorem ipsum</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </p>
                    </MDBCol>
                </MDBRow>
                {/* </MDBContainer> */}
            </div>

            <div className=''>
                <div className='text-center'><h4>Did You Know?</h4></div>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="mighty.jpg"
                                alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="img.jpeg" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="img.jpg" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="mighty.png" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>

            <Grid container spacing={0} style={{ marginTop: "20px" }}>
                <Grid item xs={3} className="offer d-flex">
                    <h1>Offer</h1>
                </Grid >
                <Grid bg-gray item xs={9} className="offer1 d-flex">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </Grid>
            </Grid>

            <div className='my-5'>
                <div className='text-center'><h4>Our Products</h4></div>

                <nav className={`navbar navbar-expand-lg `}>
                    <div className="container-fluid ">
                        <div className="collapse navbar-collapse nav-div" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-item">
                                <strong><Link className="nav-link" aria-current="page" to="/">New Arrivals</Link></strong>
                                <strong><Link className="nav-link" to="/">Best Seller</Link></strong>
                                <strong><Link className="nav-link" to="/">Lorem Ipsum</Link></strong>
                            </div>
                        </div>
                    </div>
                </nav>


                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="mighty.jpg"
                                alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="img.jpeg" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="img.jpg" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="card-color" style={{ width: "200px" }} >
                            <img className="card-img-top" style={{ borderRadius: "50%", outlineColor: "gray" }} src="mighty.png" alt='card' />
                            <div className="card-body">
                                <h6 className='text-center'>Lorem Ipsum</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='d-flex'>
                <Grid container spacing={2} className="d-flex gap-3">

                    <Grid container className="d-flex gap-3 justify-content-end ">
                        <Grid item xs className="icon">
                            <h5>Banner</h5>
                        </Grid>
                        <Grid item xs className="icon">
                            <h5>Banner</h5>
                        </Grid>
                        <Grid item xs className="icon" spacing={3}>
                            <LinkedIn />
                        </Grid>
                        <Grid item xs className="icon" spacing={3}>
                            <Twitter />
                        </Grid>
                        <Grid item xs className="icon">
                            <h5>Banner</h5>
                        </Grid>
                        <Grid item xs className="icon">
                            <h5>Banner</h5>
                        </Grid>
                    </Grid>

                    <Grid container className='d-flex justify-content-start gap-3'>
                        <Grid item xs className="icon1">
                            <InstagramIcon />
                        </Grid>
                        <Grid item xs className="icon1">
                            <YouTubeIcon />
                        </Grid>
                        <Grid item xs className="icon1">
                            <Facebook />
                        </Grid>
                    </Grid>


                </Grid>
            </div>

            <div className="my-5">
                <div className='text-center'><h4>Testinomials</h4></div>
                <div className='text-center'><h6>Client Reviews</h6> </div>
                <div >
                    <Grid container spacing={3} className="my-3 d-flex gap-3">
                        <Grid item xs className="icon">
                            <p >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been.
                            </p>

                        </Grid>
                        <Grid item xs className="icon">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been.
                            </p>
                        </Grid>
                        <Grid item xs className="icon">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been.
                            </p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} className="d-flex gap-3">
                        <Grid item xs >
                            <div>
                                <img src="" atl=" img" />
                                <h6>Lorem Ipsum</h6>
                                <p>loremipsum@gmail.com</p>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div>
                                <img src="" atl=" img" />
                                <h6>Lorem Ipsum</h6>
                                <p>loremipsum@gmail.com</p>
                            </div>
                        </Grid >
                        <Grid item xs>
                            <div>
                                <img src="" atl=" img" />
                                <h6>Lorem Ipsum</h6>
                                <p>loremipsum@gmail.com</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
            </div>

            <div className='my-5 card-color'>
                <Grid container spacing={3} className="my-3 p-4 d-flex gap-3 text-center">
                    <Grid item xs={3} >
                        <img src='img.jpg' atl="img"></img>
                    </Grid>
                    <Grid item xs={8}>
                        <h5>Lorem Ipsum</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been.
                        </p>
                    </Grid>
                </Grid>

                <div>
                    <h4 className='text-center'>Are You Ready to Change Your Life?</h4>
                    <MDBFooter className='text-center text-lg-left'>
                        <MDBContainer className='p-4 pb-0'>
                            <form action=''>
                                <MDBRow className='d-flex justify-content-center'>

                                    <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                        <MDBInput type='text' id='form5Example2' placeholder='Email Address' />
                                        <p> I agree that submitted data has been collected and stored.</p>
                                    </MDBCol>

                                    <MDBCol size='auto' className='mb-4 mb-md-0'>
                                        <MDBBtn className='btn-secondary'>Subscribe Now</MDBBtn><br />

                                    </MDBCol>

                                </MDBRow>

                            </form>

                        </MDBContainer>

                    </MDBFooter>
                </div>
            </div>

        </div>
    )
}

export default Home