import React from "react";

const Footer = () => (

    <div className="page-footer text-center font-small info-color-dark">

        <div className="rgba-stylish-strong">
            <div className="pt-4">
                <a className="btn btn-outline-white"
                    href="https://mdbootstrap.com/docs/jquery/getting-started/download/"  role="button">Download
                    MDB
                    <i className="fas fa-download ml-2"></i>
                </a>
                <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/"
                     role="button">Start
                    free tutorial
                    <i className="fas fa-graduation-cap ml-2"></i>
                </a>
            </div>
            <div className="my-4">
                <div className="pb-4">
                    <a href="https://www.facebook.com/mdbootstrap" >
                        <i className="fab fa-facebook-f mr-3"></i>
                    </a>
                    <a href="https://twitter.com/MDBootstrap" >
                        <i className="fab fa-twitter mr-3"></i>
                    </a>

                    <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" >
                        <i className="fab fa-youtube mr-3"></i>
                    </a>

                    <a href="https://plus.google.com/u/0/b/107863090883699620484" >
                        <i className="fab fa-google-plus-g mr-3"></i>
                    </a>

                    <a href="https://dribbble.com/mdbootstrap" >
                        <i className="fab fa-dribbble mr-3"></i>
                    </a>

                    <a href="https://pinterest.com/mdbootstrap" >
                        <i className="fab fa-pinterest mr-3"></i>
                    </a>

                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" >
                        <i className="fab fa-github mr-3"></i>
                    </a>

                    <a href="http://codepen.io/mdbootstrap/" >
                        <i className="fab fa-codepen mr-3"></i>
                    </a>
                </div>
            </div>
        </div>
    
    
        <div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                    &copy; {1900 + new Date().getYear()}, made by  
                    <a rel="noreferrer" href="https://farid.212.dev/" target="_blank" style={{color: "yellow", marginLeft: "3px", marginRight: "3px"}}>
                    {" "}Farid212{" "}
                    </a>
                    for a better web.
                </div>
            </div>
        </div>
    </div>
);

export default Footer
