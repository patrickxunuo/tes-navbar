import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import './NavBar.css'

export const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const [onLi, setOnLi] = useState(null);
  const [liInfo, setLiInfo] = useState([])
  const [parentX, setParentX] = useState(0)
  const {navItem} = props

  useEffect(() => {
    setLiInfo(navItem.map((item, index) => {
      return document.getElementById(`li-item-${index}`).getBoundingClientRect()
    }))
    setParentX(document.getElementById('ul').getBoundingClientRect().left)
  }, [])

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.2,
    },
    exit: {
      opacity: 0,
    },
  };


  return (
    <div className="tes-nav-container">
      <nav
        onMouseLeave={() => {
          setShow(false);
        }}
        className="tes-nav"
      >
        <AnimatePresence>
          {show && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                left: liInfo[onLi].left - parentX,
                width: liInfo[onLi].right - liInfo[onLi].left,
              }}
              className="tes-nav-backdrop"
            />
          )}
        </AnimatePresence>
        <ul
          id="ul"
          className="tes-nav-ul"
          onMouseMove={() => {
            setShow(true);
          }}
        >
          {navItem.map((item, index) => (
            <li
              onMouseEnter={(e) => {
                setOnLi(index);
              }}
              id={`li-item-${index}`}
              className="tes-nav-li"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

