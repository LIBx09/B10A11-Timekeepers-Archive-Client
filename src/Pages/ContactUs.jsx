import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset(); // Reset form after successful submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] px-6 py-20 text-white">
      <div className="max-w-3xl mx-auto bg-black bg-opacity-80 p-10 rounded-xl shadow-lg">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl font-bold text-center text-[#AAA081] mb-8">
            Contact Us
          </h1>
          <p className="text-gray-300 text-center mb-10">
            Have a question, suggestion, or just want to connect? Fill out the
            form below and we’ll get back to you as soon as possible.
          </p>
        </Fade>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring focus:border-[#AAA081]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring focus:border-[#AAA081]"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Subject</label>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring focus:border-[#AAA081]"
              placeholder="Message subject"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring focus:border-[#AAA081]"
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#AAA081] hover:bg-[#99906f] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-400 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
