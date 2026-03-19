import SectionContainer from './SectionContainer';

export default function GallerySection() {
  const images = [
    'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
    'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400',
  ];

  return (
    <SectionContainer className="bg-gradient-radial from-[#784b2b] to-[#0b0f14]">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
          Product Gallery
        </h2>
        <p className="mb-8 text-[#B3B3B3] md:mb-12">Real athletes. Real results. Real performance.</p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg transition-all hover:scale-105 hover:z-10"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover transition-all group-hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
