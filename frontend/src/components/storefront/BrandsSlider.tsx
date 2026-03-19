import { brands } from '../../lib/data';
import SectionContainer from './SectionContainer';

export default function BrandsSlider() {
  return (
    <SectionContainer
      id="brands"
      className="bg-gradient-radial from-[#784b2b] to-[#0b0f14]"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
        Choose By Brands
      </h2>
      <div className="scrollbar-custom -mx-4 flex gap-8 overflow-x-auto px-4 py-6 md:gap-10">
        {brands.map((brand) => (
          <div key={brand.name} className="min-w-[160px] flex-shrink-0 text-center md:min-w-[180px]">
            <img
              src={brand.image}
              alt={brand.name}
              className="mx-auto mb-3 h-36 w-36 rounded-full border-3 border-[#ff7a00] bg-black object-cover p-2 transition-all hover:scale-110 hover:rotate-3 hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] md:h-40 md:w-40"
            />
            <p className="font-semibold tracking-wide text-white">{brand.name}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
