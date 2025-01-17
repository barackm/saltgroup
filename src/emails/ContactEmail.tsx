import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

export interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message de contact de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouveau message de contact</Heading>

        <Section>
          <Heading as="h2" style={h2}>
            Informations de contact
          </Heading>

          <table style={infoTable}>
            <tbody>
              <tr>
                <td style={labelCell}>Nom:</td>
                <td style={valueCell}>{name}</td>
              </tr>
              <tr>
                <td style={labelCell}>Email:</td>
                <td style={valueCell}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Hr style={divider} />

        <Section>
          <Heading as="h2" style={h2}>
            Message
          </Heading>
          <Text style={messageText}>{message}</Text>
        </Section>

        <Hr style={divider} />

        <Text style={footer}>
          Ce message a été reçu le{" "}
          {new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px",
  maxWidth: "600px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "28px",
  margin: "0 0 24px",
  textAlign: "center" as const,
};

const h2 = {
  color: "#1a1a1a",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const infoTable = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const labelCell = {
  padding: "8px 12px",
  color: "#64748b",
  fontSize: "14px",
  width: "120px",
  verticalAlign: "top" as const,
};

const valueCell = {
  padding: "8px 12px",
  color: "#1a1a1a",
  fontSize: "14px",
  fontWeight: "500",
};

const messageText = {
  color: "#334155",
  fontSize: "14px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
};

const link = {
  color: "rgb(226,34,40)",
  textDecoration: "none",
};

const divider = {
  margin: "24px 0",
  borderTop: "1px solid #e2e8f0",
  borderBottom: "none",
};

const footer = {
  textAlign: "center" as const,
  color: "#64748b",
  fontSize: "12px",
  fontStyle: "italic",
};
