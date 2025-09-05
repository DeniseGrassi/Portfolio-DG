import styled from 'styled-components';

const Section = styled.section`
  max-width: ${({ theme }) => theme.maxw};
  margin: 12px auto 28px;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 18px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const H3 = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

const Item = styled.li`
  color: ${({ theme }) => theme.colors.subtext};
`;

export default function Skills() {
  return (
    <Section id="habilidades">
      <Grid>
        <Card>
          <H3>Front-End</H3>
          <ul>
            <Item>React, TypeScript, Vite, Redux Toolkit</Item>
            <Item>Styled-Components, Sass, CSS moderno</Item>
            <Item>React Router, A11y, SEO básico</Item>
          </ul>
        </Card>

        <Card>
          <H3>Back-End</H3>
          <ul>
            <Item>Django REST Framework, Python</Item>
            <Item>PostgreSQL, ORM, JWT Auth</Item>
            <Item>APIs REST, testes e logs</Item>
          </ul>
        </Card>

        <Card>
          <H3>DevOps & Ferramentas</H3>
          <ul>
            <Item>Docker, GitHub Actions, CI/CD</Item>
            <Item>Heroku, Vercel, AWS (básico)</Item>
            <Item>Git/GitHub, Postman, ESLint/Prettier</Item>
          </ul>
        </Card>
      </Grid>
    </Section>
  );
}
