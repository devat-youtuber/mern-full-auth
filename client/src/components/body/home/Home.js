import React from 'react'
import './home.css'

function Home() {
    return (
        <div className="home_page">
            <h2>Hello everyone!</h2>
            <p>
                This site is about user authentication, 
                so there won't be any other pages here. 
                If people want to see more about how to 
                create other websites. You can click on 
                the link below, visit my youtube channel. 
                And if you find it useful, please subscribe 
                for us. Thank you very much!
            </p>
            <a href="https://www.youtube.com/c/DevATHTML" target="_blank" 
            rel="noopener noreferrer">My Youtube</a>

            <h3>Build a simple e-commerce site.</h3>

            <a href="https://youtu.be/uXl77UFkrkQ" target="_blank" 
            rel="noopener noreferrer">Build a Ecommerce</a>
        </div>
    )
}

export default Home
