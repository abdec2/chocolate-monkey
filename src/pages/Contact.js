import { useState } from 'react'
import Hero from '../components/Hero'
import Preloader from './../components/Preloader'
import "./contact.css"
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch("https://formsubmit.co/ajax/sweets@chocolatemonkeys.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        })
            .then(response => response.json())
            .then(data => {
                setMsg(data.message)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
            });
    }

    return (
        <>
            <Hero />
            {loading && (<Preloader />)}
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <div className="intro text-center">
                                <h3 className="mt-3 mb-0">Get In Touch</h3>
                            </div>
                            <form id="contact-form" className="item-form card no-hover" onSubmit={(e) => handleSubmit(e)} >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Name" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required="required" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Message" cols="30" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-custom w-100 mt-3 mt-sm-4" type="submit"><i className="icon-paper-plane mr-2"></i>Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-message">{msg}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact