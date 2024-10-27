function Contacts() {
    return (
      <section id="contacts" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-left mb-1">Name</label>
              <input type="text" className="p-3 rounded border border-gray-300" placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-left mb-1">Email</label>
              <input type="email" className="p-3 rounded border border-gray-300" placeholder="Your Email" />
            </div>
            <div className="flex flex-col">
              <label className="text-left mb-1">Message</label>
              <textarea className="p-3 rounded border border-gray-300" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contacts;
  