import Link from 'next/link'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import MobileMenu from '../MobileMenu'

const Navbar = () => {
  const ref = useRef(null)
  const [toggle, setToggle] = useState(false)
  const q = gsap.utils.selector(ref)
  const tl = gsap.timeline()
  const animate = () => {
    tl.reversed(!tl.reversed())
  }
  tl.reversed(true)
  useEffect(() => {
    tl.to(q('.navbar-menu-container'), {
      x: 100,
    })
  }, [])

  return (
    <S.NavContainer ref={ref}>
      <div className="container">
        <div className="navbar-logo">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        {/* <ul className="navbar-desktop-links">
          {['home', 'about', 'contact', 'work', 'skills', 'testimonial'].map(
            (item) => {
              return (
                <li key={item} className="app_flex p-text">
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              )
            }
          )}
        </ul> */}

        <div className="hamburger">
          {!toggle ? (
            <HiMenuAlt4
              onClick={() => {
                setToggle(true)
                animate()
              }}
            />
          ) : (
            <HiX
              onClick={() => {
                setToggle(false)
                animate()
              }}
            />
          )}
        </div>
      </div>
      {/* react portal */}
      <MobileMenu open={toggle} onClose={() => setToggle(false)} links={['home', 'about', 'contact', 'work', 'skills', 'testimonial']} />
    </S.NavContainer>
  )
}

export default Navbar
const S = {
  NavContainer: styled.nav`
    position: relative;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .hamburger {
      display: grid;
      place-items: center;
      svg {
        z-index: 1;
        position: relative;
        cursor: pointer;
      }
    }
    .navbar-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .navbar-logo img {
      width: 90px;
      height: 20px;
    }
  `,
}
