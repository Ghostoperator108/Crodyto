import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Home from '../../Pages/Home'
import { Button } from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BsCart3 } from "react-icons/bs";
import { IoMdGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='top-strip py-2 border-t-2 border-b-2 border-grey  '>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='col1 w-[50%]'>
              <p className='text-[14px]'>First 100 customers get 20% off</p>
            </div>
            <div className='col2 flex items-center justify-end'>
              <ul className='flex items-center gap-2'>
                <li className='list-none'>
                  <Link to="/help-center" className='text-[12px] link font-[500]transition'>Help Center</Link>
                </li>
                <li className='list-none'>
                  <Link to="/order-tracking" className='text-[12px] link font-[500]transition'>Order Tracking</Link>
                </li>


              </ul>
            </div>





          </div>
        </div>
      </div>
      <div className='header py-2 border-t-2 border-b-2 border-grey '>
        <div className='container flex item-center justify-between'>
          <div className='col1 w-[30%]  '>
            <Link to={"/"}><img src=''></img></Link>
          </div>

          <div className='col2 w-[40%]'>
            <Search />
          </div>

          <div className='col3 w-[30%] flex items-center pl-5'>
            <ul className='flex items-center  gap-3 w-full'>
              <li className='list-none'>
                <Link to="/login" className='link transition text-[15px]'>Login</Link>| &nbsp;
                <Link to="/register" className='link transition text-[15px]'>Register</Link>
              </li>
              <li>
                <Tooltip title="Cart" >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <BsCart3 />

                  </StyledBadge>
                </IconButton>
                </Tooltip>

            </li>
            <li>
              <Tooltip title="Compare" >
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <IoMdGitCompare />

                </StyledBadge>
              </IconButton>
              </Tooltip>

            </li>
            <li>
              <Tooltip title="Wishlist" >
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <FaHeart />

                </StyledBadge>
              </IconButton>
              </Tooltip>

            </li>


          </ul>
        </div>
      </div>

    </div>


    <Navigation/>


    </header >
  )
}

export default Header
