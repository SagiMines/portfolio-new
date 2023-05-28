import { IoLogoWhatsapp } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const successMessage = () => toast.success('Message sent successfully!');
const errorMessage = () => toast.error('Error! Try again later');

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    userName: '',
    userEmail: '',
    message: '',
  });

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            const blankedValues = { userName: '', userEmail: '', message: '' };
            setFormValues({ ...blankedValues });
            successMessage();
          },
          error => {
            console.log(error);
            errorMessage();
          }
        );
    }
  };

  return (
    <div className="text-center min-safe-h-screen max-w-7xl px-10 mx-auto ">
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="mt-10 md:text-4xl sm:text-3xl text-2xl font-semibold">
          I've got just what you need.{' '}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
        <div className="md:space-y-10 space-y-5">
          <div className="contactMeInfoContainer">
            <IoLogoWhatsapp className="contactMeInfoIcon" />
            <Link href="https://api.whatsapp.com/send?phone=0528850658">
              <p className="contactMeInfo">0528850658</p>
            </Link>
          </div>
          <div className="contactMeInfoContainer">
            <HiMail className="contactMeInfoIcon" />
            <Link href="mailto:sagi1236@gmail.com">
              <p className="contactMeInfo">sagi1236@gmail.com</p>
            </Link>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className=" max-w-3xl flex flex-col space-y-2 mx-auto">
            <input
              value={formValues.userName}
              onChange={e =>
                setFormValues({ ...formValues, userName: e.target.value })
              }
              name="user_name"
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              value={formValues.userEmail}
              onChange={e =>
                setFormValues({ ...formValues, userEmail: e.target.value })
              }
              name="user_email"
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
            <textarea
              value={formValues.message}
              onChange={e =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              name="message"
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] sm:py-5 sm:px-10 py-2 px-5 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactMe;
