import styled from 'styled-components';
import foto from '../assets/foto.jpeg';

const Section = styled.section`
  max-width: ${({ theme }) => theme.maxw};
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: clamp(28px, 4vw, 38px);
  margin: 0 0 12px;
`;

const Lead = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 1.6;
`;

const Photo = styled.img`
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  aspect-ratio: 4 / 5;        /* retrato */
  object-fit: cover;          /* preenche mantendo proporção */
  object-position: center 15%;/* sobe o foco (ajuste 10–25% conforme a foto) */

  @media (max-width: 900px) {
    aspect-ratio: 1 / 1;      /* quadrado no mobile, opcional */
    object-position: center 10%;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
`;

const Btn = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.2s;
  border: 1px solid transparent;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
  }
`;

export default function Hero() {
    return (
        <Section id="sobre">
            <div>
                <Title>Prazer! Sou a Denise. </Title>
                <Lead>
                    Desenvolvedora Full Stack com foco em <strong>React + TypeScript</strong> no
                    front e <strong>Django REST + PostgreSQL</strong> no back. Apaixonada por
                    criar experiências simples, acessíveis e escaláveis. MBA em Engenharia de
                    Software (USP) e projetos como <strong>Bookstore</strong> e{' '}
                    <strong>WhatsUp</strong>.
                </Lead>
                <Buttons>
                    <Btn href="https://github.com/DeniseGrassi" target="_blank" rel="noreferrer">
                        Meu GitHub
                    </Btn>
                    <Btn
                        href="https://www.linkedin.com/in/denisegrassi/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </Btn>
                    <Btn href="/CV-DeniseGrassi.docx" download="DeniseGrassi-CV.docx">
                        Currículo (.docx)
                    </Btn>
                </Buttons>
            </div>
            <Photo src={foto} alt="Foto de Denise Grassi" />
        </Section>
    );
}
