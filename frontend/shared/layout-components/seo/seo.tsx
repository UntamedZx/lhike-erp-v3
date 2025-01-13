"use client"
import React, { useEffect } from 'react'

const Seo = ({ title }:any) => {
  useEffect(() => {
    document.title = `LHIKE ERP | ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;