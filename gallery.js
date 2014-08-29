var gallery = {
    images : [
	{
            "name": "Batman",
            "path": "images/Batman.jpg",
            "description": "I am justice!",
            "date": "2014-07-27T09:05:34.540Z"
	},
	{
            "name": "JudgeDredd",
	    "path": "images/JudgeDredd.jpg",
	    "description": "I am the law!",
	    "date": "2014-07-21T09:06:05.544Z"
	},
	{
	    "name": "Superman",
	    "path": "images/Superman.jpg",
	    "description": "A bird? A plane? No...",
	    "date": "2014-07-21T09:07:24.187Z"
	},
	{
	    "name": "Flash",
	    "path": "images/Flash.jpg",
	    "description": "Too fast...",
	    "date": "2014-07-21T09:07:47.683Z"
	}
    ]
}

//1.
function addNewImage(gall, name, path, description, date){
    var newImage = {};
    newImage.name = name;
    newImage.path = path;
    newImage.description = description;
    newImage.date = new Date(date);
    newImage.date = newImage.date.toISOString();
    gall.push(newImage);
    console.log("Was addad new image - '"+name+"'");
}
addNewImage(gallery.images, "GreenLantern", "images/GreenLanern.jpg", "In brightest day, in blackest night...", Date.now());

function editImage(gall, name, path, description, date) {
    for (i in gall) {
        var oldName;
	if (gall[i].name == oldName) {
	    obj[i].name = name;
	    obj[i].path = path;
	    obj[i].description = description;
	    obj[i].date = new Date(dt);
	    obj[i].date = gall[i].date.toISOString();
	    console.log("The name of image '"+oldName+"' was changed to '"+name+"'.");
	}
    }
}
editImage(gallery.images, "GreenLantern", "BlackLantern", "images/BlackLantern.jpg", "In brightest day, in blackest night...", Date.now());

function deleteImage(gall, name) {
    for (i in gall) {
	if (gall[i].name == name) {
	    gall.splice(i, 1);
	    console.log("Image '"+name+"' was deleted from gallery.");
	}
    }
}
deleteImage(gallery.images, "BlackLanern");

//2.
function galleryPresentation(gall) {
    for (i in gall) {
	console.log(i + ": " + gall[i]);
	for (n in gall[i]) {
	    console.log(n + ": " + gall[i][n]);
	}
    }
}
galleryPresentation(gallery.images);

//3.
function sortingGallery(gall, field) {
    gall.sort(field);
}
sortingGallery(gallery.images, "name");

//4.
function filteringGallery(gall, field) {
	var filtered = "";
        filtered = JSON.stringify(gall, [field]);
	filtered = JSON.parse(filtered);
}
filteringGallery(gallery.images, "name");

//5.
function serializingGallery(gall, field) {
	var serialized = "";
        for (i in gall) {
		if (gall[i].field != "") {
			serialized += JSON.stringify(gall[i]);
		}
	}
	return serialized;
}
serializingGallery(gallery.images, "name");


//6.
function hasDescriptionGallery(gall) {
	for(i in gall) {
		if (gall[i].description == "") {
			console.log(gall[i].name +"has no description.");
		}
	}
}
hasDescriptionGallery(gallery.images);



var gallery2 = {
    images2 : [
	{
            "name": "Wolverine",
            "path": "images2/Wolverine.jpg",
            "description": "Pff... Fu#* off...",
            "date": "2014-07-27T09:08:34.540Z"
	},
	{
            "name": "CaptainAmerica",
	    "path": "images2/CaptainAmerica.jpg",
	    "description": "In USA we trus!",
	    "date": "2014-07-21T09:10:05.544Z"
	},
	{
	    "name": "Hulk",
	    "path": "images2/Hulk.jpg",
	    "description": "HULK CRUSHES!!!",
	    "date": "2014-07-21T09:11:24.187Z"
	},
	{
	    "name": "TonnyStark",
	    "path": "images2/TonnyStark.jpg",
	    "description": "I am the Iron Man.",
	    "date": "2014-07-21T09:12:47.683Z"
	}
    ]
}

addNewImage(gallery2.images2, "Spiderman", "images2/Spiderman.jpg", "Hate this guy :C", Date.now());
editImage(gallery2.images2, "Spiderman", "Spydrmen", "images2/Spydrmen.jpg", "hink I'll delete him.", Date.now());
deleteImage(gallery2.images2, "Spydrmen");
galleryPresentation(gallery2.images2);
sortingGallery(gallery2.images2, "name");
filteringGallery(gallery2.images2, "name");
serializingGallery(gallery2.images2, "name");
hasDescriptionGallery(gallery2.images2);
