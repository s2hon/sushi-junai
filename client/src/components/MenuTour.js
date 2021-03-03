import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        target: ".zero",
        content: "Are you ready for the All You Can Eat? Take this tour with us to use the sushi cart!",
    },
    {
        target: ".one",
        content: "This is to keep track of your time! Extra 10 minute cushion time added to the time limit!",
    },
    {
        target: ".two",
        content: "This is your main control center that will follow you around on this page. You can click on any of the items to access filters, different menu sections, and your sushi cart here! ",
    },
    {
        target: ".three",
        content: "You can add any of the items to your cart by pressing the + at any given time! Give it a go!",
    },
    {
        target: ".four",
        content: "Click me now to access your sushi cart!",
    }
];

    const Tour = () => {
        return (
        <>
            <JoyRide
            steps={TOUR_STEPS}
            continuous={true}
            showSkipButton={true}
            locale={{
                last: "End tour",
                skip: "Close tour"
            }}
            />
        </>
        );
    };

export default Tour;