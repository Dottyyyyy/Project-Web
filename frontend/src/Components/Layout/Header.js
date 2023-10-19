import React, { Fragment, useEffect, useState } from 'react'
import '../../App.css'
import Search from './Search'
import { Link } from 'react-router-dom'
import { getUser } from '../../utils/helpers';

const Header = () => {

    const [user, setUser] = useState('')
    useEffect(() => {
        setUser(getUser())
    }, [user])
    return (
        <Fragment>
            <nav className="navbar row">
	@@ -18,7 +23,34 @@ const Header = () => {
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    {user ? (<div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <figure className="avatar avatar-nav">
                                <img
                                    src={user.avatar && user.avatar.url}
                                    alt={user && user.name}
                                    className="rounded-circle"
                                />
                            </figure>
                            <span>{user && user.name}</span>
                        </Link>

                        <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                            {/* {user && user.role === 'admin' && (
                                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                            )} */}
                            <Link className="dropdown-item" to="/orders/me">Orders</Link>
                            <Link className="dropdown-item" to="/me">Profile</Link>

                            <Link 
                            // className="dropdown-item text-danger" to="/" onClick={logoutHandler}
                            >
                                Logout
                            </Link>
                        </div>
                    </div>) : <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}



                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">2</span>