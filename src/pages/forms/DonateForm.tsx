import FormInput from "./FormInput";

export default function DonateForm() {
  return (
    <div className="bg-orange-600 text-white p-5">
       <div className="">
        <h3 className="text-3xl">DONATE TODAY: SAVE A LIFE</h3>
        Vulnerable children need you more than ever.
        <p>
          Right now, children are growing up against the backdrop of hunger, conflict and natural disasters. Your gift today can help make change that protects the lives of children, families and their communities.
        </p>
       </div>
       <div className="my-8">
        <h3 className="text-3xl">CHOOSE YOUR GIFT TYPE</h3>
       </div>
       <div className="">
        <h3 className="text-2xl mb-2">ENTER YOUR GIFT AMOUNT</h3>
        <div className="">
          <FormInput placeholder="Amount" />
        </div>
       </div>
       <div className="my-8">
        <h3 className="text-3xl">ENTER YOUR BILLING INFORMATION</h3>
        <div className="md:grid grid-cols-2 gap-3">
          {fields.map(field => (
          <FormInput placeholder={field.placeholder} />
          ))}
        </div>
       </div>
       <div className="">
        <h3 className="text-3xl">ENTER YOUR PAYMENT INFORMATION</h3>
       </div>
       <div className="my-8">
        <h3 className="text-3x">We take data and privacy seriously. Your payment information is secure and will be used only to process your gift.</h3>
       </div>
    </div>
  )
}

const fields = [
  {name:'name', placeholder:'Name'},
  {name:'email', placeholder:'E-mail Address'},
  {name:'name', placeholder:'Country'},
  {name:'name', placeholder:'Address'},
  {name:'name', placeholder:'Title'},
]