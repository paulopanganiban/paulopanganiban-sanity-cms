import React, { SyntheticEvent, useRef } from 'react'
import ReactDOM from 'react-dom'
import { HiX } from 'react-icons/hi'
import styled from 'styled-components'

const S = {
  MobileMenuContainer: styled.aside<{ open: boolean }>`
    position: fixed;
    z-index: 0;
    background: rgba(0, 0, 0, 0.8);
    inset: 0 0 0 0;
    .wrapper {
      position: fixed;
      background-color: white;
      inset: 0 0 0 0;
      padding: 20px;
      display: flex;
      align-items: center;
      @media screen and (min-width: 500px) {
        inset: 0 0 0 15%;
      }
    }
    ul {
      list-style: none;
    }
    .flow > *:not(:first-child) {
      margin-top: 19px;
    }
    li {
      text-transform: capitalize;
      font-size: 42px;
      :hover {
        cursor: pointer;
      }
    }
    .menu-header {
      color: rgba(0, 0, 0, 0.3);
      font-weight: 400;
    }
    .close {
      position: absolute;
      z-index: 0;
      top: 16px;
      right: 16px;
      svg {
        font-size: 2rem;
        cursor: pointer;
      }
    }
  `,
}
type MobileMenuProps = {
  open: boolean
  onClose: () => void
  links: string[]
}
export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const ref = useRef(null)
  if (!open) return null
  const closeMenuOutsideClick = (e: SyntheticEvent) => {
    if (ref.current === e.target) {
      onClose()
    }
  }
  return ReactDOM.createPortal(
    <S.MobileMenuContainer
      ref={ref}
      open={open}
      onClick={closeMenuOutsideClick}
    >
      <div className="wrapper">
        <ul className="flow">
          <h3 className="menu-header">Menu</h3>
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="close">
        <HiX onClick={onClose} />
      </div>
    </S.MobileMenuContainer>,
    document.body
  )
}

export default MobileMenu
