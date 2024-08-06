import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuCalendarCheck, LuSend } from "react-icons/lu";
import Button from "./Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Tile from "./Tile";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = () => {
    if (!form.current) {
      console.log("Form reference is null");
      return;
    }

    setLoading(true);
    setMessageSent(false);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("Message sent!", result.text);
        setLoading(false);
        setMessageSent(true);
        form.current?.reset();
      },
      (error) => {
        console.error(error.text);
        setLoading(false);
      }
    );
  };

  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.9, 1]), {
    damping: 10,
    stiffness: 100,
  });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 1]), {
    damping: 10,
    stiffness: 100,
  });

  const contactOpacity = useSpring(
    useTransform(scrollYProgress, [0.25, 0.75], [0, 1]),
    {
      damping: 10,
      stiffness: 100,
    }
  );
  const contactY = useSpring(
    useTransform(scrollYProgress, [0.25, 0.75], [50, 0]),
    {
      damping: 10,
      stiffness: 100,
    }
  );

  return (
    <section
      id="contact"
      className="relative mb-4 lg:mb-12 scroll-mt-36 pt-4 lg:pt-1"
    >
      <div className="absolute inset-0 w-full h-full grid grid-cols-11 lg:grid-cols-20 overflow-hidden z-0">
        {Array.from({ length: 20 * 24 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold my-6 dark:text-neutral-900 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div className="w-full md:w-2/3" style={{ opacity, scale }}>
            <form
              ref={form}
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail();
              }}
              className="bg-neutral-50 text-neutral-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full mt-1 p-2 border border-neutral-300 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full mt-1 p-2 border border-neutral-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-1 p-2 border border-neutral-300 rounded-md"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <Button
                text="Send Message"
                loading={loading}
                onClick={sendEmail}
                icon={<LuSend />}
                className="mt-4 py-2 text-sm"
              />
              {messageSent && (
                <p className="mt-4 text-lime-500 dark:text-neutral-900">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3"
            style={{ opacity: contactOpacity, y: contactY }}
          >
            <div className="mb-8">
              <h3 className="text-2xl dark:text-neutral-900 font-semibold mb-4">
                Schedule a Meeting
              </h3>
              <Button
                text="Schedule a Meeting"
                url="https://calendly.com/aa4357-drexel"
                icon={<LuCalendarCheck />}
                className="py-2 text-sm"
              />
            </div>
            <div className="mb-8">
              <h3 className="text-2xl dark:text-neutral-900 font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-4 dark:text-neutral-900">
                Email:{" "}
                <a
                  href="mailto:aa4357@drexel.edu"
                  className="text-lime-500 dark:text-neutral-900 hover:underline"
                >
                  aa4357@drexel.edu
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/asad-mehboob-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com/Asadali242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-50 hover:text-neutral-300 dark:text-neutral-900"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
