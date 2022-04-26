import CodeIcon from "../assets/CodeIcon"
import TechnologyLi from "./TechnologyLi"

const TechUsed = () => {
  return (
    <article id="techUsed" className="flex flex-col items-center text-center my-8">
      <CodeIcon />
      <h1 className="text-2xl m-4">Technology We Use</h1>
      <div className="my-8 max-w-xl">
        <TechnologyLi item="HTML5" description="HTML5 is the backbone of every website. It is used for organizing portions of the website, and for importing images, fonts etc."/>
        <TechnologyLi item="TailwindCSS" description="TailwindCSS is a framework for CSS3 that allows for faster delivery of styling, resulting in an overall faster development process and a product being shipped to the end-user faster as well."/>
        <TechnologyLi item="TypeScript" description="TypeScript is JavaScript, but with declarative types. It helps to eliminate bugs right from the start which results in a properly working codebase first try."/>
        <TechnologyLi item="React" description="React is a framework for JavaScript that allows for creating UI's rapidly, as well as forcing state-immutibility which keeps bugs at bay."/>
        <TechnologyLi item="WebP" description="We exclusively use WebP formatted images. WebP images are smaller than JPG formatted images, yet retain lossless quality like a PNG or TIFF image. This ensures fast site loading while keeping good image quality."/>
      </div>
    </article>
  )
}

export default TechUsed