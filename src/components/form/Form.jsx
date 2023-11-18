import { useState } from "react";

const Form = ({ email, setEmail, visible, hideForm }) => {
    const [emailValid, setEmailValid] = useState(true);
    // const [display, setDisplay] = useState('');

    const validateEmail = () => {
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.indexOf('.')) {
            return setEmailValid(false)
        } else {
            setEmailValid(true)
        }
    }

    const handleChange = (e) => {
        const inputEmail = e.target.value

        setEmail(inputEmail)

        if (!inputEmail) {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setEmail('')

        // setTimeout(() => {
        //     setDisplay('none')
        // }, 350)

        setTimeout(() => {
            hideForm()
        }, 400)
    }

    return (
        // <form action="submit" className='sign-up' style={{ display }} onSubmit={handleSubmit}>
        <>
            {!visible ?
                <form action="submit" className='sign-up' onSubmit={handleSubmit}>
                    <div className='img-container'>
                        <img src="./src/assets/images/illustration-sign-up-mobile.svg" alt="mobile illustration" className='mobile-illustration' />
                        <img src="./src/assets/images/illustration-sign-up-desktop.svg" alt="desktop illustration" className='desktop-illustration' />
                    </div>

                    <div className='content-container'>
                        <div className='description'>
                            <h1>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>
                            <ul className='list-container'>
                                <li>
                                    <img src='./src/assets/images/icon-list.svg' alt='list' />
                                    <p>Product discovery and bulding what matters</p>
                                </li>
                                <li>
                                    <img src='./src/assets/images/icon-list.svg' alt='list' />
                                    <p>Measuring to ensure updates are a success</p>
                                </li>
                                <li>
                                    <img src='./src/assets/images/icon-list.svg' alt='list' />
                                    <p>And much more!</p>
                                </li>
                            </ul>
                        </div>

                        <div className='form-container'>
                            <div className='input-container'>
                                <div className="label-container">
                                    <label htmlFor="email">Email address</label>
                                    {!emailValid ?
                                        <span className="validation-message">Valid email required</span>
                                        :
                                        ""
                                    }
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="email@company.com"
                                    value={email}
                                    onChange={handleChange}
                                    data-valid={emailValid}
                                    required
                                />
                            </div>
                            <button onClick={validateEmail}>Subscribe to monthly newsletter</button>
                        </div>
                    </div>
                </form>
                :
                ""
            }
        </>
    )
}

export default Form