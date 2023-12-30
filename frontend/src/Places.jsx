import {
    Wrap,
    WrapItem,
    Spinner,
    Text,
    Center
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CardWithImage from "./components/place/PlaceCard.jsx";

const Places = () => {

    // const [customers, setCustomers] = useState([]);
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
    // if (loading) {
    //     return (
    //         <Center w="100vw" h="100vh">
    //             <Spinner
    //                 thickness='4px'
    //                 speed='0.65s'
    //                 emptyColor='gray.200'
    //                 color='blue.500'
    //                 size='xl'
    //             />
    //         </Center>
    //     );
    // }

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
    
    // Make centered
    // Bug where when it goes to medium things get aligned differently, fix wrapItem values. Maybe make into grid honestly 
    return (
        <Wrap justify={{ base: "center", md: "center", lg: "flex-start" }} spacing="30px" align="stretch">
            {places.map((place, index) => (
                <WrapItem key={index} minW={{ base: "100%", sm: "calc(50% - 30px)", md: "calc(25% - 30px)" }}>
                    <CardWithImage
                        {...place}
                        imageNumber={index}
                    />
                </WrapItem>
            ))}
        </Wrap>
    )
}

export default Places;