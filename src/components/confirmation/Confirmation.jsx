const Confirmation = ({ email, visible, setVisible }) => {
    return (
        <>
            {visible ?
                <section className="confirmation">
                    <img src="./public/assets/images/icon-success.svg" alt="success" />
                    <h1>Thanks for subscribing!</h1>
                    <p>
                        A confirmation email has been sent to <span className="email">{email}.</span> Please open it and click the button inside to confirm your subscription.
                    </p>
                    <button onClick={() => setVisible(false)}>Dismiss message</button>
                </section>
                :
                ""
            }
        </>
    )
}

export default Confirmation;
