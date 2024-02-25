function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
        });


    missionAbort.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "red";
        });

    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
        });

    abortMission.addEventListener('click', function ( event ) {
        let answer = window.confirm("Are you sure you want to abort the mission?");
            if (answer == true) {
                window.alert("Mission aborted! Space shuttle returning home");
            }
    });
}

window.addEventListener("load", init);
