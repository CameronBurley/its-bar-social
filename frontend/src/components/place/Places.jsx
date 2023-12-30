import {
    Wrap,
    WrapItem,
    Grid,
    GridItem,
    Spinner,
    Text,
    Center
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CardWithImage from "./PlaceCard.jsx";

const Places = () => {

    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState("");

    const fetchPlaces = () => {
        setLoading(true);
        // getCustomers().then(res => {
        //     setCustomers(res.data)
        // }).catch(err => {
        //     setError(err.response.data.message)
        //     errorNotification(
        //         err.code,
        //         err.response.data.message
        //     )
        // }).finally(() => {
        //     setLoading(false)
        // })
        const places = [
            {
                name: "Pinky's Los Feliz",
                address: "1816 N Vermont Ave",
                description: "Cocktail bar with tacos",
                imageUrl: "https://cdn.vox-cdn.com/thumbor/aIKtjNK72cF67U3d-Maeri25db8=/0x0:1600x1067/1200x800/filters:focal(849x325:1105x581)/cdn.vox-cdn.com/uploads/chorus_image/image/66946707/49970702666_d0ad4dd669_h.0.jpg",
                rating: 4.5,
                numberOfReviews: 320,
                distance: "0.5 mi",
                type: "Cocktail Bar"
            },
            {
                name: "The Dresden Restaurant & Lounge",
                address: "1760 N Vermont Ave",
                description: "Throwback locale for steaks & beer with smooth mature lighting",
                imageUrl: "https://thecountryclubchicago.com/wp-content/uploads/2021/10/mg_2191-1024x683.jpg",
                rating: 4.2,
                numberOfReviews: 215,
                distance: "0.3 mi",
                type: "Restaurant"
            },
            {
                name: "Covell",
                address: "4628 Hollywood Blvd",
                description: "Intimate spot with special daily pours",
                imageUrl: "https://media.radissonhotels.net/image/radisson-collection-hotel-magdalena-plaza-sevilla/restaurant/16256-140766-f72183811_3xl.jpg?impolicy=HomeHero",
                rating: 4.7,
                numberOfReviews: 178,
                distance: "1.2 mi",
                type: "Wine Bar"
            },
            // ... other places ...
        ];
        const realPlaces = [...places, ...places]
        setPlaces(realPlaces);
        setLoading(false);
    }

    useEffect(() => {
        fetchPlaces();
    }, [])

    // Maybe remove spinner
    // Add behind feature flag
    if (loading) {
        return (
            <Center w="100vw" h="100vh">
                <Spinner
                    thickness='3px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
        );
    }

    if (err) {
        return (
            <Text mt={5}>Ooops there was an error</Text>
        )
    }

    if (places.length <= 0 && !loading) {
        return (
            <Text mt={5}>No places available</Text>
        )
    }

    // Application is 1440 x 970 on the figma

    // Bug where navbar doesn't take up the whole page
    // Make Grid Dynamic
    
    // Make centered
    // Bug where when it goes to medium things get aligned differently, fix wrapItem values. Maybe make into grid honestly 
    // Because wrap will only do what it can to fit on the line
    // From there it won't change the spacing
    return (
        <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} rowGap={0} columnGap={3} paddingLeft={93} paddingRight={93}>
            {places.map((place, index) => (
                <GridItem key={index} w={"full"}>
                    <CardWithImage
                        {...place}
                        imageNumber={index}
                        w={"full"}
                    />
                </GridItem>
            ))}
        </Grid>
    )
}

export default Places;