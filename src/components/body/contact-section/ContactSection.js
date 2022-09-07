
const ContactSection = () => {

    return(
        <div className="container">
            <div className="text-center">
                <h1 className="text-title">Contact Me</h1>
            </div>

            <div className="flex flex-col">
                <div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-input" placeholder="Input Your Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-input" placeholder="Your Valid Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Your Message</label>
                            <textarea className="form-input h-48" placeholder="Write Something...." />
                        </div>

                        <div className="form-group flex-row justify-end">
                            <button type="submit" className="form-input text-title p-4 w-32 focus:border-none hover:bg-primaryLight dark:hover:bg-primaryDark hover:text-bgLight2 dark:hover:text-bgDark2">Send</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mb-[5000px]" />
        </div>
    )

}

export default ContactSection