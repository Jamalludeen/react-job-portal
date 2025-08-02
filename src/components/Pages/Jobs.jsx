import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Text,
  Badge,
  Group,
  Button,
  Title,
  Center,
  Stack,
} from "@mantine/core";
import { IconMapPin, IconClock } from "@tabler/icons-react";
import Header from "../Layout/Header";
import jobList from "../../data/jobs";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const JOBS_PER_PAGE = 6;

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobList.length / JOBS_PER_PAGE);

  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobList.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <Container size="lg" mt="lg">
        <Title order={2} mb="md" style={{ color: "white" }}>
          Available Jobs
        </Title>
        <Grid>
          {currentJobs.map((job) => (
            <Grid.Col key={job.id} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="sm"
                radius="md"
                withBorder
                p="lg"
                style={{ backgroundColor: "#1A1B1E" }}
              >
                <Group position="apart" mb="xs">
                  <Text fw={500} color="white">
                    {job.title}
                  </Text>
                  <Badge color="blue" variant="light">
                    {job.type}
                  </Badge>
                </Group>
                <Text size="sm" color="dimmed">
                  {job.company}
                </Text>
                <Group mt="sm" spacing="xs">
                  <IconMapPin size={16} />
                  <Text size="xs" color="gray.5">
                    {job.location}
                  </Text>
                </Group>
                <Group spacing="xs" mt="xs">
                  <IconClock size={16} />
                  <Text size="xs" color="gray.5">
                    {job.posted}
                  </Text>
                </Group>
                <Button
                  component={Link}
                  to={`/jobs/${job.id}`}
                  fullWidth
                  mt="md"
                  variant="light"
                  color="blue"
                  radius="md"
                >
                  View Details
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Pagination Controls */}
        <Center mt="xl">
          <Stack spacing="sm" align="center">
            <Group spacing="md">
              <Button
                onClick={handlePrev}
                disabled={currentPage === 1}
                variant="outline"
                color="gray"
              >
                Previous
              </Button>
              <Text color="gray.3">
                Page {currentPage} of {totalPages}
              </Text>
              <Button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                variant="outline"
                color="gray"
              >
                Next
              </Button>
            </Group>
          </Stack>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default Jobs;
