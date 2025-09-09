import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { ListItemText } from '@mui/material';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function CategoryPanel(props) {

  const [submenuIndex, setSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {

    props.setIsOpenCatPanel(newOpen);
  }
  const openSubmenu = (index) => {
    if(submenuIndex===index){
      setSubmenuIndex(null);
    }else{
    setSubmenuIndex(index);
  }
}


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className='categoryPanel' >
      <h3 className='p-3 text-[20px] font-[500] flex items-center gap-8'>Shop By Categories<IoCloseSharp className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)} /></h3>

      <div className='scroll'>
        <ul className='w-full'>
          <li className='list-none flex items-center relative'>
            <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-black cursor-pointer'>Fashion</Button>
            </Link>
            <FaRegSquarePlus className='absolute top-[10px] right-[15px]' />
            {
              submenuIndex===0 &&<ul className='submenu absolute top-[100%]  left-[0%] w-full pl-3 '>
              <li className='list-none relative  '>
                <Link to="/" className='w-full'>
                  <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                </Link>
                <FaRegSquarePlus className='absolute top-[10px] right-[15px]' onClick={() => openSubmenu(0)} />
                <ul className='inner_submenu absolute top-[100%]  left-[0%] w-full pl-3 '>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Smart Tablet</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Crepe T-shirt</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Leather Watch</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Dipam ki Fuddi</Link>

                  </li>



                </ul>
              </li>

            </ul>
            }
            <ul className='submenu absolute top-[100%]  left-[0%] w-full pl-3 '>
              <li className='list-none relative  '>
                <Link to="/" className='w-full'>
                  <Button className='w-full !text-left !justify-start !px-3 !text-black'>Apparel</Button>
                </Link>
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                <ul className='inner_submenu absolute top-[100%]  left-[0%] w-full pl-3 '>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Smart Tablet</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Crepe T-shirt</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Leather Watch</Link>

                  </li>
                  <li className='list-none relative mb-1'>
                    <Link to="/" className='link w-full !text-left !justify-start !px-3 !text-black transition texet-[14px]'>Dipam ki Fuddi</Link>

                  </li>



                </ul>
              </li>

            </ul>
          </li>
        </ul>
      </div>

    </Box>
  );

  return (
    <div>

      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel