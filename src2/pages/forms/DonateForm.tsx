

export default function DonateForm() {
  return (
    <div className="text-white rounded-md overflow-hidden">
      <div className="bg-orange-500 px-6 py-10">
        <h3 className="text-2xl font-bold">
          Your generosity gives children a smile, support our work!
        </h3>
        <span className="block my-2">Amount you want to donate</span>
        <input className="h-[2.7rem] w-full border rounded px-3" placeholder="Amount" />
        <span className="block my-2">Causes</span>
        <input className="h-[2.7rem] w-full border rounded px-3" placeholder="Amount" />
      </div>
      <div className="bg-cyan-500 p-6">
        <span className="block text-2xl font-bold mb-5">
          Donaer Information
        </span>
        <input className="h-[2.7rem] w-full border rounded px-3 mb-5" placeholder="Full Name" />
        <input className="h-[2.7rem] w-full border rounded px-3 mb-5" placeholder="E-mail Address" />
        <input className="h-[2.7rem] w-full border rounded px-3 mb-5" placeholder="Country" />
        <input className="h-[2.7rem] w-full border rounded px-3 mb-5" placeholder="Address" />
        <span className="block">
          You will be redirected to secure payment website
        </span>
        <button className="w-full py-2 bg-orange-500 rounded mt-2">Submit</button>
      </div>
    </div>
  )
}
