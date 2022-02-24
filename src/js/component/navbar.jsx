import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

 const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand m-2 mb-0 h1">
					<img
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						width="90"
						height="60"
						className="d-inline-block align-top"
						alt=""
					/>
				</span>
			</Link>
			<div className="nav-item dropdown m-2">
				<button
					className="btn btn-primary btn-lg dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
				</button>
				<div className={store.favorites.length > 0 ? "dropdown-menu show" : "d-none"}>
					{store.favorites.map((value, index) => {
						return (
							<li key={index} className="dropdown-item">
								{value}
								<i className="fas fa-trash  float-right" onClick={() => actions.delFav(value)} />
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
export default Navbar