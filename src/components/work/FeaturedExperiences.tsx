import { about } from "@/app/resources/content";
import { Column, Flex, Heading, Text } from "@/once-ui/components";

export function FeaturedExperiences() {
  const experiences = about.work.experiences;

  return (
    <Column as="section" aria-labelledby="featured-experience-title" fillWidth gap="24" paddingX="l">
      <Heading as="h2" id="featured-experience-title" variant="display-strong-xs">
        Experience
      </Heading>
      {experiences.map((experience) => (
        <Column key={experience.company} fillWidth gap="12" paddingBottom="24" borderBottom="neutral-alpha-weak">
          <Flex fillWidth gap="8" mobileDirection="column" horizontal="space-between" vertical="start">
            <Heading as="h3" variant="heading-strong-l">
              {experience.company}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {experience.timeframe}
            </Text>
          </Flex>
          <Text variant="body-default-s" onBackground="brand-weak">
            {experience.role}{experience.location && ` · ${experience.location}`}
          </Text>
          <Column as="ul" gap="12" margin="0" paddingLeft="20">
            {experience.achievements.map((achievement, index) => (
              <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                {achievement}
              </Text>
            ))}
          </Column>
        </Column>
      ))}
    </Column>
  );
}
