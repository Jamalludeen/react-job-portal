import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Text,
  Title,
  Badge,
  Group,
  Button,
  Divider,
  Stack,
} from "@mantine/core";
import { IconMapPin, IconClock } from "@tabler/icons-react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import jobList from "../../data/jobs";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobList.find((job) => job.id === parseInt(id));
  return (
    <>
      <Header />
      <Container size="md" mt="lg">
        <Card
          shadow="sm"
          radius="md"
          withBorder
          p="lg"
          style={{ backgroundColor: "#1A1B1E" }}
        >
          <Stack spacing="sm">
            <Group position="apart">
              <Title order={2} style={{ color: "white" }}>
                {job.title}
              </Title>
              <Badge size="lg" color="blue" variant="light">
                {job.type}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {job.company}
            </Text>

            <Group spacing="xs" mt="sm">
              <IconMapPin size={18} />
              <Text size="sm" color="gray.5">
                {job.location}
              </Text>
            </Group>

            <Group spacing="xs">
              <IconClock size={18} />
              <Text size="sm" color="gray.5">
                {job.posted}
              </Text>
            </Group>

            <Divider my="sm" color="gray.7" />

            <Title order={4} color="white">
              Job Description
            </Title>
            <Text size="sm" color="gray.4" style={{ whiteSpace: "pre-line" }}>
              {job.description}
            </Text>

            <Button
              mt="md"
              fullWidth
              variant="filled"
              color="blue"
              size="md"
              radius="md"
            >
              Apply Now
            </Button>
          </Stack>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default JobDetails;
