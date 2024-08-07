import React from 'react'
import Link from 'next/link'
import {styles} from './Navbar.module.css'

export const Navbar = () => {
  return (
    <header>
        <ul>
            <li>
                <Link href='/'>Home</Link>
                <Link href='/projects'>projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                
            </li>
        </ul>
    </header>
  )
}
