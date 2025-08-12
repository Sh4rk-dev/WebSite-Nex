import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CommandIcon } from '../components/Icons/CommandIcon';
import { CubeIcon } from '../components/Icons/CubeIcon';
import { EllipsesIcon } from '../components/Icons/EllipsesIcon';
import { HexagonIcon } from '../components/Icons/HexagonIcon';
import { ShapeIcon } from '../components/Icons/Shape';
import { StarIcon } from '../components/Icons/StarIcon';
import { SystemIcon } from '../components/Icons/SystemIcon';
import { TechLogo } from '../components/Icons/TechLogo';
import { Technology } from '../components/Icons/Technology';
import { Technology02 } from '../components/Icons/Technology02';
import { Technology03 } from '../components/Icons/Technology03';
import { SearchModal } from '../components/SearchModal';
import { ServicesCard } from '../components/ServiceCard';
import { Steps } from '../components/Steps';
import { useModal } from '../hooks/useModal';
import { useSideBar } from '../hooks/useSideBar';
import { cn } from '../utils/utils';

export function App() {
  const { openModal } = useModal();
  const { openSideBar } = useSideBar();

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col justify-center antialiased',
        openModal && 'fixed',
        openSideBar && 'fixed'
      )}
    >
      <Header />

      <main className="itens-center flex w-full flex-col justify-center">
        <section className="relative px-7 pb-16">
          <div className="-z-10 absolute inset-0 size-full bg-[url('/public/texture.png')] opacity-10" />

          <div className="container relative mx-auto mt-10 max-w-7xl md:mt-0">
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
            >
              <div className="hidden pt-24 xl:block">
                <span className="font-dm-sans capitalize">
                  Great Design Services <br /> Without The Pretentiousness.!
                </span>
              </div>
            </motion.div>

            <div className="flex flex-row items-center justify-center gap-15">
              <motion.h1
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.4, duration: 1.5, ease: 'easeInOut' }}
              >
                <h1 className="font-gallery-modern text-8xl leading-none lg:text-[220px]">
                  Digital
                </h1>
              </motion.h1>

              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ delay: 0.6, duration: 1.5, ease: 'easeInOut' }}
              >
                <div className="hidden flex-col justify-center md:flex">
                  <p className="w-full font-dm-sans text-sm capitalize leading-6.5 lg:text-base">
                    We believe that the surest measure of success is when our{' '}
                    <br />
                    partners with us more than half It's more than just the
                    <br />
                    visuals. We're here to support your growth.
                  </p>

                  <a
                    className="-mr-7 mt-5 cursor-pointer text-end font-bold font-dm-sans capitalize underline underline-offset-6"
                    href="/"
                  >
                    View all Services
                    <ArrowUpRight className="ml-2 inline" size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
              >
                <div className="-mr-15 mt-4 mb-11 hidden flex-col items-center gap-3 2xl:flex">
                  <div className="flex w-fit flex-row items-center rounded-[100px] border-2 border-custom-title p-2 ">
                    <picture>
                      <img
                        alt="photo-01"
                        className="rounded-full border-2 border-white"
                        height={48}
                        src="/Photo-01.png"
                        width={48}
                      />
                    </picture>

                    <picture className=" -ml-3.5">
                      <img
                        alt="photo-02"
                        className="rounded-full border-2 border-white"
                        height={48}
                        src="/Photo-02.png"
                        width={48}
                      />
                    </picture>

                    <picture className="-ml-3.5">
                      <img
                        alt="photo-03"
                        className="rounded-full border-2 border-white"
                        height={48}
                        src="/Photo-03.png"
                        width={48}
                      />
                    </picture>

                    <div className="-ml-3.5 flex size-12 items-center justify-center rounded-full bg-custom-title">
                      <span className="font-kanit text-custom-white">15k+</span>
                    </div>
                  </div>

                  <h1 className="font-dm-sans text-lg">
                    Excellent <strong className="text-xl">4.000+</strong>{' '}
                    Reviews
                  </h1>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-row items-center gap-16">
              <div className="hidden flex-row 2xl:flex">
                <motion.div
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                >
                  <div className="w-64 rounded-[50px] bg-custom-primary py-8 pr-30 pl-10">
                    <h1 className="font-bold font-plus-jakarta-sans text-3xl">
                      WEB DESIGN
                    </h1>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                >
                  <div className="-ml-12 rounded-[50px] bg-custom-title p-5">
                    <picture>
                      <img alt="avatar" className="w-22" src="/avatar.png" />
                    </picture>
                  </div>
                </motion.div>
              </div>

              <motion.h1
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: 1.4, duration: 1.5, ease: 'easeInOut' }}
              >
                <h1 className="font-gallery-modern text-8xl leading-none lg:text-[220px]">
                  Solution
                </h1>
              </motion.h1>
            </div>
          </div>
        </section>

        <section>
          <picture>
            <img
              alt="backgroundWoman"
              className="h-72 w-full object-cover lg:h-auto"
              src="/background-woman.png"
            />
          </picture>
        </section>

        <section className="relative flex w-full flex-col items-center justify-center bg-custom-title px-7 pt-30">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-row justify-between">
              <motion.h1
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <h1 className="text-center font-marcellus text-[40px] text-custom-white capitalize leading-12 lg:text-start">
                  We collaborate with a few disability service <br /> providers
                  to create inclusive goods that <br />
                  meet their requirements.
                </h1>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="absolute top-21 right-30 hidden 2xl:block">
                  <EllipsesIcon />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-31 pt-14 pl-25 lg:flex-row">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold font-dm-sans text-5xl text-custom-white">
                    25+
                  </h1>
                  <span className="font-bold font-dm-sans text-custom-white text-sm capitalize">
                    Years Of Experience
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="flex flex-col gap-10">
                  <span className="font-dm-sans text-custom-white capitalize leading-6.5">
                    Established in 1995, NEXIN has been a leading force <br />{' '}
                    in the digital landscape for over two decades.
                    <br /> We're a passionate team of designers,
                  </span>

                  <a
                    className="font-kanit font-medium text-custom-white underline underline-offset-8"
                    href="/"
                  >
                    More About Us
                    <ArrowUpRight className="ml-2 inline" size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="flex flex-col gap-10">
                  <span className="font-dm-sans text-custom-white capitalize leading-6.5">
                    Established in 1995, NEXIN has been a leading force <br />{' '}
                    in the digital landscape for over two decades.
                    <br /> We're a passionate team of designers,
                  </span>

                  <a
                    className="font-kanit font-medium text-custom-white underline underline-offset-8"
                    href="/"
                  >
                    Get In Touch
                    <ArrowUpRight className="ml-2 inline" size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 1.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="flex flex-row items-center pt-28 pb-15">
                  <div className="h-px w-70 bg-[#2A2A2A]" />

                  <p className="w-200 px-3 font-marcellus font-medium text-2xl text-custom-white ">
                    We worked with global largest brands
                  </p>

                  <div className="h-px w-full bg-[#2A2A2A]" />
                </div>
              </motion.div>

              <div className="mb-30 flex flex-col items-center justify-between gap-5 lg:flex-row">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <TechLogo />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <Technology />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <Technology02 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <Technology03 />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <SystemIcon />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-custom-white px-7">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <div className="absolute top-31 left-17.5 hidden xl:block">
              <StarIcon />
            </div>
          </motion.div>

          <div className="container mx-auto mt-30 mb-20 flex max-w-7xl flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center md:items-start">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <div className="mb-5 flex flex-row items-center gap-3">
                  <ShapeIcon />

                  <span className="font-bold font-plus-jakarta-sans text-custom-body">
                    SERVICES
                  </span>
                </div>
              </motion.div>

              <div className="flex flex-col gap-10">
                <motion.h1
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <h1 className="text-center font-marcellus text-3xl leading-16 lg:text-[54px]">
                    Empowering Brands Through <br /> Strategic Digital Services
                  </h1>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className=" h-30.5 w-80 items-center border-custom-border border-l pl-15 lg:ml-30 lg:w-130">
                    <span className="font-dm-sans text-custom-body leading-6.5">
                      Established in 1995, NEXIN has been a leading force <br />{' '}
                      in the digital landscape for over two decades. We're
                      <br /> a passionate team of designers,
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="h-px w-full bg-custom-border" />

            <div className="flex flex-col items-center justify-between gap-10 xl:flex-row">
              <Card
                description="Established in 1995, NEXIN has been leading<br /> force in the digital landscape for over two<br /> decades. We're a passionate"
                icon={<CubeIcon />}
                tag="Visual Branding"
                title="Web Design and Development"
              />

              <Card
                description="Established in 1995, NEXIN has been leading<br /> force in the digital landscape for over two<br /> decades. We're a passionate"
                icon={<CommandIcon />}
                tag="Brand Strategy"
                title="Branding and Creative Services"
              />

              <Card
                description="Established in 1995, NEXIN has been leading<br /> force in the digital landscape for over two<br /> decades. We're a passionate"
                icon={<HexagonIcon />}
                tag="Identity Build"
                title="Creative Digital Agency"
              />
            </div>
          </div>
        </section>

        <section className="my-15 flex flex-col items-center px-10">
          <div className="container mx-auto flex max-w-7xl flex-col items-center xl:flex-row">
            <div className="-mt-15 flex size-[369px] flex-col items-center justify-center rounded-full border border-custom-border">
              <h1 className="font-dm-sans text-6xl">35k+</h1>

              <span className="text-center font-marcellus text-3xl text-custom-body">
                Project Complete
              </span>
            </div>

            <div className="-mt-15 lg:-ml-15 flex size-[369px] flex-col items-center justify-center rounded-full border border-custom-border">
              <h1 className="font-dm-sans text-6xl">10+</h1>
              <span className="text-center font-marcellus text-3xl text-custom-body">
                Happy Customers
              </span>
            </div>

            <div className="-mt-15 lg:-ml-15 flex size-[369px] flex-col items-center justify-center rounded-full border border-custom-border">
              <h1 className="font-dm-sans text-6xl">25+</h1>
              <span className="text-center font-marcellus text-3xl text-custom-body">
                Years Experiences
              </span>
            </div>

            <div className="-mt-15 lg:-ml-15 flex size-[369px] flex-col items-center justify-center rounded-full border border-custom-border">
              <h1 className="font-dm-sans text-6xl">88</h1>
              <span className="text-center font-marcellus text-3xl text-custom-body">
                Awards Achievement
              </span>
            </div>
          </div>
        </section>

        <section className="my-30">
          <div className="relative">
            <picture>
              <img
                alt="video.png"
                className="z-0 h-72 w-full object-cover lg:h-auto"
                src="/video.png"
              />
            </picture>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 flex size-30 cursor-pointer items-center justify-center rounded-full bg-custom-white duration-300 hover:bg-gray-300 xl:size-48">
                <span className="font-bold font-dm-sans text-custom-title text-xs uppercase xl:text-base">
                  Play Video
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-7">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className="flex flex-row gap-2">
                    <ShapeIcon />

                    <span className="font-bold font-plus-jakarta-sans text-custom-body">
                      WORKFLOW
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <h1 className="font-marcellus text-5xl text-custom-title leading-16">
                    How We Work
                  </h1>
                </motion.h1>
              </div>
            </div>

            <div className="mt-16 mb-30 grid grid-cols-1 gap-7 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <Steps
                  description="Conduct thorough market of the research<br /> to the fast target audience behaviors.<br /> Submit as many design tasks"
                  step={1}
                  title="Research and Strategy"
                  urlImage="/RocketIcon.png"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <Steps
                  description="Conduct thorough market of the research<br /> to the fast target audience behaviors.<br /> Submit as many design tasks"
                  step={2}
                  title="Plan Customization"
                  urlImage="/PenIcon.png"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <Steps
                  description="Conduct thorough market of the research<br /> to the fast target audience behaviors.<br /> Submit as many design tasks"
                  step={3}
                  title="Finished & User Testing"
                  urlImage="/LoopIcon.png"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-custom-smoke-2 px-7 py-30">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 xl:flex-row xl:items-start">
            <div className="flex flex-col gap-15">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className="flex flex-row items-center gap-4">
                    <ShapeIcon />

                    <span className="font-bold font-plus-jakarta-sans text-custom-body">
                      WHAT SETS US APART
                    </span>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-5">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                  >
                    <h1 className="font-marcellus text-[3.375rem] text-custom-title leading-16">
                      Driving Digital Success
                      <br /> with Strategy Design
                    </h1>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                  >
                    <p className="font-dm-sans text-custom-body capitalize leading-6.5">
                      We believe that the surest measure of success is when our
                      partners with
                      <br /> us more than half It's more than just the visuals.
                    </p>
                  </motion.p>
                </div>
              </div>

              <motion.picture
                initial={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                <picture>
                  <img
                    alt="photo-notebook.png"
                    className="-ml-13"
                    src="/photo-notebook.png"
                  />
                </picture>
              </motion.picture>
            </div>

            <div className="flex flex-col gap-7.5 lg:flex-row">
              <div className="flex flex-col gap-7.5">
                <motion.picture
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <picture>
                    <img
                      alt="group"
                      height={297}
                      src="/group.png"
                      width={283}
                    />
                  </picture>
                </motion.picture>

                <motion.p
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <p className="font-dm-sans text-custom-body leading-6.5">
                    Conduct thorough market research to
                    <br /> the fast target audience behaviours.
                    <br /> Submit as many design tasks
                  </p>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <Button
                    icon={<ArrowUpRight size={20} />}
                    text="Contact Us"
                    variant="quaternary"
                  />
                </motion.div>
              </div>

              <div className="mt-11 flex flex-col">
                <div className="flex w-full flex-col gap-20">
                  <div className="space-y-3">
                    <motion.p
                      initial={{ opacity: 0 }}
                      transition={{
                        delay: 0.8,
                        duration: 1,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1 }}
                    >
                      <p className="font-dm-sans text-custom-body capitalize leading-7">
                        We believe that the surest measure of success
                        <br /> is when our partners with us more than half
                        <br /> It's more than just the visuals. We're here to
                        <br /> support your growth.
                      </p>
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      transition={{
                        delay: 0.8,
                        duration: 1,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1 }}
                    >
                      <p className="font-dm-sans text-custom-body capitalize leading-7">
                        We believe that the surest measure of success
                        <br /> is when our partners with us more than half
                        <br /> It's more than just the visuals.
                      </p>
                    </motion.p>
                  </div>

                  <div className="space-y-10">
                    <div className="space-y-2">
                      <motion.h2
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 1,
                          ease: 'easeInOut',
                        }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                      >
                        <h2 className="font-marcellus text-2xl text-custom-title leading-none">
                          Our Mission
                        </h2>
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 1,
                          ease: 'easeInOut',
                        }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                      >
                        <p className="font-dm-sans text-custom-body leading-7">
                          Conduct thorough market research to the fast
                          <br /> target audience behaviours.
                        </p>
                      </motion.p>
                    </div>

                    <div className="flex flex-row justify-between gap-5">
                      <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 1,
                          ease: 'easeInOut',
                        }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                      >
                        <ServicesCard
                          text="Marketing Strategy"
                          url="/Marketing.png"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 1,
                          ease: 'easeInOut',
                        }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                      >
                        <ServicesCard text="UX/UI Solution" url="/ux-ui.png" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-custom-title px-7 pt-10 pb-10">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex flex-col gap-10">
                <h1 className="text-center font-gallery-modern text-6xl text-custom-white leading-18 lg:text-start lg:text-8xl lg:leading-26">
                  Let's Create
                  <br /> Something Great
                </h1>

                <span className="font-dm-sans text-custom-white capitalize">
                  We Shift you from today’s reality to tomorrow’s potential,
                  ensuring
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <Button
                icon={<ArrowUpRight size={20} />}
                text="Let’s Talk"
                variant="secondary"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {openModal && <SearchModal />}
    </div>
  );
}
