import Logo from "./Logo";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'; 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {

  const title = 'Shan Wijenayaka';
  const subtitle = 'Product Focused Fullstack Software Engineer'

  const location = useLocation(); 

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Experience', href: '/experience', current: location.pathname === '/experience' },
    { name: 'Contact Me', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <Disclosure as="nav" className="bg-transparent">
    {({ open }) => (
      <>
        <div className="mx-auto w-screen py-4 px-2 sm:px-6 lg:px-8 border-solid border-b-2 border-gray-300">
          <div className="relative flex h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center xs:justify-left md:justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0">
                <div className="items-left flex-col ml-16">
                <h1 className="text-black text-xl ">{title}</h1>
                <h2 className="text-gray-600 text sm">{subtitle}</h2>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block md:right-0">
                <div className="flex space-x-4 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-slate-100'  : 'text-gray-500', 'bg-red',
                        'rounded-md px-3 py-2 text-sm font-medium text-black'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(

                  item.current ? 'bg-slate-100'  : 'text-gray-500',
                  'text-black block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
};

export default Nav;