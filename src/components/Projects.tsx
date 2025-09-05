import styled from 'styled-components';
import { projects } from '../data/projects';

const Section = styled.section`
  max-width: ${({ theme }) => theme.maxw};
  margin: 10px auto 40px;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 18px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  min-height: 60px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0 14px;
`;

const Tag = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  opacity: 0.9;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
  }
`;

export default function Projects() {
  return (
    <Section id="projetos">
      <h2>Projetos em destaque</h2>
      <Grid>
        {projects.map((p) => (
          <Card key={p.title}>
            <Title>{p.title}</Title>
            <Desc>{p.description}</Desc>
            <Tags>
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tags>
            <Row>
              {p.repo && (
                <Btn href={p.repo} target="_blank" rel="noreferrer">
                  Repositório
                </Btn>
              )}
              {p.live && (
                <Btn href={p.live} target="_blank" rel="noreferrer">
                  Deploy
                </Btn>
              )}
            </Row>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
