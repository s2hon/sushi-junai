import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        target: ".five",
        content: "Welcome to sushi cart!",
    },
    {
        target: ".six",
        content: "Here, it will list items you added from the menu. You can add or subtract quantities or delete the item.",
    },
    {
        target: "#seven",
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