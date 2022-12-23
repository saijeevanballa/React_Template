import React from 'react'
import { Link } from 'react-router-dom'

import "./styles.css"

import ErrorLoader from './../../assets/images/ErrorLoader.gif'

function PageNotFound() {
    return (
        <section className="d-flex justify-content-center">
            <div className="">
                <div className="d-flex justify-content-center" >
                    <img src={ErrorLoader} alt='project'/>
                </div>
                    <p className="">Sorry, we couldn't find this page.</p>
                    <p className="">But dont worry, you can find plenty of other things on our homepage.</p>
                   <div className="d-flex justify-content-center">
                   <button className="btn btn-primary btn-lg"> <Link to="/" className="btn-txt">Back to homepage</Link> </button>
                    </div> 
            </div>
        </section>
    )
}

export default PageNotFound