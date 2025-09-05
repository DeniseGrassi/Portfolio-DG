import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'



const Page = styled.div`
min-height: 100dvh;
display: grid; grid-template-rows: auto 1fr auto;
`;


export default function App(){
return (
<Page>
<Header />
<main>
<Hero />
<Skills />
<Projects />
</main>
<Contact />
<Footer />
</Page>
)
}
