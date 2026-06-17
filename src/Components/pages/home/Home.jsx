import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='content'>
                    <div className='heading'>
                        <h1>Work better, Safer,</h1>
                        <h1>together</h1>
                    </div>


                    <div className='para'>
                        <p>Dropbox Business simplifies your work, with</p>
                        <p>a central place to access and share files.</p>

                    </div>
                    <div className='buttons'>
                        <button className='button1'>Try Dropbox Business free</button>
                        <button className='button2'>Get Dropbox Basic</button>
                    </div>

                    <div className='comment'>
                        <p>Try Dropbox Business free for 30 days. No credit card needed.</p>
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default Home