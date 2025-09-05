import styled from 'styled-components'


const Bar = styled.header`
width: 100%;
border-bottom: 1px solid ${({ theme }) => theme.colors.border};
background: ${({ theme }) => theme.colors.card};
`;


const Wrap = styled.div`
max-width: ${({ theme }) => theme.maxw};
margin: 0 auto;
padding: 14px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;


const Brand = styled.span`
font-weight: 700;
letter-spacing: .5px;
`;


const Nav = styled.nav`
display: flex; gap: 14px; flex-wrap: wrap;
a { opacity: .9; }
`;


export default function Header() {
    return (
        <Bar>
            <Wrap>
                <Brand>Denise Grassi</Brand>
                <Nav>
                    <a href="#sobre">Sobre</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </Nav>
            </Wrap>
        </Bar>
    )
}