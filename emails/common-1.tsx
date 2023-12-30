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
        <Preview>З Новим роком, студенте!</Preview>

        <Body className="text-[#EFEFEF] bg-white">
          <Container className="max-w-[600px] bg-[#070707] pt-10 px-3 pb-0">
            <Section>
              <Section>
                <Section className="flex justify-center min-w-min" style={logoContainer}>
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
                    <span className="bg-[#C09DED] text-black px-1">
                      гарненьку листівку від Студради!
                    </span>
                  </Text>
                </Text>

                <Section>
                  <Img
                    className="flex justify-center w-full"
                    src="https://github.com/Studrada-OP/new-year-email/blob/main/static/common-1.png?raw=true"
                  />
                </Section>

                <Text style={reasonText}>
                  😉 Тобі випала листівка рівню{" "}
                  <span className="bg-blue-600 px-1">common</span>! Одну з п'яти таких
                  листівок отримало ще{" "}
                  <span className="bg-blue-600 px-1">79%</span> студентів. Можеш
                  поділитися нею у коментарях{" "}
                  <Link
                    className="text-[#C09DED] underline"
                    href="https://t.me/students_op/280"
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
                    <Text className="text-center text-[18px] mb-3 italic">
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

const logoContainer = {
  width: "min-content",
};

const reasonTitle = {
  fontSize: "16px",
  fontWeight: "700",
};

const reasonText = {
  fontSize: "15px",
  fontWeight: "500",
};

export default HelloEmail;
