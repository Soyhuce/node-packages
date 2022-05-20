import React, { ReactElement } from 'react'
import Head from 'next/head'

import { MainLayout } from '@/layouts/main'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='flex items-center justify-center h-full'>Hello world 🤠</div>
    </>
  )
}

Index.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Index
