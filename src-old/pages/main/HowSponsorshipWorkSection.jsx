

export default function HowSponsorshipWorkSection() {
  return (
    <div className="md:flex items-center md:px-[8%] px-3 md:py-10 py-6">
      <div className="flex-1">
        <img src={process.env.PUBLIC_URL+'./images/child-1.jpg'} alt="" />
      </div>
      <div className="flex-1 bg-white shadow-md md:px-8 px-3 py-5 md:ml-[-5rem]">
        <h3 className="md:text-4xl text-2xl font-bold mb-2">How Sponsorship Works</h3>
        <p>
          Our sponsorship program is designed to be both effective and transparent. When you choose to sponsor a street child's education, your contribution will directly fund their schooling, including tuition fees, learning materials, uniforms, and other essentials. We partner with local schools and organizations that prioritize the welfare and education of these children, ensuring that your support reaches those who need it the most.
        </p>
        <button className="bg-rose-600 text-white px-5 py-2 mt-6">Sponsor a child</button>
      </div>
    </div>
  )
}
