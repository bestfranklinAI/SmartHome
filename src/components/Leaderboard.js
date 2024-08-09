import React, {useState, useEffect} from "react";
import "../Leaderboard.css";

function Leaderboard() {
    const [user, setUser] = useState(1432);
    const [saved, setSaved] = useState(9.86);
    const [generated, setGenerated] = useState(13.25);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
    const intervalId = setInterval(() => {
        setInitialized(true);
        setUser((preuser) => Math.floor(Math.random() * 3) + preuser);
        setSaved((presaved) => Math.round(Math.random() * 3)/100 + presaved);
        setGenerated((pregenerated) => Math.round(Math.random() * 2)/100 + pregenerated);

    }, 1000); // Change 1000 to the interval time in milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty array means this effect runs once after the initial render





    function visualize() {
        var element = document.getElementById("lead");
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    if(initialized === false){
        return <h1>Loading...</h1>;
    }
    else{

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <button
                    className="glow-on-hover"
                    onClick={visualize}
                    style={{ margin: "20px" }}
                >
                    Leaderboard
                </button>
            </div>
            <div id="lead" style={{ display: "none" }}>

                <div id="container" className="row justify-content-around">
                    <div className="kpi-card orange">
                        <span className="card-value">{user}</span>

                        <span className="card-text">Total Users</span>
                        <i className="fas fa-shopping-cart icon"></i>
                    </div>


                    <div className="kpi-card purple">
                        <span className="card-value"> {saved.toFixed(2)} MWh </span>
                        <span className="card-text">Total Energy Saved</span>
                        <i className="fas fa-shopping-cart icon"></i>
                    </div>

                    <div className="kpi-card grey-dark">
                        <span className="card-value"> {generated.toFixed(2)} MWh </span>
                        <span className="card-text">Total Energy Generated</span>
                        <i className="fas fa-shopping-cart icon"></i>
                    </div>

                </div>





                <main>
                    <div id="header">
                        <h1>Leaderboard</h1>

                        <h4>Last Update: {new Date().toDateString()}</h4>
                    </div>
                    <div id="leaderboard">
                        <div className="ribbon"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="number">1</td>
                                    <td className="name">Jenny</td>
                                    <td className="points">
                                        $500{" "}
                                        <img
                                            className="gold-medal"
                                            src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                                            alt="gold medal"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="number">2</td>
                                    <td className="name">Franklin</td>
                                    <td className="points">$450</td>
                                </tr>
                                <tr>
                                    <td className="number">3</td>
                                    <td className="name">Melody</td>
                                    <td className="points">$400</td>
                                </tr>
                                <tr>
                                    <td className="number">4</td>
                                    <td className="name">Aaron</td>
                                    <td className="points">$390</td>
                                </tr>
                                <tr>
                                    <td className="number">5</td>
                                    <td className="name">Candy</td>
                                    <td className="points">$350</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="images">
                        <img className="cute" src="images/cutebear.png" alt="cute bear" />
                        <img className="cute" src="images/polarbear.gif" alt="cute" />
                        <img className="cute" src="images/cutie.png" alt="gif" />
                    </div>
                    <h4>Lobby TV version</h4>
                </main>

                <div
                    id="mobile"
                    className="row justify-content-around"
                    style={{ margin: "auto", width: "50%" }}
                >
                    <img
                        style={{ height: "500px", width: "auto" }}
                        src="images/iceberg.png"
                        alt="iceberg"
                    />

                    <img
                        style={{ height: "480px", width: "auto", marginTop: "10px" }}
                        src="images/mobile_leaderboard.png"
                        alt="mobile"
                    />
                </div>
            </div>

        </React.Fragment>
    );
}
}

export default Leaderboard;
