import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className="flex justify-around bg-gray-800 text-white p-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>    
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/faq">FAQ</Link>
        </ul>
    </div>
  )
}

export default Navbar