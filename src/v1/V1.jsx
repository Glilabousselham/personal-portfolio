import React from 'react'
import Layout from './components/Layout'
import Introduction from './sections/Introduction'
import NavBar from './components/NavBar'
import Container from './components/Container'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const V1 = () => (
    <Layout>
        {/* NavBar */}

        <NavBar />

        {/* introduction component */}
        <Introduction />
        {/* skills section  */}
        <Skills />
        {/* projects section */}
        <Projects />
        {/* contact section */}
        <Contact />
    </Layout>
)

export default V1