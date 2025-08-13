import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRightIcon,
  Menu,
  Search,
  X,
} from 'lucide-react';
import logo from '/public/logo.png';
import { useModal } from '../hooks/useModal';
import { useSideBar } from '../hooks/useSideBar';
import { Button } from './Button';

export function Header() {
  const { handleOpenModal } = useModal();
  const { openSideBar, setOpenSideBar } = useSideBar();

  return (
    <header className="flex items-center justify-evenly shadow-md md:block lg:justify-between">
      <div className="my-6 flex w-full flex-row items-center justify-between px-20 lg:justify-between">
        <picture className="hidden pl-5 xl:block">
          <img alt="logo.png" className="h-auto w-auto" src={logo} />
        </picture>

        <ul className="hidden flex-row items-center gap-12.5 lg:flex">
          <li className="cursor-pointer font-dm-sans decoration-2 decoration-custom-primary underline-offset-8 hover:underline">
            Home
            <ChevronDown className="inline" size={18} />
          </li>
          <li className="cursor-pointer font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
            About Us
          </li>
          <li className="cursor-pointer font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
            Portfolio
            <ChevronDown className="inline" size={18} />
          </li>
          <li className="cursor-pointer font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
            Pages
            <ChevronDown className="inline" size={18} />
          </li>
          <li className="cursor-pointer font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
            Blog
            <ChevronDown className="inline" size={18} />
          </li>
          <li className="cursor-pointer font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
            Contact Us
          </li>
        </ul>

        <Menu
          className="h-8 w-8 cursor-pointer lg:hidden"
          onClick={() => setOpenSideBar(true)}
        />

        <div className="flex flex-row gap-5">
          <Button
            icon={<Search className="text-custom-body" size={20} />}
            onClick={handleOpenModal}
            variant="tertiary"
          />

          <Button
            icon={<ArrowUpRight className="text-custom-title" size={20} />}
            text="Get A Quote"
            variant="primary"
          />
        </div>
      </div>

      <motion.div
        animate={{ x: 0, opacity: 1 }}
        className={openSideBar ? 'absolute inset-0' : 'hidden'}
        initial={{ x: -100, opacity: 0 }}
        transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="absolute top-0 left-0 z-20 h-full w-1/3 bg-white">
          <div className="mt-10 flex flex-row items-center justify-between px-5">
            <picture className="">
              <img
                alt="logo.png"
                className="h-auto w-auto"
                src="/public/logo.png"
              />
            </picture>

            <X
              className="h-8 w-8 cursor-pointer text-custom-primary hover:text-custom-primary/50"
              onClick={() => setOpenSideBar(false)}
            />
          </div>

          <div className="flex h-full flex-col px-5">
            <div className="mb-60">
              <ul className="mt-15 flex flex-col items-start gap-10">
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 decoration-custom-primary underline-offset-8 hover:underline">
                  Home
                  <ChevronRightIcon className="inline" size={18} />
                </li>
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
                  About Us
                </li>
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
                  Portfolio
                  <ChevronRightIcon className="inline" size={18} />
                </li>
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
                  Pages
                  <ChevronRightIcon className="inline" size={18} />
                </li>
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
                  Blog
                  <ChevronRightIcon className="inline" size={18} />
                </li>
                <li className="cursor-pointer font-bold font-dm-sans decoration-2 underline-offset-8 hover:underline hover:decoration-custom-primary">
                  Contact Us
                </li>
              </ul>
            </div>

            <Button
              icon={<ArrowUpRight className="text-custom-title" size={20} />}
              text="Get A Quote"
              variant="mobile"
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
