//
// MIT License
// Copyright (c) 2020 Kazuki UMEMOTO
// see https://github.com/UmemotoCtrl/NavWithoutFramework/ for details
//
window.navbarWoFw = {
	mobile: null,
	elements: {
		nav: null,
		NavWoFwBody: null,
		NavWoFwHamb: null,
		NavWoFwCross: null,
		NavWoFwMenu: null,
	},
	contents: new Array(),
	css: '',
	list: '',
	addH1: function (argText, argID) {
		var h1 = document.createElement("h1");
		h1.id = argID;
		h1.style = `
			color: whitesmoke;
			padding: 0;
			margin: auto 1rem;`;
		h1.innerHTML = argText;
		this.contents.push(h1);
		return this.contents.length-1;
	},
	onClickHamb: function (event) {
		var self = window.navbarWoFw.elements;
		self.NavWoFwHamb.style.display = 'none';
		self.NavWoFwCross.style.display = 'block';
		self.NavWoFwMenu.style.display = 'block';
	},
	onClickCross: function (event) {
		console.log("hogehgoe");
		var self = window.navbarWoFw.elements;
		self.NavWoFwHamb.style.display = 'block';
		self.NavWoFwCross.style.display = 'none';
		self.NavWoFwMenu.style.display = 'none';
	},
	render: function () {
		// console.log("hogehoge.");
		var style = document.createElement("style");
		style.innerHTML = this.css;
		document.getElementsByTagName("head")[0].appendChild(style);

		this.elements.NavWoFwHamb.onclick = this.onClickHamb;
		this.elements.NavWoFwCross.onclick = this.onClickCross;
		// this.elements.NavWoFwMenu.mouseleave = this.onClickCross;
		// this.elements.nav.mouseleave = this.onClickCross;
		// this.elements.nav.mouseout = this.onClickCross;
		// this.elements.nav.blur = this.onClickCross;
		
		this.elements.NavWoFwMenu.innerHTML = this.list;
		this.elements.NavWoFwBody.appendChild(this.elements.NavWoFwHamb);
		this.elements.NavWoFwBody.appendChild(this.elements.NavWoFwCross);
		this.elements.NavWoFwBody.appendChild(this.elements.NavWoFwMenu);

		this.contents.push(this.elements.NavWoFwBody);

		for (let ii = 0; ii < (this.contents||[]).length; ii++)
			this.elements.nav.appendChild(this.contents[ii]);
		for (let ii = 0; ii < (this.contents||[]).length; ii++) {
			this.contents[ii].style.marginTop = (this.elements.nav.clientHeight - this.contents[ii].clientHeight)/2+'px';
		}
		
		this.elements.nav.style.height = this.elements.nav.clientHeight+'px';
		this.elements.nav.style.overflow = 'visible';

		document.getElementsByTagName('body')[0].style.marginTop = this.elements.nav.clientHeight+10+'px';
	},
	create: function ( argID, argList ) {
		var hamb = `
		<svg
		   xmlns:dc="http://purl.org/dc/elements/1.1/"
		   xmlns:cc="http://creativecommons.org/ns#"
		   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		   xmlns:svg="http://www.w3.org/2000/svg"
		   xmlns="http://www.w3.org/2000/svg"
		   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
		   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
		   sodipodi:docname="hamburger.svg"
		   inkscape:version="1.0 (4035a4f, 2020-05-01)"
		   id="svg8"
		   version="1.1"
		   viewBox="0 0 67.733332 67.733334"
		   height="256"
		   width="256">
		  <defs
			 id="defs2" />
		  <sodipodi:namedview
			 inkscape:window-maximized="0"
			 inkscape:window-y="213"
			 inkscape:window-x="710"
			 inkscape:window-height="1174"
			 inkscape:window-width="1663"
			 units="px"
			 showgrid="false"
			 inkscape:document-rotation="0"
			 inkscape:current-layer="svg8"
			 inkscape:document-units="mm"
			 inkscape:cy="122.65528"
			 inkscape:cx="66.46596"
			 inkscape:zoom="2.8"
			 inkscape:pageshadow="2"
			 inkscape:pageopacity="0.0"
			 borderopacity="1.0"
			 bordercolor="#666666"
			 pagecolor="#ffffff"
			 id="base" />
		  <metadata
			 id="metadata5">
			<rdf:RDF>
			  <cc:Work
				 rdf:about="">
				<dc:format>image/svg+xml</dc:format>
				<dc:type
				   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
				<dc:title></dc:title>
			  </cc:Work>
			</rdf:RDF>
		  </metadata>
		  <g
			 id="layer1"
			 inkscape:groupmode="layer"
			 inkscape:label="layer1">
			<rect
			   ry="4.2522321"
			   y="7.4650302"
			   x="7.0870533"
			   height="8.5044641"
			   width="53.9561"
			   id="rect18"
			   style="fill:#cccccc;stroke-width:0.264583" />
			<rect
			   style="fill:#cccccc;stroke-width:0.264583"
			   id="rect18-6"
			   width="53.9561"
			   height="8.5044641"
			   x="7.0398073"
			   y="29.671131"
			   ry="4.2522321" />
			<rect
			   style="fill:#cccccc;stroke-width:0.264583"
			   id="rect18-1"
			   width="53.9561"
			   height="8.5044641"
			   x="7.1343012"
			   y="51.215775"
			   ry="4.2522321" />
		  </g>
		</svg>
		`;
		var cross = `<svg
		xmlns:dc="http://purl.org/dc/elements/1.1/"
		xmlns:cc="http://creativecommons.org/ns#"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		xmlns:svg="http://www.w3.org/2000/svg"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
		xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
		width="256"
		height="256"
		viewBox="0 0 67.733332 67.733334"
		version="1.1"
		id="svg8"
		inkscape:version="1.0 (4035a4f, 2020-05-01)"
		sodipodi:docname="cross.svg">
		<defs
			id="defs2" />
		<sodipodi:namedview
			id="base"
			pagecolor="#ffffff"
			bordercolor="#666666"
			borderopacity="1.0"
			inkscape:pageopacity="0.0"
			inkscape:pageshadow="2"
			inkscape:zoom="2.8"
			inkscape:cx="66.46596"
			inkscape:cy="122.65528"
			inkscape:document-units="mm"
			inkscape:current-layer="layer1"
			inkscape:document-rotation="0"
			showgrid="false"
			units="px"
			inkscape:window-width="1663"
			inkscape:window-height="1174"
			inkscape:window-x="1254"
			inkscape:window-y="331"
			inkscape:window-maximized="0" />
		<metadata
			id="metadata5">
			<rdf:RDF>
			<cc:Work
				rdf:about="">
				<dc:format>image/svg+xml</dc:format>
				<dc:type
					rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
				<dc:title />
			</cc:Work>
			</rdf:RDF>
		</metadata>
		<g
			inkscape:label="layer1"
			inkscape:groupmode="layer"
			id="layer1">
			<rect
				transform="rotate(47.289334)"
				ry="3.8608382"
				y="-5.651845"
				x="12.396724"
				height="7.7216763"
				width="72.404984"
				id="rect18-6"
				style="fill:#cccccc;stroke-width:0.292051" />
			<rect
				style="fill:#cccccc;stroke-width:0.292051"
				id="rect107"
				width="72.404984"
				height="7.7216763"
				x="-34.108212"
				y="44.726257"
				ry="3.8608382"
				transform="matrix(-0.67829647,0.73478834,0.73478834,0.67829647,0,0)" />
		</g>
		</svg>
		`;
	
		this.elements.nav = document.getElementById(argID);
		this.elements.nav.mouseleave = this.onClickCross;
	
		var NavWoFwBody = document.createElement("div");
		NavWoFwBody.id = 'NavWoFwBody';
		this.elements.NavWoFwBody = NavWoFwBody;
	
		var temp = document.createElement('div');
		temp.innerHTML = hamb;
		var NavWoFwHamb = temp.firstElementChild;
		NavWoFwHamb.id = 'NavWoFwHamb';
		NavWoFwHamb.style.width = '5rem';
		NavWoFwHamb.style.height = '5rem';
		NavWoFwHamb.style.margin = '0';
		NavWoFwHamb.style.marginRight = '0.5rem';
		NavWoFwHamb.style.marginLeft = 'auto';
		this.elements.NavWoFwHamb = NavWoFwHamb;
	
		temp.innerHTML = cross;
		var NavWoFwCross = temp.firstElementChild;
		NavWoFwCross.id = 'NavWoFwCross';
		NavWoFwCross.style.width = '5rem';
		NavWoFwCross.style.height = '5rem';
		NavWoFwCross.style.display = 'none';
		NavWoFwCross.style.marginRight = '0.5rem';
		NavWoFwCross.style.marginLeft = 'auto';
		this.elements.NavWoFwCross = NavWoFwCross;
	
		var NavWoFwMenu = document.createElement("div");
		NavWoFwMenu.id = 'NavWoFwMenu';
		this.elements.NavWoFwMenu = NavWoFwMenu;
		// NavWoFwMenu.mouseleave = this.onClickCross;
		// this.elements.NavWoFwMenu.mouseleave = this.onClickCross;
		// this.elements.nav.mouseleave = this.onClickCross;
		// this.elements.nav.mouseout = this.onClickCross;
		// this.elements.nav.blur = this.onClickCross;
	
		this.list = argList;

		if ( navigator.userAgent.match(/iPhone|Android.+Mobile/)|| this.mobile==true) {
			this.css = `nav#${argID} {
				position: fixed; top: 0; left: 0;
				width: 100%;
				margin: 0;
				padding 0;
				// background: whitesmoke;
				background: mediumseagreen;
				display: flex;
				// display: table-cell;
				// vertical-align: middle;
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			div#NavWoFwMenu {
				display: none;
				// background: rgb(124, 124, 124);
				border-radius: 0.3rem;
				border: 1px solid #bec0c2;
				background: whitesmoke;
				// min-width: 5rem;
				margin: 0;
				padding: 1rem 0 1rem 4rem;
				height: fit-content;
				width: fit-content;
				// position: relative;
			}
			div#NavWoFwMenu a {
				// display: block;
				// text-decoration: none;
				// color: rgb(51, 51, 51);
			}
			div#NavWoFwMenu ul {
				margin: 0;
				padding: 0;
				font-size: 3rem;
				list-style-type: none;
			}
			div#NavWoFwMenu li {
				// border: 1px solid #bec0c2;
				margin: 0;
				padding: 0.5rem 2rem;
			}`;
		} else {
			NavWoFwHamb.style.display = 'none';
			this.css = `nav#${argID} {
				position: fixed; top: 0; left: 0;
				width: 100%;
				margin: 0;
				padding 0;
				// background: whitesmoke;
				background: mediumseagreen;
				display: flex;
				// display: table-cell;
				// vertical-align: middle;
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			div#NavWoFwMenu {
				border-radius: 0.3rem;
				// border: 1px solid #bec0c2;
				// background: whitesmoke;
				margin: 0;
				padding: 0;
				height: fit-content;
				width: fit-content;
				// position: relative;
			}
			div#NavWoFwMenu a {
				// display: block;
				text-decoration: none;
				color: whitesmoke;
				// color: rgb(51, 51, 51);
			}
			div#NavWoFwMenu ul {
				display: flex;
				margin: 0;
				padding: 0;
				font-size: 1.33rem;
				list-style-type: none;
			}
			div#NavWoFwMenu ul ul {
				display: none;
			}
			div#NavWoFwMenu li {
				// border: 1px solid #bec0c2;
				margin: 0;
				padding: 0.7rem 1rem;
			}
			div#NavWoFwMenu li:hover {
				background: rgb(94, 206, 145);
			}
			div#NavWoFwMenu li:hover ul {
				display: block;
			}
			div#NavWoFwMenu li li {}
			div#NavWoFwMenu li li:hover {
				background: mediumseagreen;
			}`;
		}
	}
};

