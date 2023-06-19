import DonateForm from "./forms/DonateForm"


export default function DonatePage() {
  return (
    <>
    <div className="bg-red-500 px-[8%] pt-[4rem] pb-[10rem] text-white"
      style={{
        backgroundImage:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(${process.env.PUBLIC_URL+'/images/bg.png'})`,
        backgroundSize:'100% 100%'
      }}
    >
      <div className="w-[70%]">
        <h1 className="text-6xl font-bold">DONATE TODAY AND SAVE A LIFE</h1>
        {/* */}
      </div>
    </div>
    <div className="md:flex md:px-[8%] px-3 py-4">
      <div className="flex-1">
        <p className="">
          Vulnerable children need you more than ever.
          Right now, children are growing up against the backdrop of hunger, conflict and natural disasters. Your gift today can help make change that protects the lives of children, families and their communities.
        </p> 
      </div>
      <div className="flex-1 mt-[-6rem]">
        <DonateForm />
      </div>
    </div>
    </>
  )
}


const data = [
  {
    title:'',
    text:`Once you donate, an account with a temporary password will be created for you in our Supporter Center. Simply log in to securely view this as well as any future gifts and so much more. You'll also start receiving email news of your generosity in action, including inspiring children's stories, emergency alerts and ways to get involved.`
  },
  {
    title:'',
    text:`
    By making a donation, you give us permission to use your gift, combined with those of other donors, as part of our matching gift fund to inspire more donors like you to support our mission. Whether or not your gift is matched, it will still be tax deductible to the full extent allowable by IRS regulations in the same year it was made. If you donate after December 31, your donation will be matched in the following year.`
  },
  {
    title:'',
    text:`
    For monthly gifts only: By providing my credit card information, I authorize Save the Children Federation, Inc. to charge my credit card on a recurring basis in the amount indicated above. I understand that this authorization shall remain in effect until I notify Save the Children at least 30 days prior to the upcoming charge that I wish to end this agreement. I understand my credit card issuer may impose additional requirements and I should contact the credit card issuer for further information. A record of my contributions will appear on my billing statement.`
  },
  
]