

import Link from "next/link"
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import classes from "./mainheader.module.css"
import MainHeaderBackground from "./main-header-background"

import NavLink from "../nav-link"


export default function MainHeader(){


    return  (
      <>
      <MainHeaderBackground/>
    <header className={classes.header}>
          <Link className={classes.logo} href="/">
            <Image src ={logoImg} alt ='vegetables in bowl' priority/>NextLevel Food</Link>           
            <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href = '/meals'>
                 Meals
              </NavLink>
            </li>
            <li>
            <NavLink href = '/community'>
                Food Community
              </NavLink>
             
              </li>
            </ul>
            </nav>
            </header>
            </>
    )
    
 }