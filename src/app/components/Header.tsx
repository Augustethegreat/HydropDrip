"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { cn } from "../lib/utils";

const products = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header  className="bg-[#ffffff] h-15 border-b-2     ">
      <nav
        className="mx-auto flex max-w-7xl  items-center justify-start p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-11 " aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.1 p-1">
            
            <h3 className="h-9 w-auto pr-25 md:pr-80 lg:pr-0 font-bold text-black text-lg mt-2  md:top-0"> EQUITY-BCDC</h3>
            {/* <img
              className="h-12 w-auto"
              src="https://financialallianceforwomen.org/wp-content/uploads/2022/09/Logo_EquityBCDC_600x600_pxl.jpg"
              alt=""
            /> */}
          </Link>
        </div>

        

        <Popover.Group className="hidden  lg:flex lg:gap-x-12 ">
          {/* <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black">
              Comptes
              <ChevronDownIcon
                className="h-6 w-6 flex-none text-black"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-6 w-6 flex-none text-[#013B94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          <a href="#" className="text-sm font-semibold leading-6 text-black">
          Comptes
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-black">
            Crédits
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-black">
            Dépôt a termes
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-black">
            Nos Paquets
          </a>
        </Popover.Group>

        <div className="flex  mx-auto pr-0  float-right lg:ml-0 justify-end lg:flex lg:flex-1 gap-x-3  lg:gap-x-6">
          <EnvelopeIcon 
           className="h-6 w-6 justify-end text-[#14a8d7] "
           aria-hidden="true"
          />
         <span className="flex justify-end">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-[#14a8d7] "
           aria-hidden="true"/>
                  <p className="text-[#14a8d7]  hidden lg:flex">Aide</p>
         </span>
         <span className="flex justify-end">
          <p className="text-black lg:flex ">| </p>
          <UserCircleIcon className="h-6 w-6  text-[#14a8d7] "
           aria-hidden="true"/>
           <p className="text-[#14a8d7] hidden  lg:flex">Mon compte</p>
         </span>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-black">
              <span className=" text-black">
                <p className=" text-black font-bold">EQUITY-BCDC</p>
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-[#14a8d7] hover:text-white"
                >
                  Comptes
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-[#14a8d7] hover:text-white"
                >
                  Crédits
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-[#14a8d7] hover:text-white"
                >
                    Dépôt a termes
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-[#14a8d7] hover:text-white"
                >
                  Nos Paquets
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#14a8d7] hover:bg-[#14a8d7] hover:text-white"
                >
                  Login / SignUp
                </a>
              </div>
            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
 
    </div>
  );
}
export default Header;