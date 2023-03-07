import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { Menu, Transition } from '@headlessui/react';

import { UserAction } from '@/store/user/UserAction';

const AccountMenu = ({ accountInfo }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(UserAction.setAccountInfo(null));
    dispatch(UserAction.setIsLoggedIn(false));
  };
  const items = [
    {
      label: 'Account',
      key: '0',
    },
    {
      label: 'My articles',
      key: '1',
    },
    {
      label: 'Log out',
      onClick: handleLogout,
      key: '3',
    },
  ];

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-mdpx-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src={accountInfo.imageUrl}
                className="rounded-full w-10 h-10"
                alt=""
                loading="lazy"
              />
              <div className="text-left ml-3">
                <p className="text-base text-black">{accountInfo.name}</p>
                <p className="text-xs text-gray-400">
                  {`${accountInfo.address.slice(
                    0,
                    6,
                  )}...${accountInfo.address.slice(-6)}`}
                </p>
              </div>
            </a>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item) => (
                <Menu.Item key={item.key}>
                  {({ active }) => (
                    <button
                      onClick={item.onClick}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export { AccountMenu };
