import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:sagi1236@gmail.com?subject=${formData.subject}&body=${formData.name}`;
  };

  return (
    <div className="text-center min-safe-h-screen max-w-7xl px-10 mx-auto items-center ">
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
            <PhoneIcon className="contactMeInfoIcon" />
            <p className="contactMeInfo">0528850658</p>
          </div>
          <div className="contactMeInfoContainer">
            <EnvelopeIcon className="contactMeInfoIcon" />
            <p className="contactMeInfo">sagi1236@gmail.com</p>
          </div>
          <div className="contactMeInfoContainer">
            <MapPinIcon className="contactMeInfoIcon" />
            <p className="contactMeInfo">Tel Aviv</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2 sm:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] sm:py-5 sm:px-10 py-2 px-5 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
