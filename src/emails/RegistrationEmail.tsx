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

export interface RegistrationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  eventTitle: string;
  date: string;
  time: string;
  location: string;
}

export const RegistrationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  country,
  eventTitle,
  date,
  time,
  location,
}: RegistrationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Nouvelle inscription: {eventTitle} - {firstName} {lastName}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouvelle inscription à l&apos;événement</Heading>

        <Section style={eventSection}>
          <Text style={eventTitleStyle}>{eventTitle}</Text>
          <div style={eventDetails}>
            <Text style={detailText}>📅 {date}</Text>
            <Text style={detailText}>🕒 {time}</Text>
            <Text style={detailText}>📍 {location}</Text>
          </div>
        </Section>

        <Hr style={divider} />

        <Section>
          <Heading as="h2" style={h2}>
            Informations du participant
          </Heading>

          <table style={infoTable}>
            <tbody>
              <tr>
                <td style={labelCell}>Nom complet:</td>
                <td style={valueCell}>
                  {firstName} {lastName}
                </td>
              </tr>
              <tr>
                <td style={labelCell}>Email:</td>
                <td style={valueCell}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={labelCell}>Téléphone:</td>
                <td style={valueCell}>
                  <Link href={`tel:${phone}`} style={link}>
                    {phone}
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={labelCell}>Pays:</td>
                <td style={valueCell}>{country}</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Hr style={divider} />

        <Text style={footer}>
          Cette inscription a été reçue le{" "}
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

const eventSection = {
  backgroundColor: "#f8fafc",
  padding: "24px",
  borderRadius: "8px",
  marginBottom: "24px",
};

const eventTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "rgb(226,34,40)",
  margin: "0 0 16px",
};

const eventDetails = {
  display: "grid",
  gap: "8px",
};

const detailText = {
  fontSize: "14px",
  color: "#4a5568",
  margin: "0",
  lineHeight: "20px",
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
