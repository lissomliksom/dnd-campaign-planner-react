/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, BookOpenIcon, CalendarIcon, LibraryIcon, MapIcon, MusicNoteIcon, ClipboardListIcon, UserGroupIcon, DocumentTextIcon, ClipboardCheckIcon } from '@heroicons/react/outline'

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <Transition.Root show={menuOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setMenuOpen}>
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
                      onClick={() => setMenuOpen(false)}
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
                        <BookOpenIcon className="w-6 h-6 text-purple-100" />
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
                        <CalendarIcon className="w-6 h-6 text-purple-100" />
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
                        <LibraryIcon className="w-6 h-6 text-purple-100" />
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
                        <MapIcon className="w-6 h-6 text-purple-100" />
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
                        <MusicNoteIcon className="w-6 h-6 text-purple-200" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Music
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Background music for sessions.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded-lg hover:bg-gray-700">
                        <ClipboardCheckIcon className="w-6 h-6 text-purple-200" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            Items, shops and loot
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Reference and generators for sessions.
                          </p>
                        </div>
                      </a>

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded-lg hover:bg-gray-700">
                        <UserGroupIcon className="w-6 h-6 text-purple-200" />

                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-100">
                            NPCs
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Name tables and generators for sessions.
                          </p>
                        </div>
                      </a>

                      

                      <hr className="border-gray-800" />

                      <a href="/" className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 border border-transparent rounded-lg hover:border-gray-800">
                        <DocumentTextIcon className="w-6 h-6 text-gray-400" />
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
                        <DocumentTextIcon className="w-6 h-6 text-gray-400" />
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
                        <DocumentTextIcon className="w-6 h-6 text-gray-400" />
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
