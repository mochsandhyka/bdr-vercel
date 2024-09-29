import { Link } from "react-scroll";
import { Footer } from "./Footer";
import { FormContact } from "./ContactUs";

export const Contact = () => {
  return (
    <div className=" bg-slate-200 mt-10 pt-10 " id="contact">
      <div className="contact container mx-auto pt-10 mt-10 mb-[500px] md:mb-[600px] lg:mb-[650px]">
        <div className="text-center">
          <h1 className="uppercase text-4xl font-black mb-3 text-center text-green-600">
            Contact Us
          </h1>
          <h1 className="text-lg md:text-5xl font-bold text-black md:w-[65apx]">
            If You have Any Query, feel <br /> Free To Contact Us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
          <div className="phone flex mb-4">
            <Link>
              <svg
                className="h-10"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" fill="#29BF08" />
                <path
                  d="M44.1081 39.6059C43.8574 41.7232 42.9216 43.6666 41.4755 45.0732C40.0294 46.4799 38.1719 47.2535 36.25 47.2497C25.0844 47.2497 16 37.1559 16 24.7497C15.9966 22.6142 16.6929 20.5503 17.9588 18.9436C19.2248 17.3368 20.9739 16.297 22.8794 16.0184C23.3612 15.9531 23.8492 16.0626 24.2704 16.3307C24.6917 16.5988 25.0236 17.011 25.2166 17.5059L28.1866 24.8731V24.8919C28.3344 25.2707 28.3954 25.6843 28.3642 26.0957C28.3331 26.5072 28.2107 26.9036 28.008 27.2497C27.9827 27.2919 27.9559 27.3309 27.9278 27.37L25 31.2262C26.0533 33.6044 28.292 36.07 30.4605 37.2434L33.8833 34.0075C33.9169 33.9761 33.9521 33.9469 33.9888 33.92C34.3 33.6894 34.658 33.5486 35.0305 33.5104C35.4029 33.4722 35.7781 33.5378 36.122 33.7012L36.1403 33.7106L42.7652 37.0091C43.2114 37.2228 43.5833 37.5912 43.8254 38.0593C44.0675 38.5274 44.1667 39.07 44.1081 39.6059Z"
                  fill="white"
                />
              </svg>
            </Link>
            <div className="detail-phone">
              <p className="ml-10 text-sm md:text-base text-black font-bold">
                Call to ask any question
              </p>
              <p className="ml-10 text-sm md:text-base text-[#29BF08] font-bold">
                +(62)(341) - 400799
              </p>
            </div>
          </div>
          <div className="email flex mb-4">
            <Link>
              <svg
                className="h-10"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" fill="#29BF08" />
                <path
                  d="M45 19C45 17.35 43.65 16 42 16H18C16.35 16 15 17.35 15 19V37C15 38.65 16.35 40 18 40H42C43.65 40 45 38.65 45 37V19ZM42 19L30 26.5L18 19H42ZM42 37H18V22L30 29.5L42 22V37Z"
                  fill="white"
                />
              </svg>
            </Link>
            <div className="detail-email">
              <p className="ml-10 text-sm md:text-base text-black font-bold">
                Email to get free quote
              </p>
              <p className="ml-10 text-sm md:text-base text-[#29BF08] font-bold">
                zainur0468@gmail.com
              </p>
            </div>
          </div>
          <div className="email flex mb-4">
            <Link>
              <svg
                className="h-10"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" fill="#29BF08" />
                <path
                  d="M30 33C33.309 33 36 30.309 36 27C36 23.691 33.309 21 30 21C26.691 21 24 23.691 24 27C24 30.309 26.691 33 30 33ZM30 24C31.6545 24 33 25.3455 33 27C33 28.6545 31.6545 30 30 30C28.3455 30 27 28.6545 27 27C27 25.3455 28.3455 24 30 24Z"
                  fill="white"
                />
                <path
                  d="M29.1301 44.721C29.384 44.9023 29.6882 44.9998 30.0001 44.9998C30.3121 44.9998 30.6163 44.9023 30.8701 44.721C31.3261 44.3985 42.0436 36.66 42.0001 27C42.0001 20.3835 36.6166 15 30.0001 15C23.3836 15 18.0001 20.3835 18.0001 26.9925C17.9566 36.66 28.6741 44.3985 29.1301 44.721ZM30.0001 18C34.9636 18 39.0001 22.0365 39.0001 27.0075C39.0316 33.6645 32.4181 39.642 30.0001 41.6025C27.5836 39.6405 20.9686 33.6615 21.0001 27C21.0001 22.0365 25.0366 18 30.0001 18Z"
                  fill="white"
                />
              </svg>
            </Link>
            <div className="detail-email">
              <p className="ml-10 text-sm md:text-base text-black font-bold">
                Visit Our Office
              </p>
              <p className="ml-10 text-sm md:text-base text-[#29BF08] font-bold">
                Jl. Bunga Maya 16 Malang- indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
      <FormContact />

      <Footer />
    </div>
  );
};
