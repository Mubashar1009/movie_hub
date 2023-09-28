
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export const MenuBar = () => {
  const menuLeft = useRef(null);

  const toast = useRef(null);
  const items = [
    {

      items: [
        {
          label: 'Home',
          url: "/",
          command: () => {
          
          }
        },
        {
          label: 'Top Rated',
          url: "/top_rated",
          command: () => {
          
          }
        },
        {
          label: 'Upcoming',
          url: "/upcoming",
          command: () => {
       
         
          }
        },
      ]
    },
    {

    }
  ];

  return (
    <div className="sm:hidden menubar card flex justify-content-center ">

      <Menu   model={items} popup ref={menuLeft} id="popup_menu_left " />
      <Button icon="pi pi-align-justify" className=" button mr-2 bg-white-alpha-60 text-900 border-none" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />

    </div>
  )
}
