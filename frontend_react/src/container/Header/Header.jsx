import React from 'react';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};
const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-150, 100], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Gaoxiang Lyu</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <h3 className="p-text">WEB DEVELOPER</h3>
                        <h3 className="p-text">FRONTEND ENGINEER</h3>
                        <h3 className="p-text">REACT NATIVE DEVELOPER</h3>
                        <h3 className="p-text">BACKEND ENGINEER</h3>
                        <h3 className="p-text">FULLSTACK DEVELOPER</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profilepicture} alt="profile_bg"/>
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.redux, images.node, images.sass, images.react].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="profile_bg" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')