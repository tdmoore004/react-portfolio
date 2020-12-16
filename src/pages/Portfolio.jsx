import React from "react";
import FurLodgeGif from "../assets/images/furlodge-screen-recording.gif";
import BoredomBusterGif from "../assets/images/boredom-buster-screen-recording.gif";
import DevourBurgerGif from "../assets/images/devour-da-burger-screen-recording.gif";
import BudgetGif from "../assets/images/budget-tracker-screen-recording.gif";
import NoteTakerGif from "../assets/images/express-note-taker-screen-recording.gif"
import FitnessTrackerGif from "../assets/images/fitness-tracker-screen-recording.gif"

const Portfolio = () => {
    return (
        <main className="card grid-container grid-x align-center portfolio">
            <h3 className="card-divider">
                Portfolio
            </h3>
            <section className="card-section">
                <div className="grid-x grid-margin-x medium-up-2">
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://glacial-gorge-49813.herokuapp.com/" target="_blank">FurLodge</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={FurLodgeGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/fur-lodge" target="_blank">Github Repo</a></h5>
                                <p>Do you have a fur baby that you want the best personalized care for while you are out of town or busy? Check out FurLodge to find fellow fur baby lovers and owners who are willing to watch your beloved pet and give them the same personalized care you want for them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://tdmoore004.github.io/boredom-buster/" target="_blank">Boredom Buster</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={BoredomBusterGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/boredom-buster" target="_blank">Github Repo</a></h5>
                                <p>If you are bored and looking for something to do, Boredom Buster will help you quench that thirst for action. Use Boredom Buster to generate a random, or more specific, activity that you can do and save them for later if you need to keep your boredom organized.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://ancient-garden-46972.herokuapp.com/" target="_blank">Devour Da Burger!</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={DevourBurgerGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/devour-da-burger" target="_blank">Github Repo</a></h5>
                                <p>Do you love devouring all sorts of different burgers? Utilize Devour Da Burger to keep a list of any burger that you want to devour and mark of the ones that you have already eaten moving them to the "devoured" list.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://aqueous-plains-59839.herokuapp.com/" target="_blank">Progressive Budget Offline</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={BudgetGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/progressive-budget-offline" target="_blank">Github Repo</a></h5>
                                <p>Do you want to keep track of the money that you are spending but are not always online to do it? Well worry no more! With the Progressive Budget Offline app you can track all of your transactions whether you are connected to the internet or not.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://floating-sands-65820.herokuapp.com/" target="_blank">Express Note Taker</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={NoteTakerGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/express-note-taker" target="_blank">Github Repo</a></h5>
                                <p>Need to keep track of your thoughts and feelings regarding different topics? Use the Express Note Taker to log those thoughts and feelings and save them for later. Whether it be notes on a class lecture, a breakthrough business idea that you had or a rough draft on a speech that you have to give.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card web-dev">
                            <h4 className="card-divider"><a href="https://cryptic-hollows-98760.herokuapp.com/" target="_blank">Fitness Tracker</a></h4>
                            <div className="card-section portfolio">
                                <img className="web-dev-photo" src={FitnessTrackerGif}></img>
                                <h5 className="github"><a href="https://github.com/tdmoore004/workout-tracker" target="_blank">Github Repo</a></h5>
                                <p>Are you a physically active individual who wants to keep track of your fitness activity? Utilize this Fitness Tracker to log both your cardio and resistance workouts. Look back at your physical fitness and see the progress you are making.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Portfolio;