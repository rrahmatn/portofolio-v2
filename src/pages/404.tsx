import React from 'react'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'

const NotFund: React.FC = () => {
  return (
    <>
    <Layout>
    <div className="w-screen h-screen grid px-2 place-items-center">
        <Link to="/" className='w-full md:w-1/2 h-fit py-2 px-5 text-center border-2 border-current '>Page Not Fund Broo... Click Here To Back</Link>
    </div>

    </Layout>
    </>
  )
}

export default NotFund