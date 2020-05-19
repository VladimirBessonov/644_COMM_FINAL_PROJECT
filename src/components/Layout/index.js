import React from 'react'
import Nav from '../Nav/index'
import {Container, Row} from "react-bootstrap";

const Layout = props => {

    return (
        <div className="container">
            <div className="header clearfix">
                <Nav/>
                <h3 className="text-muted">Pizza App</h3>
            </div>
            <div className="jumbotron">
                <h1 className="display-3">Pizza constructor</h1>
                {/*<p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus*/}
                {/*    ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>*/}
                {/*<p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>*/}
            </div>
            <main>
                <Container>
                    <Row>
                        {props.children}
                    </Row>
                </Container>
            </main>
            <footer className="footer">
                <p>© Company 2020</p>
            </footer>
        </div>
    );
};
export default Layout