/*
// For MathJax
// if ( !navigator.userAgent.match(/iPhone|Android.+Mobile/) )
// 	$('.MathJax').css('font-size','1em !important');
(function () {
	window.MathJax = {
		tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']]
		},
		svg: {
		fontCache: 'global'
		}
	};
	var scriptIE = document.createElement("script");
	scriptIE.src  = "https://polyfill.io/v3/polyfill.min.js?features=es6";
	document.getElementsByTagName("head")[0].appendChild(scriptIE);
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src  = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
	document.getElementsByTagName("head")[0].appendChild(script);
	script.onload = (function () {
		// console.log(MathJax);
	})();
})();

var translateInnerAnchor = function (argText) {
	argText = argText.replace(/\[(.+?)\]\((\.\/)(?!\?id\=)\)/g, "<a href='javascript:loadMd(\"$2\",true);'>$1</a>");	// Inner Anchor Link
	argText = argText.replace(/\[(.+?)\]\((\.\/\?id\=.*?)\)/g, "<a href='javascript:loadMd(\"$2\",true);'>$1</a>");		// Inner Anchor Link
	return argText;
}
var loadMd = function ( argText, gaSend ) {
	// Load markdown file
	let file = "./md/" + argText.replace("./?id=","").replace(/:/g, "/") + ".md";
	if (argText=="./")
		file="./md/index.md";
	fetch(file).then(function(response) {
		return response.text();
	}).then(function(data) {
		article.innerHTML = mdp.render(translateInnerAnchor(data));
		// var h1 = document.querySelector("div#article>h1:first-child")|[];
		if (/^# (.+?)$/m.test(data))
			document.title = data.match(/^# (.+?)$/m)[1];
		titleH1.innerHTML = document.title;
		// For Google Analytics SPA ---
		if ( gaSend ) {
			HBIconState = true;
			HBIcon.onclick();
			window.history.pushState(null, null, argText);
			scrollTo(0, 0);  // absolute (hr, ver)
			ga('set', 'page', "/"+location.search);
			ga('send', 'pageview');
		}
		// --- For Google Analytics SPA
		if ( MathJax.typesetPromise )
			MathJax.typesetPromise();
	});
}

var mdp;
var article;
var topMenu;
var Hamburger;
var HBMenu;
var HBIcon;
var HBIconState = false;
var titleH1;
var NavBar;

window.onload = function() {
	mdp = makeMDP();
	article = document.getElementById("article");
	topMenu = document.getElementById("TopMenu");
	titleH1 = document.getElementById("Title");
	Hamburger = document.getElementById("Hamburger");
	HBMenu = document.getElementById("HBMenu");
	HBIcon = document.getElementById("HBIcon");
	NavBar = document.getElementById("NavBar");

	if ( navigator.userAgent.match(/iPhone|Android.+Mobile/) ) {
	// if (true) {
		topMenu.style.display = 'none';
		NavBar.style.maxHeight = '5rem';
		titleH1.style.fontSize = '3rem';
		const root = document.documentElement;
		root.style.setProperty('--nav-heigh', '5rem');
	} else {
		Hamburger.style.display = 'none';
	}
		
	// Load top menu
	fetch('./md/topMenu.md').then(function(response) {
		return response.text();
	}).then(function(data) {
		topMenu.innerHTML = mdp.render(translateInnerAnchor(data));
		HBMenu.innerHTML = mdp.render(translateInnerAnchor(data));
	});
	this.HBIcon.onclick = function(){
		if (HBIconState) {
			HBIconState = false;
			HBIcon.style.backgroundImage = 'url(/img/hamburger.svg)';
			HBMenu.style.display = 'none';
		} else {
			HBIconState = true;
			HBIcon.style.backgroundImage = 'url(/img/cross.svg)';
			HBMenu.style.display = 'block';
		}
	};

	// Load Main md file
	loadMd( "./"+location.search, false);
}


*/