import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

export default function Navbar() {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top bg-light`}>
                <div className="container-fluid ">
                    <img src="mighty.jpg" alt="Mighty Mineral"/>
                    <div className="collapse navbar-collapse nav-div" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-item">
                            <strong><Link className="nav-link" aria-current="page" to="/">Product</Link></strong>
                            <strong><Link className="nav-link" to="/">Why Mighty Minerals</Link></strong>
                            <strong><Link className="nav-link" to="/">Team</Link></strong>
                            <strong><Link className="nav-link" to="/">Blog & Article</Link></strong>
                            <Link className="nav-link" to="/">Where to Buy</Link>
                        </div>
                        <form className="d-flex icons" role="search">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

                            < SearchIcon />
                            < PersonIcon/>
                            < ShoppingCartIcon />
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}


