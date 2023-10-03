$(function () {

    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(

            function (position) 
            {
                let { latitude, longitude, accuracy } = position.coords;

                $("#locationhere").text(`Your Current Location: Latitude ${latitude}, Longitude ${longitude}, Accuracy: ${accuracy} meters`);

                let storingLocation = localStorage.getItem("userLocation");

                if (storingLocation) 
                {
                    let storingLocationObj = JSON.parse(storingLocation);

                    let gap = calculategapfromAtoB(latitude, storingLocationObj.latitude, storingLocationObj.longitude, longitude);
                    
                    $("#content").append($("<div>").text(`Your Last Location: Latitude ${storingLocationObj.latitude}, Longitude ${storingLocationObj.longitude}`),
                                         $("<h2>").text("Welcome back to the page!"),
                                         $("<p>").text(`You traveled ${gap.toFixed(2)} meters since your last visit.`));
                } 
                else 
                {
                    $("#content").append($("<h2>").text("Welcome to the page for the first time!"));
                }

                let userLocation = 
                {
                    latitude: latitude,
                    longitude: longitude,
                };

                localStorage.setItem("userLocation", JSON.stringify(userLocation));
            },
            function (error) 
            {
                console.error("Error getting geolocation:", error);
                $("body").html("<h1>Error: Please allow geolocation to use the application.</h1>");
            }
        );
    } else 
    {
        console.error("Geolocation is not supported by your browser.");
        $("body").html("<h1>Error: Geolocation is not supported by your browser.</h1>");
    }

    function calculategapfromAtoB(lat1, lon1, lat2, lon2) 
    {
        let toRadians = function (num) 
        {
            return num * Math.PI / 180;
        }

        let R = 6371000; // radius of Earth in metres
        let φ1 = toRadians(lat1);
        let φ2 = toRadians(lat2);
        let Δφ = toRadians(lat2 - lat1);
        let Δλ = toRadians(lon2 - lon1);

        let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
    });
