import React from 'react'

const Nav = props => {

    const { } =  props;

    return (
        <nav>
            <ul className="nav nav-pills float-right">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );

};
export default Nav

