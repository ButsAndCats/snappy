import * as React from "react";
import {
  Link
} from "react-router-dom";

export const Header: React.FC = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/collections">Collections</Link>
    <Link to="/collections/all">All</Link>
    <Link to="/collections/all/products/black-tshirt">Product in collection</Link>
    <Link to="/products/black-tshirt">Product not in collection</Link>
    <Link to="/page/about-us">About us</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/blogs/news">News</Link>
    <Link to="/blogs/news/today">Today</Link>
    <Link to="/search">Search</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/dsafadsf">404</Link>
  </header>
)