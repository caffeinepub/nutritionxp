import SectionContainer from './SectionContainer';

export default function WhyChooseSection() {
  const features = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/679/679720.png',
      title: 'Freeshipping',
      description: 'Free PAN India Shipping.',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
      title: '24/7 Friendly Support',
      description: 'Our support team always ready for you 7 days a week.',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/891/891462.png',
      title: '7 Days Easy Exchange',
      description: 'Product Exchange is Eligible Within 7 Days of Delivery.',
    },
  ];

  return (
    <SectionContainer id="about">
      <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl lg:text-5xl" style={{ textShadow: '2px 2px 10px #FC9145' }}>
        Why Choose NutritionXP?
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-full max-w-[220px] text-center transition-transform hover:-translate-y-2"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="mx-auto mb-4 h-12 w-12 transition-transform hover:scale-125 hover:rotate-[360deg]"
              style={{ filter: 'invert(55%) sepia(75%) saturate(2000%) hue-rotate(340deg)' }}
            />
            <h4 className="mb-2 text-lg font-semibold text-white">{feature.title}</h4>
            <p className="text-sm leading-relaxed text-[#aaa6a6]">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
