import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_jeze7j1',
                'template_uptpfvh',
                form.current,
                'NljHGj6SrBO4Efbsj'
            )
            .then(
                () => {
                    alert('Message Successful sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    This is a paragraph
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <input placeholder="Message" name="message" required></input>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact