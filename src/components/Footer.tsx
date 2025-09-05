import styled from 'styled-components'


const Box = styled.footer`
border-top: 1px solid ${({ theme }) => theme.colors.border};
background: ${({ theme }) => theme.colors.card};
`;


const Wrap = styled.div`
max-width: ${({ theme }) => theme.maxw};
margin: 0 auto; padding: 16px 20px; color: ${({ theme }) => theme.colors.subtext};
`;


export default function Footer() {
    return (
        <Box id="contato">
            <Wrap>
                © {new Date().getFullYear()} Denise Grassi · <a href="mailto:denygrassi_@hotmail.com">denygrassi_@hotmail.com</a>
            </Wrap>
        </Box>
    )
}