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
        content: "You can add any of the items to your cart by pressing the + at any given time!",
    },
    {
        target: ".four",
        content: "Click me now to access your sushi cart!",
    },
    {
        target: ".five",
        content: "Welcome to sushi cart!",
    },
    {
        target: ".six",
        content: "Here, it will list items you added from the menu. You can add or subtract quantities or delete the item.",
    },
    {
        target: ".seven",
        content: "Once you ordered with a waitstaff, you can stash your order by clicking me!",
    },
    {
        target: ".eight",
        content: "Don't worry all the past orders are saved here for you!",
    },
    {
        target: ".nine",
        content: "Now click me to go back to the main menu! Have Fun and Enjoy!",
    },
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