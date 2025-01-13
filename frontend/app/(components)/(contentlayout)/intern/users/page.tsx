"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const InternUsers = () => {
  return (
    <Fragment>
      <Seo title={"User Intern"} />
      <Pageheader currentpage="User Intern" activepage="User Intern" mainpage="User Intern" />
      
    </Fragment>
  )
}

export default InternUsers