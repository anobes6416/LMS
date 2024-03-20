'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";


interface Props { }


const Page: FC<Props>=(props) => {
  return (
    <div>
      <Heading
        title="Elearning"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="programming, MERN, REDUX, cybersecurity"
      />
    </div>
  )
}


export default Page;