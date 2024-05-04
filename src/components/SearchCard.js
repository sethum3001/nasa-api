import React from "react";
import {
  Card,
  Image,
  Stack,
  CardFooter,
  Text,
  Heading,
  CardBody,
  Button,
  Link,
} from "@chakra-ui/react";

const SearchCard = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      border="hidden"
    >
      {/* <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`https://osdr.nasa.gov${data._source.thumbnail}`}
        alt={data._source["Project Title"]}
      /> */}
      <Stack>
        <CardBody>
          <Heading size="md" color="blue">
            <Link
              href={`https://osdr.nasa.gov/bio/repo/data/studies/${data._source.Accession}`}
            >
              {data._source["Project Title"]
                ? data._source["Project Title"]
                : data._source["Study Title"]}
            </Link>
          </Heading>
          <Text py="2">{data._source["Study Description"]}</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm">
            Release Date:{" "}
            {new Date(
              data._source["Study Public Release Date"] * 1000
            ).toDateString()}{" "}
          </Text>
          <Text fontSize="sm" ml={5}>Source: {data._source["Data Source Type"]}</Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SearchCard;
