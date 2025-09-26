import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const heroFeatures = [
  {
    title: 'Evaluation of Options',
    text: 'Explore and weigh different choices so you can confidently select what fits your goals'
  },
  {
    title: 'Guidance from Advisors',
    text: 'Get the advice and support you need to take the first steps with clarity and ease'
  },
  {
    title: 'Personalized Plans & Resources',
    text: 'Stay motivated with structured goals and actions that keep you moving forward'
  }
];

const aspects = [
  {
    title: 'Living',
    description:
      'Plan your ideal living situation, from finding the perfect retirement community to aging in place with confidence and support.',
    image: '/images/house_image.webp',
    bullets: [
      'Retirement Communities',
      'Independent Living Options',
      'Home Modifications',
      'Location Planning'
    ]
  },
  {
    title: 'Lifestyle',
    description:
      "Design the retirement lifestyle you've always dreamed of, from connecting with your community to pursuing new passions and hobbies.",
    image: '/images/cycle_image.webp',
    bullets: ['Community Volunteering', 'Hobby Exploration', 'Personal Fulfillment', 'Social Connections']
  },
  {
    title: 'Health',
    description:
      'Take control of your health and healthcare journey with activity suggestions, healthcare planning, and wellness tracking.',
    image: '/images/heart_image.webp',
    bullets: ['Balance & Exercise Activities', 'Brain Health', 'Insurance Planning', 'Wellness Tracking']
  },
  {
    title: 'Finance',
    description:
      'Organize your financial future with comprehensive tools for planning for costs, investments, and ensuring long-term security.',
    image: '/images/dollor_image.webp',
    bullets: ['Retirement Savings', 'Planning for Costs', 'Estate Planning', 'Will & Trust Planning']
  }
];

