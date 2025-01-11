import Social from "@components/Social";
import { Contact } from "@shared/model";

const ContactPage = () => {

  return (
    <div className="max-w-4xl mx-auto p-5">

    <div className="text-center">
      <div className="text-4xl  text-accent">Contact Me</div>
      <div className=" text-lg mt-4 text-gray-400">If you have any questions, feel free to contact me. I am available on almost every social media. You can message me, I will reply within 24 hours.</div>
        
        <div className="mt-5 flex justify-center">
          <div className="text-lg text-accent">Email:&nbsp;</div>
          <div className="text-lg text-gray-400"> {Contact.email}</div>
        </div>
        <div className="flex justify-center">
          <div className="text-lg text-accent">Address:&nbsp;</div>
          <div className="text-lg text-gray-400"> {Contact.address}</div>
        </div>

        <Social containerStyles='flex justify-center mt-8 gap-6' iconStyles="w-9 h-9 pt-1 hover:border-2 hover:border-white hover:bg-white text-white hover:text-black rounded-full flex justify-center item-center text-accent hover:transition-all duration-500"></Social>
    </div> 

    <hr className="border-t-2 border-gray-300 my-4" />
      
    <div className="min-h-screen bg-primary text-white flex items-center justify-center mt-5">
      <div className="w-full max-w-4xl bg-primary p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-accent mb-6">Fill Form To Contact Me</h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSci_F_BKCRdPEm0-xMsCF6tm1zjhb43DMn1t_aB8SIrKwPpOw/viewform?usp=dialog"
          className="w-full min-h-screen bg-primary rounded-lg border-2 border-primary"
        >
          Loading…
        </iframe>
      </div>
    </div>


    </div>
  );
}

export default ContactPage
