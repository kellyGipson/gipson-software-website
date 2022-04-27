import React from 'react'

const DevProcess = (props: {hrColor: string}) => {
  return (
    <article id="devProcess" className="flex flex-col justify-center items-center mx-8">
      <h1 className="text-2xl m-8"><span className="text-cinnabar-300 font-bold">AGILE</span> Development Process</h1>
      <img src={require("../assets/1000w_agile_image_transparent.webp")} alt="AGILE" className="w-96"/>
      <ul className="list-decimal text-left max-w-xl my-16">
        <li className="text-cinnabar-300 font-bold">Requirements</li>
        <p>During the requirements phase, we will collect images, text that the client would like on the page, as well as discuss other features the client would like to include.</p>
        <li className="text-orange-400 font-bold">Design</li>
        <p>In the design phase, the required items will be taken into account, and added to a preview image to lay out the structure that the website will contain. Designs are then sent to the client for sign off, and we move into the next phase.</p>
        <li className="text-yellow-400 font-bold">Development</li>
        <p>Now the website will be crafted using the tech that is suitable for the application. You can take a look at the technology we use in the next section.</p>
        <li className="text-blue-500 font-bold">Testing</li>
        <p>The website will now be tested to be sure that it is functioning properly. We will use Android phones, tablets, windows laptops as well as desktop computers for testing. Apple devices will be tested in the future.</p>
        <li className="text-teal-300 font-bold">Deployment</li>
        <p>After testing has been deemed successful, we will deploy the website onto a webhost. The webhost we use is BlueHost.</p>
        <li className="text-green-400 font-bold">Review</li>
        <p>Now that the website is live and active, we will review with the client, and if necessary and there are any concerns, the AGILE cycle will start back at step one.</p>
      </ul>
      <div className={`w-full ${props.hrColor} h-px transition-all`}/>
    </article>
  )
}

export default DevProcess