import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CardWithImage({name, address, description, imageUrl, numberOfReviews, rating, type}) {
    return (
        <Center py={6} w={'full'}>
            <Box
                onClick={() => console.log("hi")}
                maxW={'292px'} // might need to move this
                minW={'292px'}
                w={'full'}
                m={3}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                style={{ cursor: 'pointer' }}
                overflow={'hidden'}
            >
                <ImageWithHeart src={imageUrl}/>

                <Box 
                    p={6}
                    fontFamily="'Inter-Regular', Helvetica"
                    fontWeight="normal"
                    color="black"
                    letterSpacing="0"
                    lineHeight="normal"
                    padding={0}
                >
                    <Stack 
                        spacing={2} 
                        mb={3} 
                        width={"220"}
                        height={"220"} // why is this cutting off text? make dynamic
                    >
                        <Heading fontSize={'24px'} fontWeight={500} fontFamily={'body'} textDecoration={"underline"}>
                            {name}
                        </Heading>
                        <Box fontSize={'18px'}>
                            <Text>{rating} rating</Text>
                            <Text>({numberOfReviews}) reviews</Text>
                            <Text>{type}</Text>
                            <Text>{address}</Text>
                            <Text>Closes Soon 2AM</Text>
                            <Text isTruncated>{description}</Text>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}

// Change to use actuall svg later
// Change red color to lighter color
const HeartIcon = ({ isLiked, ...props }) => (
    <svg 
      width="32" 
      height="29" 
      viewBox="0 0 32 29" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M27.8409 4.21018C27.1568 3.50949 26.3445 2.95365 25.4504 2.57442C24.5563 2.19519 23.598 2 22.6302 2C21.6625 2 20.7042 2.19519 19.8101 2.57442C18.916 2.95365 18.1037 3.50949 17.4195 4.21018L15.9996 5.66368L14.5798 4.21018C13.1978 2.7955 11.3234 2.00073 9.36905 2.00073C7.41466 2.00073 5.54031 2.7955 4.15835 4.21018C2.77638 5.62487 2 7.54359 2 9.54426C2 11.5449 2.77638 13.4637 4.15835 14.8783L5.57823 16.3318L15.9996 27L26.4211 16.3318L27.8409 14.8783C28.5254 14.178 29.0684 13.3464 29.4389 12.4312C29.8093 11.5159 30 10.535 30 9.54426C30 8.55356 29.8093 7.57258 29.4389 6.65734C29.0684 5.7421 28.5254 4.91054 27.8409 4.21018Z" 
        fill={isLiked ? '#ff3632' : '#D9D9D9'} 
        fillOpacity={isLiked ? '1' : '0.72'} 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

const ImageWithHeart = ({ src }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
      <Box position="relative" display="inline-block">
        <Image
            h={'290px'}
            w={'full'}
            rounded={'3xl'}
            src={src}
            objectFit={'cover'}
        />
        <Box
            as={HeartIcon}
            isLiked={isLiked}
            position="absolute"
            top="2"
            right="2"
            w={5}
            h={5}
            zIndex="1"
            onClick={toggleLike}
            cursor="pointer"
            userSelect="none"
        />
      </Box>
    );
  };
  