import Image from 'next/image';
import { Button } from '@/components/ui/button';
import EmailSignupForm from '@/components/ui/email-signup-form';
import SupportPage from '@/components/pages/support';
import React from 'react';

const heroFeatures = [
  {
    title: 'Expert Advisors',
    text: 'Trained specialists to help you weigh your options and make important decisions fast.'
  },
  {
    title: 'Resource Guidance',
    text: 'Clear direction on available support services and how to access them, so you can feel confident in your path.'
  },
  {
    title: 'Support Coordination',
    text: 'Help with organizing support and care from loved ones.'
  }
];

const aspects = [
  {
    title: 'Health Challenges',
    description:
      'Clear action plans when dealing with health setbacks, recovery periods, or adapting to new limitations.',
    image: '/images/heart_image.webp',
    bullets: [
      'Recovery emotional support',
      'Resource navigation',
      'Adaptation guidance',
      'Family conversation help'
    ]
  },
  {
    title: 'Major Life Changes',
    description:
      'Compassionate support and planning through loss, relocations, or other significant life transitions.',
    image: '/images/house_image.webp',
    bullets: ['Transition planning', 'Decision-making guidance', 'Grief support', 'Emotional processing']
  },
  {
    title: 'Financial Stress',
    description:
      'Support when financial worries become overwhelming, including guidance on available resources and programs.',
    image: '/images/dollor_image.webp',
    bullets: [
      'Planning assistance',
      'Financial anxiety support',
      'Family financial discussions',
      'Resource identification'
    ]
  },
  {
    title: 'Caregiving Transitions',
    description:
      'Emotional support when care needs change, whether you need more help or are adjusting to new care arrangements.',
    image: '/images/hands_image.webp',
    bullets: ['Care planning discussions', 'Family coordination', 'Adjustment guidance', 'Transition support']
  }
];

export default async function Home() {
  return (
    <div className="size-full">
      <section className="isolate overflow-hidden pb-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="px-6 lg:px-10 xl:px-24 2xl:px-14 mx-auto lg:w-5/6 xl:w-11/12 py-8 lg:py-12 text-center space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <p className="font-bookmania text-4xl lg:text-7xl xl:text-8xl">
                Support for when you need it <span className="text-primary">most</span>
              </p>
              <p className="text-lg lg:text-2xl xl:text-[28px] 2xl:text-[32px] leading-[140%] tracking-tighter text-secondary/80 lg:px-5 xl:px-16 2xl:px-10">
                WillowPath offers support for when you're facing a difficult decision and need someone who
                understands. From home modifications after a fall, to guidance through loss of a spouse,
                WillowPath is support you can count on.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <SupportPage />
            </div>
          </div>

          <Image
            src={'/images/hero_image.webp'}
            alt="hero_image"
            width={233}
            height={244}
            className="absolute top-[48%] xl:top-[46%] left-[1%] 2xl:-left-[5%] hidden lg:inline-block -rotate-[40deg] w-[160px] xl:w-[233px] h-auto"
          />

          <div className="grid grid-cols-1 gap-4 lg:gap-2 lg:grid-cols-3">
            {heroFeatures.map((f, i) => (
              <div
                key={f.title}
                className={`text-secondary flex flex-col gap-2 items-center ${
                  heroFeatures?.length - 1 !== i ? 'lg:border-r-2 border-secondary' : ''
                }`}>
                <p className="font-bookmania text-xl xl:text-2xl text-center tracking-tight">{f.title}</p>
                <p className="w-11/12 lg:w-9/12 text-center leading-6 text-secondary/80 tracking-wide">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-shade py-12 xl:py-20">
        <div className="relative mx-auto max-w-7xl px-6 space-y-10 lg:space-y-18">
          <div className="lg:w-3/4 leading-[140%] xl:text-2xl tracking-wide px-4 lg:pr-32 xl:pr-18 lg:pl-10 py-2 lg:py-4 bg-danger-shade rounded-2xl lg:rounded-3xl text-danger/85 mx-auto [box-shadow:_0px_0px_26.06px_0px_rgba(0,0,0,0.13)]">
            Disclaimer: This platform provides informational support only and is not a substitute for
            emergency services. If you are experiencing a medical, mental health, or safety emergency, call
            911
          </div>

          <Image
            src={'/images/features_image.webp'}
            alt="features_image"
            width={320}
            height={500}
            className="absolute -top-[215px] xl:-top-[250px] right-1 xl:-right-22 hidden lg:inline-block w-[255px] xl:w-[320px] h-auto"
          />

          <div className="space-y-3 lg:space-y-5">
            <h2 className="font-bookmania text-center tracking-tight text-4xl lg:text-5xl leading-[110%]">
              Comprehensive Support Areas
            </h2>
            <p className="font-bookmania text-center leading-[150%] lg:text-xl xl:text-2xl px-2 lg:px-28 xl:px-64">
              WillowPath provides support and guidance when you need a plan to conquer aging-related
              challenges
            </p>
          </div>

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

                        <span className="text-lg xl:text-2xl tracking-wide xl:leading-[140%] text-foreground/80">
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
            <p className="text-center text-xl lg:text-2xl tracking-tight lg:px-42">
              We are dedicated to providing compassionate support coverage for when you're facing a difficult
              decision and need someone who understands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center relative">
            <div className="lg:space-y-2">
              <h3 className="leading-relaxed text-3xl lg:text-4xl tracking-tight font-bookmania">
                Our Mission
              </h3>

              <div className="leading-[140%] tracking-wide lg:text-2xl space-y-8 lg:space-y-10 text-foreground/80">
                <p className="">
                  We believe that when life's challenges feel overwhelming, you shouldn't have to navigate
                  them alone. That's why we created WillowPath – a crisis support coverage service that gives
                  you access to compassionate guidance when you need a plan to manage aging-related
                  difficulties
                </p>
                <p className="">
                  With over 5 years of experience, we combine professional emotional support with practical
                  guidance to help you process difficult times and find your path forward.
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

            <EmailSignupForm parentClassName="bg-transparent" buttonSize="sm" />
            <p className="text-center font-bookmania text-foreground/60 text-sm lg:text-xl leading-[140%]">
              Questions? Contact us at{' '}
              <span className="underline hover:text-primary cursor-pointer">support@willow-path.com</span>
              <br />
              By providing your email you are consenting to WilloPath’s terms and privacy policy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
