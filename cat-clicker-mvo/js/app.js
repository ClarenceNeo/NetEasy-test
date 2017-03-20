// model

var model = {
	currentCat: null,
	currentAdmin: false,
	cats: [
	  {
	  	clickCount : 0,
	  	name : 'Tabby',
	  	imgSrc: 'img/cat_picture1.jpg',
	  	imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
	  },
	  {
	  	clickCount : 0,
	  	name : 'Tiger',
	  	imgSrc: 'img/cat_picture2.jpeg',
	  	imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904'
	  },
	  {
	  	clickCount : 0,
	  	name : 'Scaredy',
	  	imgSrc: 'img/cat_picture3.jpeg',
	  	imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709'
	  },
	  {
	  	clickCount : 0,
	  	name : 'Shadow',
	  	imgSrc: 'img/cat_picture4.jpeg',
	  	imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559'
	  },
	  {
	  	clickCount : 0,
	  	name : 'Sleepy',
	  	imgSrc: 'img/cat_picture5.jpeg',
	  	imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288'
	  }
	]
};

// octopus

var octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
		adminView.init();
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	getCats: function() {
		return model.cats;
	},
	setCurrentCat: function(cat) {
		return model.currentCat = cat;
	},
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	},
	getCurrentAdmin: function() {
		return model.currentAdmin;
	}
	hideAdmin: function() {
		return model.currentAdmin = false;
	},
	showAdmin: function() {
		return model.currentAdmin = true;
	},
	adminSave: function() {
	}
}

// view

var catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.render();
	},
	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
		this.countElem.textContent = '被点击了 ' + currentCat.clickCount + ' 次';
	}
};

var catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');

		this.render();
	},
	render: function() {
		var cat, elem, i;
		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for(i = 0; i < cats.length; i++) {
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				}
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

var adminView = {
	init: function() {
		this.adminElem = document.getElementById('admin');
		this.adminBtn = document.getElementById('b-admin');
		this.cancelBtn = document.getElementById('c-cancel');
		this.cancelBtn.addEventListener('click', function() {
			octopus.hideAdmin();
			this.render();
		});
		this.adminBtn.addEventListener('click', function() {
			octopus.showAdmin();
			this.render();
		})
		this.render();
	},
	render: function() {
		var adminView = octopus.getCurrentAdmin();
		if (adminView) {
			this.adminElem.style.display = "";
		} else {
			this.adminElem.style.display = "none";
		}
	}
}

octopus.init();