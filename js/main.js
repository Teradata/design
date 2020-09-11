var location = window.location.pathname.split('/')[2]; // Set to 1 for local development
var embedSource = document.getElementById("prototype").src;

console.log("location: " + location);

if (location) {
    switch (location) {
        default:
        case "home":
            page = "20%253A2360";
            break;
        case "changelog":
            page = "65%253A14";
            break;
        case "guides":
            page = "218%3A1466";
            break;
        case "basics":
            page = "218%3A1332";
            break;
        case "components":
            page = "218%3A600";
            break;
        case "features":
            page = "218%3A1600";
            break;
        case "templates":
            page = "218%3A1734";
            break;
    }

    // Swap out iframe embed id to navigate straight to the requested page
    var newSource = embedSource.replace("20%253A2360", page);
    document.getElementById("prototype").src = newSource;
}