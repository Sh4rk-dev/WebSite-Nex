import { motion } from 'framer-motion';
import { BehanceIcon } from './Icons/BehanceIcon';
import { FacebookIcon } from './Icons/FacebookIcon';
import { InstagramIcon } from './Icons/InstagramIcon';
import { TwitterIcon } from './Icons/TwitterIcon';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <footer className="mt-20 px-7 pb-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <ul className="flex flex-col gap-10 lg:flex-row">
              <li className=" font-dm-sans font-semibold ">About Company</li>
              <li className=" font-dm-sans font-semibold ">Our Careers</li>
              <li className=" font-dm-sans font-semibold ">Services</li>
              <li className=" font-dm-sans font-semibold ">Contact</li>
            </ul>

            <ul className="flex flex-col gap-10 lg:flex-row">
              <li className=" font-dm-sans font-semibold ">Privacy Policy</li>
              <li className=" font-dm-sans font-semibold ">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="my-10 h-0.5 w-full bg-custom-border" />

          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <ul className="flex flex-row items-center gap-10">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <BehanceIcon />
            </ul>

            <ul>
              <li className="font-dm-sans ">
                Copyright © 2025 Nex. All Rights Reserved.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
}
