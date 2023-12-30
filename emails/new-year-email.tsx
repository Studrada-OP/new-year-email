import React from "react";

import {
  Preview,
  Heading,
  Section,
  Button,
  Column,
  Body,
  Html,
  Head,
  Text,
  Img,
  Row,
  Hr,
  Link,
  Tailwind,
} from "@react-email/components";
import { Container } from "@react-email/container";
import { Font } from "@react-email/font";

const HelloEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Kharkiv Tone, sans-serif"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.cdnfonts.com/s/89605/Kharkiv%20Tone%2004.10.2020.woff",
            format: "woff",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Tailwind>
        <Preview>Вітаємо, студенти!</Preview>

        <Body className="text-[#EFEFEF] bg-white">
          <Container className="max-w-[600px] bg-[#070707] pt-10 px-3 pb-0">
            <Section>
              <Section>
                <Section className="flex justify-center min-w-min">
                  <Img
                    src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
                    alt="Лого студради НУ'ОП'"
                    style={{ width: "160px" }}
                  />
                </Section>

                <Hr className="w-[68%] h-[1px] my-6 mx-auto" />
              </Section>

              <Section className="mb-6 mx-0">
                <Heading className="text-[#EFEFEF] text-[24px] text-center">
                  🎄 З Новим роком, студенте!
                </Heading>

                <Text className="text-[#EFEFEF] text-[15px]">
                  Щиро вітаємо тебе. Посміхнись та не забудь привітати рідних та
                  близьких! Нехай у 2024 році на тебе чекають здійснення всіх
                  твоїх мрій та купа нових можливостей.
                </Text>

                <Text className="text-[#EFEFEF] text-[15px]">
                  <Text className="float-left">
                    На честь свята, ми хочемо подарувати тобі{" "}
                    <span className="bg-[#E3FF2E] text-black px-1">
                      гарненьку листівку від Студради!
                    </span>
                  </Text>
                </Text>

                <Text style={reasonText}>
                  😉 Тобі випала листівка рівню{" "}
                  <span className="bg-blue-600 px-1">common</span>! Подібну
                  листівку отримало ще{" "}
                  <span className="bg-blue-600 px-1">79%</span> студентів. Можеш
                  поділитися нею у коментарях{" "}
                  <Link
                    className="text-[#C09DED] underline"
                    href="https://t.me/students_op/275"
                  >
                    під нашим постом в телеграм-каналі
                  </Link>
                  !
                </Text>

                <Section style={{ marginTop: "16px", marginBottom: "40px" }}>
                  <Section>
                    <Text style={{ ...reasonTitle, textAlign: "center" }}>
                      Без зайвих слів — зі святом!
                    </Text>
                  </Section>

                  <Section>
                    <Text className='text-center text-[18px] mb-3 italic'>
                      Ваша новорічна,
                    </Text>
                  </Section>

                  <Section style={logoContainer}>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
                      alt="Лого студради НУ'ОП'"
                      style={{ width: "120px" }}
                    />
                  </Section>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body = {
  color: "#EFEFEF",
  backgroundColor: "#FFFFFF",
};

const mainContainer = {
  maxWidth: "600px",
  backgroundColor: "#070707",
  padding: "40px 12px 0 12px",
};

const logoContainer = {
  width: "min-content",
};

const divider = {
  width: "68%",
  height: "1px",
  margin: "24px auto",
};

const heading = {
  color: "#EFEFEF",
  fontSize: "24px",
  textAlign: "center" as const,
};

const greetingsSection = {
  padding: "0 8px",
};

const greetingsImageContainer = {
  margin: "24px 0",
};

const buttonContainer = {
  width: "min-content",
  marginTop: "8px",
};

const button = {
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  fontSize: "14px",
  textAlign: "center" as const,
  whiteSpace: "pre" as const,
};

const reasonsSection = {
  marginTop: "24px",
};

const column = {
  width: "100%",
  maxWidth: "268px",
  display: "inline-block",
  verticalAlign: "top",
  margin: "12px 8px",
  textAlign: "left" as const,
};

const reasonTitle = {
  fontSize: "16px",
  fontWeight: "700",
};

const reasonText = {
  fontSize: "15px",
  fontWeight: "500",
};

const presentText = {
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "500",
};

const greetingText = {
  float: "left",
};

const highlightText = {
  backgroundColor: "#E3FF2E",
  float: "right",
};

const firstReason = {
  backgroundColor: "#EFEFEF",
  color: "#070707",
  borderRadius: "16px",
  padding: "12px",
};

const secondReason = {
  backgroundColor: "#E3FF2E",
  color: "#070707",
  borderRadius: "16px",
  padding: "12px",
};

const thirdReason = {
  backgroundColor: "#C09DED",
  color: "#070707",
  borderRadius: "16px",
  padding: "12px",
};

const link = {
  color: "#C09DED",
  textDecoration: "underlined",
};

export default HelloEmail;
