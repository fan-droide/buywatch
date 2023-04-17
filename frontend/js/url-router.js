const urlPageTitle = "JS Single Page Application Router";

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches("nav a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

const loadScript = (FILE_URL, async = true, type = "module") => {
    return new Promise((resolve, reject) => {
        try {
            const scriptEle = document.createElement("script");
            scriptEle.type = type;
            scriptEle.async = async;
            scriptEle.src =FILE_URL;

            scriptEle.addEventListener("load", (ev) => {
                resolve({ status: true });
            });

            scriptEle.addEventListener("error", (ev) => {
                reject({
                    status: false,
                    message: `Failed to load the script ＄{FILE_URL}`
                });
            });

            document.body.appendChild(scriptEle);
        } catch (error) {
            reject(error);
        }
    });
};


// create an object that maps the url to the template, title, and description
const urlRoutes = {
	404: {
		template: "/templates/404.html",
		title: "404 | " + urlPageTitle,
		description: "Page not found",
	},
	"/": {
		template: "/templates/home.html",
		title: "Home | " + urlPageTitle,
		description: "This is the home page",
	},
	"/collection": {
		template: "/templates/collection.html",
		title: "Collection | " + urlPageTitle,
		description: "This is the collection page",
		src: "./js/collection.js",
	},
	"/login": {
		template: "/templates/login.html",
		title: "Login | " + urlPageTitle,
		description: "This is the login page",
	},
	"/form": {
		template: "/templates/form.html",
		title: "Form | " + urlPageTitle,
		description: "This is the form page",
	},
	"/viewer": {
		template: "/templates/viewer.html",
		title: "Viewer | " + urlPageTitle,
		description: "This is the viewer page",
	},	
};

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = async () => {
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the urlRoutes object
	const route = urlRoutes[location] || urlRoutes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
	if(route.src){
		loadScript(route.src)
		.then( data  => {
			console.log("Script loaded successfully", data);
			
		})
		.catch( err => {
			console.error(err);
		});
	}
	
};

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();
