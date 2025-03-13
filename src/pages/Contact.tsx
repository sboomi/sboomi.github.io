import React from "react";
import Layout from "../components/Layout";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);
  if (state.succeeded) {
    return <p>Thank you for your message!</p>;
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        {/* Email section */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="yourname@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Enter title"
            required
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2 mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type your message here"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
