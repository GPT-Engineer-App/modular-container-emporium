import React from "react";
import { ChakraProvider, Box, Grid, GridItem, Text, Heading, Image, VStack, HStack, IconButton, Input, Textarea, Button, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaWarehouse, FaBriefcase, FaToilet, FaHome, FaInfo, FaListUl, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Header />
        <Home />
        <Products />
        <AboutUs />
        <ContactUs />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

const Header = () => (
  <Box as="header" width="full" bg="blue.600" color="white" py={4}>
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" mx="auto" maxWidth="1200px" px={4}>
      <Box flex="1">
        <Heading as="h1" size="lg">
          Contenedores Módulos
        </Heading>
      </Box>
      <Spacer />
      <HStack spacing={8}>
        <Link href="#home" _hover={{ textDecor: "none" }}>
          <FaHome /> Inicio
        </Link>
        <Link href="#products" _hover={{ textDecor: "none" }}>
          <FaWarehouse /> Productos
        </Link>
        <Link href="#about" _hover={{ textDecor: "none" }}>
          <FaInfo /> Nosotros
        </Link>
        <Link href="#contact" _hover={{ textDecor: "none" }}>
          <FaEnvelope /> Contacto
        </Link>
      </HStack>
    </Flex>
  </Box>
);

const Home = () => (
  <Box as="section" id="home" py={10}>
    <VStack spacing={4}>
      <Heading as="h2" size="xl">
        Bienvenidos a Contenedores Módulos
      </Heading>
      <Text fontSize="lg">Ofrecemos módulos de contenedores para diferentes necesidades. Personaliza tu espacio interior según tus requerimientos.</Text>
    </VStack>
  </Box>
);

const Products = () => (
  <Box as="section" id="products" py={10}>
    <Heading as="h3" size="lg" mb={6}>
      Nuestros Productos
    </Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <ProductModule title="Almacén" icon={FaWarehouse} description="Espacio amplio para almacenaje." price="Desde $5000" imageSrc="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHdhcmVob3VzZXxlbnwwfHx8fDE3MDg5NjUxMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      <ProductModule title="Oficina" icon={FaBriefcase} description="Contenedor adaptado para oficina." price="Desde $7500" imageSrc="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMG9mZmljZXxlbnwwfHx8fDE3MDkwNDc1NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      <ProductModule title="Baños" icon={FaToilet} description="Soluciones sanitarias en cualquier lugar." price="Desde $3000" imageSrc="https://images.unsplash.com/photo-1600065621723-41d214cf2556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHRvaWxldHxlbnwwfHx8fDE3MDkwNDc1NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
    </Grid>
  </Box>
);

const ProductModule = ({ title, icon: Icon, description, price, imageSrc }) => (
  <GridItem borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={imageSrc} alt={title} />
    <Box p={6}>
      <VStack align="flex-start">
        <HStack>
          <Icon size="24px" />
          <Heading as="h4" size="md">
            {title}
          </Heading>
        </HStack>
        <Text>{description}</Text>
        <Text fontWeight="bold">{price}</Text>
      </VStack>
    </Box>
  </GridItem>
);

const AboutUs = () => (
  <Box as="section" id="about" py={10}>
    <Heading as="h3" size="lg" mb={6}>
      Sobre Nosotros
    </Heading>
    <Text fontSize="lg">Contamos con años de experiencia en el mercado ofreciendo soluciones de espacio basadas en contenedores. Nuestro equipo está comprometido a proveer el mejor servicio y calidad en cada proyecto.</Text>
  </Box>
);

const ContactUs = () => (
  <Box as="section" id="contact" py={10} bg="gray.100">
    <Heading as="h3" size="lg" mb={6}>
      Contáctanos
    </Heading>
    <VStack spacing={4}>
      <Input placeholder="Nombre" />
      <Input placeholder="Correo electrónico" />
      <Textarea placeholder="Mensaje" />
      <Button colorScheme="blue" leftIcon={<FaEnvelope />}>
        Enviar Mensaje
      </Button>
    </VStack>
  </Box>
);

const Footer = () => (
  <Box as="footer" width="full" bg="blue.600" color="white" py={4} mt={10}>
    <Flex align="center" justify="center">
      <Text>&copy; {new Date().getFullYear()} Contenedores Módulos. Todos los derechos reservados.</Text>
    </Flex>
  </Box>
);

export default Index;
