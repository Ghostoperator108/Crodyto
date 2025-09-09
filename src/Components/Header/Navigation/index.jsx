import React from 'react'
import { Button } from '@mui/material'
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';
import { useState } from 'react';
import "./style.css"

const Navigation = () => {
    


    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex items-center  '>
                    <div className='col_1 w-20%'>
                        <Button className='!text-black gap-2 w-full ' onClick={openCategoryPanel}><AiOutlineMenuFold className='text-[18px]' />SHOP BY CATEGORIES<FaAngleDown className='text-[13px] ml-auto font-bold cursor-pointer ' /></Button>
                    </div>
                    <div className='col_2 w-[60%] '>
                        <ul className='item-center flex gap-8'>
                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Home</Button></Link>
                            </li>
                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Fashion</Button></Link>
                            </li>
                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Electronics</Button></Link>
                            </li>

                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Bags</Button></Link>
                            </li>
                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Footwear</Button></Link>
                            </li>
                            <li className='list-none'><Link to="/" className='link transiton text-[14px] font-[500] '><Button className='!text-black'>Beauty</Button></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col_3 w-[20%] '>
                        <p className='text-[14px] font-[500] flex gap-2'><GoRocket className='text-[18px]' />Free International Delivery</p>

                    </div>
                </div>
            </nav>
            {/* Cateory panel component */}
            <CategoryPanel  openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
            
        </>
    )
}

export default Navigation
