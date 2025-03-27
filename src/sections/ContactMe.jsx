import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const ContactMe = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_nliutbt',
            'template_sqrbevd', 
            {
                from_name: form.name,
                to_name: 'Kushal',
                from_email: form.email,
                message: form.message,
                to_email: 'kpshekhawat678@gmail.com'
            },
            'lcTtij2A9UUmg5UZc'
        )
        .then(() => {
            toast.success('Hey! Thank you for the message 😊!', {
                position: "top-right",
                duration: 3000,
            });

            setForm({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            toast.error('Something went wrong! Please try again 😞', {
                position: "top-right",
                duration: 3000,
            });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <section className="c-space my-20" id="contact">
            <Toaster position="top-right" richColors /> {/* Sonner Toaster */}
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Want to connect or send a message? Feel free to reach out! Whether you're looking to build a new website,
                        enhance your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., Michael Jordan"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., airjordan@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Let's Talk! Share Your Thoughts or Questions...."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
