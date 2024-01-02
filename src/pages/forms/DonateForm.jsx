import { FiLock } from "react-icons/fi";
import { Heading3 } from "../../util/HeadingTitles";
import { Input, TextAreaInput } from "./Input";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";

export default function DonateForm() {
  const [amount, setAmount] = useState(10);

  return (
    <div className="md:px-[20%] px-4 md:my-8 my-4">
      <div className="bg-sky-600 text-white md:p-10 p-5 rounded-md">
        {/* payment details */}
        <div className="mb-8">
          <Heading3 text="Amount" cName="mx-6" />
          <div className="md:w-max w-full flex items-center border border-sky-500 bg-sky-700 rounded-full mt-4">
            <div className="md:h-14 md:w-14 h-10 w-10 text-2xl bg-sky-500 flex items-center justify-center rounded-full">
              <FaDollarSign />
            </div>
            <div className="flex-1">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="md:h-14 h-10 w-full focus:outline-none focus:border-none px-6 md:text-2xl bg-transparent border-none"
              />
            </div>
          </div>
        </div>
        {/* payment details */}
        <div className="mb-8">
          <Heading3
            text="Choos you Payment Method"
            cName="pb-3 border-b mb-5"
          />
          <div className="flex">
            <div className="md:h-14 h-10 w-24 mr-6 rounded overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/images/icons/mastercard.jpg"}
                alt=""
              />
            </div>
            <div className="md:h-14 h-10 w-24 mr-6 rounded overflow-hidden bg-white p-2">
              <img
                src={process.env.PUBLIC_URL + "/images/icons/visa.png"}
                alt=""
              />
            </div>
            <div className="md:h-14 h-10 w-24 mr-6 rounded overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/images/icons/mgurush.png"}
                alt=""
              />
            </div>
            <div className="md:h-14 h-10 w-24 mr-6 rounded overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/images/icons/momo.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <Heading3 text="Personal Information" cName="pb-3 border-b mb-5" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input
              name="first_name"
              label="first_name"
              placeholder="First name"
            />
            <Input name="last_name" label="last_name" placeholder="Last name" />
          </div>
          <Input
            name="email"
            label="E-mail address"
            placeholder="example@gmail.com"
          />
          <TextAreaInput
            name="comment"
            label="Comment*"
            placeholder="Message..."
          />
        </div>
        {/* Credit card info */}
        <div className="mb-6">
          <Heading3 text="Credit card Information" cName="pb-3 border-b mb-5" />
          <span className="flex mb-4 items-center">
            <FiLock /> This is an SSL secured payment
          </span>
          <div className="md:flex">
            <div className="flex-1 md:mr-3">
              <Input
                name="card_no"
                label="Card number*"
                placeholder="Enter you card no"
              />
            </div>
            <Input name="cvc" label="CVC" placeholder="Enter cvc" />
          </div>
          <div className="md:flex">
            <div className="flex-1 md:mr-3">
              <Input
                name="card_name"
                label="Cardholder's name*"
                placeholder="Enter name on your card"
              />
            </div>
            <Input name="cvc" label="Expiration" placeholder="mm/yy" />
          </div>
        </div>
        {/*doner address */}
        <div className="mb-6">
          <Heading3 text="Address of the doner" cName="pb-3 border-b mb-5" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input name="country" label="Country" placeholder="Country" />
            <Input name="city" label="City" placeholder="City" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input name="phone" label="Tell No" placeholder="Your phone No" />
            <Input name="zip" label="Zip Code*" placeholder="Zip Code" />
          </div>
        </div>
        <div className="flex items-center">
          <input className="h-6 w-6 mr-3" name="subcribe" type="checkbox" />
          <label htmlFor="subcribe">
            Follow our promotions by subcribing to our newsletter
          </label>
        </div>
        <button className="bg-rose-600 text-white w-full py-2 mt-8">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}
