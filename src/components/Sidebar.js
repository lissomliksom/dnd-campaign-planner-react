/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-opacity-75 bg-gray-50" />

          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">

                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="text-gray-400 rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-gray-900 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-50">Overview</Dialog.Title>
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    <div className="absolute inset-0 px-4 space-y-2 sm:px-6">

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Lore
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            General lore about the Blendverse.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Timeline and calendar
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            A brief history of the Blendverse.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Pantheon
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Divine hierarchy of the Blendverse.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Locations
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Major countries and cities of the Blendverse.
                          </p>
                        </div>
                      </a>

                      <hr className="border-gray-800" />

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded-lg hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Music
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Background music for sessions.
                          </p>
                        </div>
                      </a>

                      <hr className="border-gray-800" />

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 border border-transparent rounded-lg hover:border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Races
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            A complete overview of official and custom races in the Blendverse.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 border border-transparent rounded-lg hover:border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Classes
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            A complete overview of official and custom classes in the Blendverse.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 border border-transparent rounded-lg hover:border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Spells and abilities
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            A complete overview of official and custom spells and abilities in the Blendverse.
                          </p>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>


                
              </div>
            </Transition.Child>
          </div>

        </div>
      </Dialog>
    </Transition.Root>
  )
}
