import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5314678e-98c3-442c-9fb5-2f421b89e82b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div>
      <section className="body-font relative mt-20  text-gray-400">
  <div className="container mx-auto px-5 py-24">
    <div className="mb-12 flex w-full flex-col text-center">
      <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
        Contact Us
      </h1>
      <p className="mx-auto text-base leading-relaxed lg:w-2/3">
  
      </p>
    </div>
    <div className="mx-auto md:w-2/3 lg:w-1/2">
      <form onSubmit={onSubmit} className="-m-2 flex flex-wrap">
        {/* form */}
        <div className="w-1/2 p-2">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Name
            </label>
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Email
            </label>
          </div>
        </div>

        <div className="mt-4 w-full p-2">
          <div className="relative">
          <select   id="text" name="text" class="bg-gray-50 border border-gray-300 text-indigo-500 text-sm rounded-lg focus:ring-blue-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-blue-500">
    <option  selected>Choose a enquiry</option>
    <option value="Potoshop">Potoshop</option>
    <option value="Potoshop">React</option>
    <option value="Node js">Node js</option>
    <option value="Html">Html</option>
    <option value="Css">Css</option>
    <option value="Javascrpit">Javascrpit</option>
  </select>
            <label
              htmlFor="option"
              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
             Select an option
            </label>
          </div>
        </div>
        <div className="mt-4 w-full p-2">
          <div className="relative">
            <textarea
              id="message"
              name="message"
              className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder="Message"
              defaultValue={""}
              required
            />
            <label
              htmlFor="message"
              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Message
            </label>
          </div>
    

        </div>
        <div className="w-full p-2">
          <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Button
          </button>
          <span>{result}</span>
        </div>
        {/* footer */}
        <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
          <a className="text-indigo-400">vsr81150@gmail.com</a>
      
        
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
