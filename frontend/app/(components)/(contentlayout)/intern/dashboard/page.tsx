"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const InternDashboard = () => {
  return (
    <Fragment>
      <Seo title={"Intern Dashboard"} />
      <Pageheader currentpage="Intern Dashboard" activepage="Intern Dashboard" mainpage="Intern Dashboard" />
      
    </Fragment>
  )
}

export default InternDashboard