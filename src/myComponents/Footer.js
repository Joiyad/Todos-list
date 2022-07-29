import React from 'react'

export default function Footer() {
    let footerStyle = {
            color: "white",
            margin: "90px auto auto auto",
            height: "50px",
    }
    return (
        <footer className='bg-dark' style={{opacity:"0.7"}}>
            <p className='text-center' style ={footerStyle}>
                Copyright &copy; todos.com
            </p>
        </footer>
    )
}