export default async function Home() {
  return (
    <div className="size-full">
      <section className="isolate overflow-hidden pb-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="px-6 lg:px-10 xl:px-24 2xl:px-14 mx-auto lg:w-5/6 xl:w-11/12 py-8 lg:py-12 text-center space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <p className="font-bookmania text-4xl lg:text-7xl xl:text-8xl text-secondary">
                Chart your aging path
                <br />
                <span className="text-primary">with clarity</span>
              </p>
              <p className="text-lg lg:text-2xl xl:text-[28px] 2xl:text-[32px] leading-[140%] tracking-wider text-secondary/80">
                WillowPath makes planning for your aging simple. From living and finance to health and
                lifestyle, you'll find guidance, answers, and peace of mind as you design the next stage of
                your life.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Button>Get a free 6-month trial</Button>
            </div>
          </div>

          <Image
            src={'/images/hero_image.webp'}
            alt="hero_image"
            width={233}
            height={244}
            className="absolute top-[46%] xl:top-[48%] left-[1.5%] xl:-left-[2%] 2xl:-left-[7%] hidden lg:inline-block -rotate-[40deg] w-[160px] xl:w-[233px] h-auto"
          />

          <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-3">
            {heroFeatures.map(f => (
              <div
                key={f.title}
                className="mx-auto w-11/12 xl:w-5/6 text-secondary flex flex-col gap-2 items-center">
                <p className="font-bookmania text-xl xl:text-2xl text-center tracking-tight [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]">
                  {f.title}
                </p>
                <p className="text-center leading-6 text-secondary/80 tracking-wide">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-shade py-16 lg:py-22 xl:py-32">
        <div className="relative mx-auto max-w-7xl px-6 space-y-10 lg:space-y-18">
          <div className="space-y-3 lg:space-y-5">
            <h2 className="font-bookmania text-center tracking-tight text-4xl lg:text-5xl xl:text-[64px] leading-[110%]">
              Holistic Life Planning
              <br />
              Across Every Aspect
            </h2>
            <p className="font-bookmania text-center lg:text-xl xl:text-2xl px-2 lg:px-28">
              WillowPath brings together all the important areas of your life into one comprehensive platform,
              so you can plan with confidence knowing nothing is overlooked.
            </p>
          </div>
          <Image
            src={'/images/features_image.webp'}
            alt="features_image"
            width={320}
            height={540}
            className="absolute -top-[215px] xl:-top-[290px] right-1 xl:-right-22 hidden lg:inline-block w-[255px] xl:w-[320px] h-auto"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-12 lg:gap-y-28 xl:gap-y-38">
            {aspects.map(aspect => (
              <div key={aspect.title}>
                <div className="lg:space-y-2 lg:w-md mx-auto">
                  <h3 className="text-3xl xl:text-[40px] tracking-tight font-bookmania text-center text-secondary">
                    {aspect.title}
                  </h3>

                  <div className="space-y-0">
                    <Image
                      src={aspect.image}
                      alt={aspect.image}
                      width={192}
                      height={192}
                      className="mx-auto size-36 lg:size-48"
                    />

                    <p className="text-center font-bookmania text-lg lg:text-xl xl:text-[26px] xl:leading-9 tracking-tight xl:pb-10">
                      {aspect.description}
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 space-y-2 xl:space-y-6 ml-2">
                    {aspect.bullets.map(b => (
                      <div key={b} className="flex gap-4 xl:gap-6 items-center">
                        <span className="inline-flex text-primary">
                          <svg viewBox="0 0 24 24" className="size-6 xl:size-[30px]" fill="currentColor">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 8z" />
                          </svg>
                        </span>

                        <span className="font-semibold text-lg xl:text-2xl tracking-wide xl:leading-[140%] text-foreground/80">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-shade py-16 lg:pt-20 lg:pb-80">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="space-y-3 font-bookmania">
            <h2 className="text-center text-4xl lg:text-5xl tracking-tight font-medium">About WillowPath</h2>
            <p className="text-center text-xl lg:text-2xl tracking-tight">
              We are dedicated to empowering adults to take control of their aging journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center relative">
            <div className="lg:space-y-2">
              <h3 className="leading-relaxed text-3xl lg:text-4xl tracking-tight font-bookmania">
                Our Mission
              </h3>

              <div className="leading-[140%] tracking-wide lg:text-2xl space-y-8 lg:space-y-10 text-foreground/80">
                <p className="">
                  We believe that planning for the future shouldn't be overwhelming or complicated. That's why
                  we created WillowPath – a simple, secure, and comprehensive platform that puts you in
                  control of your life's important decisions and possibilities.
                </p>
                <p className="">
                  With trusted experience, we combine technology with deep industry knowledge to deliver
                  solutions for aging populations with the agility of a start up.
                </p>
              </div>
            </div>

            <Image
              src={'/images/about_image.webp'}
              alt="about_image"
              width={636}
              height={629}
              className="w-[536px] xl:w-[636px] h-auto absolute -right-8 top-2 hidden lg:inline-block"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center lg:block relative overflow-hidden bg-primary-shade py-12">
        <div className="max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-16 items-center mx-auto">
          <Image
            src={'/images/email_list.webp'}
            alt="email_list"
            width={540}
            height={540}
            className="w-[440px] xl:w-[540px] h-auto hidden lg:inline-block"
          />

          <div className="space-y-6 lg:space-y-8 max-w-xl">
            <h2 className="text-4xl lg:text-7xl xl:text-[84px] font-medium font-bookmania leading-[110%] tracking-tight text-center">
              Get a free
              <div className="mx-auto w-62 lg:w-full">
                <p className="bg-[url('/images/text-background.webp')] bg-cover bg-center">6-month trial</p>
              </div>
            </h2>
            <p className="text-center text-lg lg:text-2xl text-foreground/80 leading-[140%]">
              Get full access to WillowPath for 6 months, completely free. No credit card required.
            </p>
            <form className="space-y-2">
              <Input
                label="Enter Email"
                hideLabel
                type="email"
                placeholder="Enter email address"
                parentClassName="bg-transparent"
                rightElement={<Button size={'sm'}> Sign up now</Button>}
              />
              <p className="text-center font-bookmania text-foreground/60 text-sm lg:text-xl leading-[140%]">
                Questions? Contact us at{' '}
                <span className="underline hover:text-primary cursor-pointer">support@willow-path.com</span>
                <br />
                By providing your email you are consenting to WilloPath’s terms and privacy policy
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
