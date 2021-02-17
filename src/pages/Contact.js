import React, {useState} from 'react'
import {navigate} from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "", 
        email: "", 
        message: "",
    })

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...formState,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }
    

    return (
        <Layout>
            <SEO title="Contact" />
            <div className="form-container">

                <h1 className="title">Reach out!</h1>

                <form 
                    onSubmit={handleSubmit} 
                    name="contact" method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    action="/thanks/"    
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="form-section">
                        <label htmlFor="name">Name:</label>
                        <input 
                            id="name" 
                            type="text" 
                            name="name"
                            required={true}
                            onChange={handleChange} 
                            value={formState.name} 
                            placeholder="Enter your name" 
                        />
                 
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email" 
                            type="email" 
                            name="email"
                            required={true}
                            onChange={handleChange} 
                            value={formState.email} 
                            placeholder="Enter your email" 
                        />
                    
                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            type="text" 
                            name="message"
                            required={true}
                            onChange={handleChange} 
                            value={formState.message} 
                            placeholder="Enter your message" 
                        />
                    

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>    
    )
}

export default Contact