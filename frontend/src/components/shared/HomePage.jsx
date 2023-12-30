import { Box } from "@chakra-ui/react";
import Places from "../place/Places";
import Navbar from "./Navbar";

export default function HomePage() {
    return (
        <Box>
            <Navbar/>
            <Places/>
        </Box>
    )
}