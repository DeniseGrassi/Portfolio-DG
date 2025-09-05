import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: ${({ theme }) => theme.maxw};
  margin: 24px auto 48px;
  padding: 0 20px;
`

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: clamp(22px, 3vw, 28px);
`

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1.1fr .9fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 18px;
  box-shadow: ${({ theme }) => theme.shadow};
`

const RowLinks = styled.div`
  display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;
`

const LinkBtn = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: .2s;
  cursor: pointer;
  &:hover { filter: brightness(.95); transform: translateY(-1px); }
`

const Form = styled.form`
  display: grid; gap: 12px;
`

const Label = styled.label`
  display: grid; gap: 6px; font-size: 14px;
`

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  background: #0b1222;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`

const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 10px;
  min-height: 120px;
  background: #0b1222;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  resize: vertical;
`

const Submit = styled.button`
  justify-self: start;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff; padding: 10px 18px;
  border-radius: 10px; font-weight: 700;
  border: 1px solid transparent; cursor: pointer;
  transition: .2s;
  &:hover { filter: brightness(.95); transform: translateY(-1px); }
`

export default function Contact() {
  // === SEUS CONTATOS ===
  const displayPhone = '(71) 99962-2155'
  const telHref = 'tel:+5571999622155'
  const whatsappHref = `https://wa.me/5571999622155?text=${encodeURIComponent('Olá Denise! Vim pelo seu portfólio.')}`
  const contactEmail = 'denisegrassi.dev@gmail.com'
  // =====================

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = `Contato pelo portfólio — ${name || 'Sem nome'}`
    const body =
`Nome: ${name}
E-mail: ${email}

Mensagem:
${message}

Enviado de: ${window.location.origin}`

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      alert('E-mail copiado!')
    } catch {}
  }

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+55 71 99962-2155')
      alert('Telefone copiado!')
    } catch {}
  }

  return (
    <Section id="contatos">
      <Title>Entre em contato</Title>
      <Grid>
        <Card>
          <p>Fico feliz em conversar sobre oportunidades, freelas e collabs.</p>

          {/* BLOCO: E-mail */}
          <h3>E-mail</h3>
          <RowLinks>
            <LinkBtn href={`mailto:${contactEmail}`}>Enviar e-mail</LinkBtn>
            <LinkBtn as="button" type="button" onClick={copyEmail}>Copiar e-mail</LinkBtn>
          </RowLinks>

          {/* BLOCO: Telefone */}
          <h3 style={{ marginTop: 16 }}>Telefone</h3>
          <p style={{ marginTop: 6, opacity: 0.9 }}>{displayPhone}</p>
          <RowLinks>
            <LinkBtn href={telHref}>Ligar</LinkBtn>
            <LinkBtn href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</LinkBtn>
            <LinkBtn as="button" type="button" onClick={copyPhone}>Copiar telefone</LinkBtn>
          </RowLinks>

          {/* Links rápidos */}
          <h3 style={{ marginTop: 16 }}>Outros</h3>
          <RowLinks>
            <LinkBtn href="https://www.linkedin.com/in/denisegrassi/" target="_blank" rel="noreferrer">LinkedIn</LinkBtn>
            <LinkBtn href="https://github.com/DeniseGrassi" target="_blank" rel="noreferrer">GitHub</LinkBtn>
            <LinkBtn href="/CV-DeniseGrassi.docx" download="DeniseGrassi-CV.docx">Baixar CV</LinkBtn>
          </RowLinks>
        </Card>

        <Card>
          <Form onSubmit={handleSubmit} aria-label="Formulário de contato">
            <Label>
              Nome
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Label>

            <Label>
              E-mail
              <Input
                type="email"
                name="email"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Label>

            <Label>
              Mensagem
              <Textarea
                name="message"
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Label>

            <Submit type="submit">Enviar</Submit>
          </Form>
        </Card>
      </Grid>
    </Section>
  )
}
