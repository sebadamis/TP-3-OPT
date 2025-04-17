import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./About.css"
// import setTimeout from './about'
import "./about.js"

function About() {
    // setTimeout();
    return (

        <>

            <NavBar/>

            
            <h1>403</h1>
            <div>
                <p>
                    &gt; <span>ERROR CODE</span>: "<i>HTTP 403 Forbidden</i>"
                </p>
                <p>
                    &gt; <span>ERROR DESCRIPTION</span>: "
                    <i>
                        Access Denied. You Do Not Have The Permission To Access This Page On
                        This Server
                    </i>
                    "
                </p>
                <p>
                    &gt; <span>ERROR POSSIBLY CAUSED BY</span>: [
                    <b>
                        execute access forbidden, read access forbidden, write access forbidden,
                        ssl required, ssl 128 required, ip address rejected, client certificate
                        required, site access denied, too many users, invalid configuration,
                        password change, mapper denied access, client certificate revoked,
                        directory listing denied, client access licenses exceeded, client
                        certificate is untrusted or invalid, client certificate has expired or
                        is not yet valid, passport logon failed, source access denied, infinite
                        depth is denied, too many requests from the same client ip
                    </b>
                    ...]
                </p>
                <p>
                    &gt;{" "}
                    <span>
                        SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS
                    </span>
                        : [<a href="/">Home Page</a>, <a href="/">About Us</a>,{" "}
                    <a href="/">Contact Us</a>, <a href="/">Blog</a>...]
                </p>
                <p>
                    &gt; <span>HAVE A NICE DAY SIR AXLEROD :-)</span>
                </p>
            </div>



        </>

        
    )
}

export default About