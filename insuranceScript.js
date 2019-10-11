var year = new Date().getFullYear();

var copyrightFooter = 'Copyright ' + year + '&copy; Adventures Insurance';

document.getElementById('copyrightYear').innerHTML = copyrightFooter;




function checkFB() {
    var check = document.getElementById('facebookNews');

    if (check == null) {
        alert('there is no social media article');
    }
    
}
checkFB();
 

//facebook article

var facebookJSON = {

    "facebook": [
        {
            "Title": "Website Launch",
            "Date": "3/31/2019",
            "Description": "Adventures Insurance is excited to show off our new website!",
        },

        {
            "Title": "New Park Opens",
            "Date": "1/24/2019",
            "Description": "Palmetto Park Services has opened a new park in Chapin, SC. Their new location includes pony rides, playground equipment, and a splash zone.  'Without Adventures Insurance, we would never have been able to open,' said Palmetto's CEO.",
        },

        {
            "Title": "Happy New Year!",
            "Date": "1/1/2019",
            "Description": "We hope you have a safe and fantastic 2019!",
        }

    ]

}


/*function fillFacebook() {
    var facebookNews = document.getElementById('facebookNews');

    var facebookContent = "<h3>" + facebookJSON.facebook[0].Title + "</h3>" +
        "<h4>" + facebookJSON.facebook[0].Date + "</h4>" + "<p>" + facebookJSON.facebook[0].Description + "</p>" + "<h3>" + facebookJSON.facebook[1].Title + "</h3>" + "<h4>" + facebookJSON.facebook[1].Date + "</h4>" + "<p>" + facebookJSON.facebook[1].Description + "</p>" + "<h3>" + facebookJSON.facebook[2].Title + "</h3>" + "<h4>" + facebookJSON.facebook[2].Date + "</h4>" + "<p>" + facebookJSON.facebook[2].Description + "</p>";

    facebookNews.innerHTML = facebookContent;
}*/

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(3));
}

function randomExhibitImage() {
    
var exhibitArray = ['images/PGHZoo-sealions.png','images/Venice_Beach_Skatepark_(Unsplash).png','images/Family_Kingdom_Amusement_Park_3.png'];

    exhibitImage.setAttribute("src", exhibitArray[getRandomInt()]);

}

function showSubmitsign() {
    event.preventDefault();

    var firstName = document.getElementById('firstName');
    var contactType = document.getElementById('contactType');

    alert("Thank you for your feedback, " + firstName + ". Someone will contact you shortly by " + contactType + ".")
}

//fillFacebook();

//clicking events

var exhibitImage = document.getElementById('exhibitImage');
exhibitImage.addEventListener("click", randomExhibitImage);

var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", showSubmitSign);
