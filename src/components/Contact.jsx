const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };

        try {
            const response = await fetch('http://localhost:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            //todo: handle response
            const data = await response.json();
            console.log(data);
            window.alert('Message sent successfully!');
        } catch (error) {
            //todo: handle error
            console.error('Error sending message:', error);
            window.alert('Failed to send message.');
        }
    };

    return (
        <div className="mx-auto max-w-screen-md mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-5">Contact Me</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        placeholder="Your subject"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;