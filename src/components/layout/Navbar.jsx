import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../raiky_chow_chow-nav.svg';

export const Navbar = () => {

 const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
 ]

 function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
 }

 return (
  <header className="bg-white dark:bg-gray-900">
   <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-22 items-center justify-between">
     <div className="md:flex md:items-center md:gap-12">
      <a className="block text-teal-600 dark:text-teal-600" href="/">
       <span className="sr-only">Home</span>
       <img src={Logo} className='h-25' />
      </a>
     </div>

     <div className="hidden md:block">
      <nav aria-label="Global">
       <ul className="flex items-center gap-6 text-sm">
        <li>
         <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          href="/todolist">
          To do list
         </a>
        </li>

        <li>
         <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          href="/weather">
          Weather
         </a>
        </li>

        <li>
         <a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          href="/cocktails">
          Cocktails
         </a>
        </li>

       </ul>
      </nav>
     </div>

    </div>
   </div>
  </header>
 );
}
