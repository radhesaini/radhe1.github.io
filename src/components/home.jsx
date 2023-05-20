import React from 'react'
import { TopNav } from './TopNav'
import './home.css'
import MainBackImg from '../image/mynewpic-removebg-preview.png'


export const Home = (props) => {
    return (

        <div className='home-main'>
            {/* <TopNav></TopNav> */}
            <div className='my-info-container'>
                <div className="about">
                    <h1>
                        About Me
                    </h1>
                    <p>
                        Hi, I'm Radhe, and I graduated from the University of New Mexico in 2015 with a degree in Computer Science. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences
                        I previously worked at Company X, where I led the XYZ project. XYZ was a service for companies to make urban transportation expenses convenient. Companies can create employee groups, set ride policies, and share corporate payment methods with their employees.

                        I built the project with two other engineers over the period of three months on a React/Redux and Golang stack.

                        I'm interested in the Front End Engineer role at Company XYZ because I like working in this ridesharing space and creating products to improve the lives of users.
                   {props.name}
                    </p>
                </div>
                <div className="mypic">
                    <img src={MainBackImg} className='pic-my'>
                    </img>
                </div>
            </div>

            {/* <img src={MainBackImg}></img> */}
        </div>
    )
}
