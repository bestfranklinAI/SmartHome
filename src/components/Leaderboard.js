import React from "react";
import "../Leaderboard.css";

function Leaderboard() {
  function visualize() {
    var element = document.getElementById("lead");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

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

export default Leaderboard;
