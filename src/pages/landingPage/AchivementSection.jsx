import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

export default function AchivementSection() {
  const [amount, setAmount] = useState(10);
  return (
    <div
      className="md:flex text-white md:px-[10%] px-4 py-32 my-16"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/orphan-1139038_1280.jpg"
        })`,
      }}
    >
      <div className="flex-1">
        <h3 className="text-5xl font-bold mb-2">
          <span className="text-rose-600 text-6xl font-bold">35,123</span> Kids
          Reached So Far!
        </h3>
        <p>
          Together, we can create a world where every child has the chance to
          grow up in a loving and supportive environment. Join us at Hopeful
          Hearts Foundation in making a lasting impact on the lives of orphaned
          and street children.
        </p>
        <div className="flex mt-10">
          <div className="flex-1">
            <div className="mb-10">
              <span className="text-2xl">RAISED</span>
              <p className="text-4xl font-bold mt-2">$550,000</p>
            </div>
            <div className="">
              <span className="text-2xl">GOAL</span>
              <p className="text-4xl font-bold mt-2">$90,000</p>
            </div>
          </div>
          <div className="flex-1">
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="400"
                cy="400"
                fill="none"
                r="208"
                stroke-width="30"
                stroke="rgb(225, 29, 79)"
                stroke-dasharray="1000 1400"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1 md:ml-10 md:mt-0 mt-8">
        <div className="bg-primary md:p-10 p-5 rounded-xl">
          <p>Please Donate Today!</p>
          <div className="flex items-center">
            <div class="flex items-center">
              <input
                type="radio"
                value=""
                name="donation-type"
                class="w-14 h-14 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-license"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Weekly
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                value=""
                name="donation-type"
                class="w-14 h-14 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-license"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Monthly
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                value=""
                name="donation-type"
                class="w-14 h-14 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="horizontal-list-radio-license"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yearly
              </label>
            </div>
          </div>
          <div className="flex items-center border bg-white/50 rounded-full mt-8">
            <div className="h-14 w-14 border-2 text-2xl border-rose-600 flex items-center justify-center rounded-full">
              <FaDollarSign />
            </div>
            <span className="text-2xl px-5">{amount}</span>
          </div>
          <div className="my-6">
            <h3 className="text-xl mb-3">How much to donate?</h3>
            <div className="flex justify-between">
              {[...new Array(5)].map((_, index) => (
                <div
                  className="bg-sky-600 cursor-pointer hover:bg-rose-600 rounded-md md:px-6 px-4 md:py-4 py-2"
                  onClick={() => setAmount(index * 10 + 10)}
                >
                  ${index * 10 + 10}
                </div>
              ))}
            </div>
            <button className="bg-sky-600 px-6 py-3 rounded-xl mt-7">
              Custom Amount
            </button>
          </div>
          <button className="bg-rose-600 text-white px-6 py-4 rounded-3xl">
            DONATE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
