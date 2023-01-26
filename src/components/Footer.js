import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* -- Footer -- */}
            <footer className="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
        
                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target={"blank"} href="https://www.linkedin.com/in/rohit-parmar-b175151b9" role="button"
                        ><i className="fab fa-linkedin-in"></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target={"blank"} href="https://github.com/ItsRohitParmar" role="button"
                        ><i className="fab fa-github"></i>
                        </a>

                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-floating m-1"  href="/" role="button"
                        ><i className="fab fa-google"></i></a>

                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                        ><i className="fab fa-instagram"></i>
                        </a>
                    </section>
                    {/* <!-- Section: Social media --> */}


                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" style= {{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2023 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">Texteditor.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </div>
            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}



