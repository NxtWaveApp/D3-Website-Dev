import React, {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, message);
    }

    return (<div className="flex flex-col items-center bg-gray-800">
        <div className="w-full h-44 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-white text-3xl font-bold mb-4">Get in touch with us today!</h1>
                <p className="text-white">At Deep Data Detectives (D3), we’re always here to help.</p>
            </div>
        </div>
        <div>
            <iframe width={1024} height={576}
                    src="https://drive.google.com/file/d/1Y9TF0immtBzNQFfpGWVYatbnhpPnOuS9/preview"/>
        </div>
        <div className="my-8 space-y-2 w-3/4">
            <p className="text-white">Whether you have a question, need assistance, or want to learn more about our
                products and services, our friendly and knowledgeable team is ready to assist you.</p>
            <p className="text-white">Please fill out the form below with your contact information and a brief message,
                and we’ll get back to you as soon as possible.</p>
            <p className="text-white">We look forward to connecting with you soon!</p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <label className="text-white">Name</label>
                    <input type="text" className="border-2 border-gray-400 rounded-md p-2" value={name}/>
                    <label className="text-white">Email</label>
                    <input type="text" className="border-2 border-gray-400 rounded-md p-2" value={email}/>
                    <label className="text-white">Phone</label>
                    <input type="text" className="border-2 border-gray-400 rounded-md p-2" value={phone}/>
                    <label className="text-white">Your Message</label>
                    <textarea className="border-2 border-gray-400 rounded-md p-2" value={message}/>
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>

    </div>);
}

export default Contact;
