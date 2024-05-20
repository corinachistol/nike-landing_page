import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"



const Hero = () => {
  return (
    <section 
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 max-container xl:flex-row"  
    >
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        
        <Button label="Shop now" iconUrl={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map( stat => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoe1} 
          alt="shoe collection" 
          width={610} 
          height={400} 
          className="object-contain relative z-10" />

        <div>
          
        </div>
      </div>

    </section>
  )
}

export default Hero