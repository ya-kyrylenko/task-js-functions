var gallery = {
	images: [
		{
			"name": "cat",
			"path": "images/cat.png",
			"description": "The best cat ever",
			"date": "2014-07-21T09:05:34.540Z"
		},
		{
			"name": "dog",
			"path": "images/dog.png",
			"description": "The best dof ever",
			"date": "2014-07-21T09:06:05.544Z"
		},
		{
			"name": "giraffe",
			"path": "images/giraffe.png",
			"description": "",
			"date": "2014-07-21T09:07:24.187Z"
		},
		{
			"name": "dinosaur",
			"path": "images/dinosaur.png",
			"description": "The best dinosaur ever",
			"date": "2014-07-21T09:07:47.683Z"
		}
	],
	// додати
	add: function(name, path, description, date){
		var newImage = {};
		newImage.name = name;
		newImage.path = path;
		newImage.description = description;
		newImage.date = date;
		gallery.images.push(newImage);
		console.log("Add newImage");
	},
	// редагувати
	edit: function(name, newname, path, description, date){
		for (i in gallery.images) {
			if (gallery.images[i].name == name) {
				gallery.images[i].name = newname;
				gallery.images[i].path = path;
				gallery.images[i].description = description;
				gallery.images[i].date = date;
				console.log("Image "+ name + " was modified")
			}
		}
	},
	// видалити
	remove: function(name){
		for (i in gallery.images){
			if (gallery.images[i].name === name) {
				gallery.images.splice(i, 1);
				console.log("Image -" +name+" was deleted.")
			}
		}
	},
	// функція що виводить данні про передані картинки
	list: function(){
		count = 0;
		for(i in gallery.images){
			count ++;
			console.log(count + " image:");
			for(key in gallery.images[i]){
				console.log(key+": " + gallery.images[i][key]);
			}
		}
	},
	// сортування по зазначеному полю
	sortBy: function(field){
		for(i in gallery.images){
			var a = gallery.images[i];
			var b = gallery.images[i-1];
			gallery.images.sort(function(a, b){
				if (a[field] < b[field]) return -1;
				if (a[field] > b[field]) return 1;
				else return 0;
			})
		}
		console.log("Sorting passed successfully!")
	},
	// відфільтрувати картинки по переданому полю
	filtering: function(field){
		var filtered = 0;
		filtered = JSON.stringify(gallery.images, [field], 4);
		console.log(filtered);
	},
	// чи так? тут знаходяться картинки які мають конкретні значення полів 
	filtering2: function(field){
		var filtered = [];
		for(i in gallery.images){
			for(key in gallery.images[i]){
				if (gallery.images[i][key] === field){
					filtered.push(gallery.images[i]);
					break;
				}
			}
			
		}
		console.log(filtered);
	},
	// перевірка на наявність опису
	includeDescription: function(){
		count = 0;
		for(i in gallery.images){
			count ++;
			if (gallery.images[i].description ==""){
				console.log(count+" page with name:'" + gallery.images[i].name + "' has no description!")
			}
			if (gallery.images[i].description == undefined){
				console.log(count+" page with name:'" + gallery.images[i].name + "' has no description!")
			}
		}
	},
	// серіалізувати галерею в JSON
	serialize: function(){
		var galleryJSON = JSON.stringify(gallery.images, "", 4);
		console.log(galleryJSON);
		// чи малось на увазі це:
		// gallery.images = JSON.stringify(gallery.images, "", 4);
		// console.log(gallery.images);
	},
	// серіалізувати імена картинок
	serializeByName: function(){
		var imgNames = 0;
		count = 0;
		for (i in gallery.images){
			count++;
			imgNames += JSON.stringify(gallery.images[i].name);
			console.log(count+ " image have name: "+gallery.images[i].name);
		}
	},
	// серіалізувати лише картинки, що мають шлях до файла
	serializeByPath: function(){
		var imgWithPath = 0;
		for (i in gallery.images){
			if (gallery.images[i].path != "" && gallery.images[i].path != undefined){
				imgWithPath += JSON.stringify(gallery.images[i], "", 4);
			};
		}
		console.log(imgWithPath);
	}
}

gallery.add("kitty", "images/kitty.png", "The best kitty ever", "2014-07-21T09:06:05.544Z");
gallery.edit("dinosaur", "tauren", "", "The best tauren ever", "2014-07-21T09:05:34.540Z");
gallery.list();
gallery.sortBy("name");
gallery.list();
gallery.filtering2("2014-07-21T09:05:34.540Z");
gallery.includeDescription();
gallery.serialize();
gallery.serializeByPath(); // tauren не попав
gallery.serializeByName();
gallery.remove("cat");