//
// MIT License
// Copyright (c) 2020 Kazuki UMEMOTO
// see https://github.com/UmemotoCtrl/NavWithoutFramework/ for details
//
window.navbarWoFw = {
	config: {
		srcHamb: '/img/hamburger.svg',
		srcCross: '/img/cross.svg',
		// colors: ['whitesmoke', 'mediumseagreen', 'rgb(123, 211, 163)']
		// colors: ['whitesmoke', '#8B008C', '#CC00CD']
		colors: ['whitesmoke', '#10606D', '#008082']
	},
	mobile: null,
	elements: {
		NavWoFw: null,
		NavWoFwBody: null,
		NavWoFwHamberger: null,
		NavWoFwMenu: null,
		NavWoFwImg: null,
		NavWoFwH1: null,
		NavWoFwDiv: null,
	},
	css: '',
	list: '',
	addH1: function (argText) {
		this.elements.NavWoFwH1 = document.createElement("h1");
		this.elements.NavWoFwH1.id = 'NavWoFwH1';
		this.elements.NavWoFwH1.innerHTML = argText;
	},
	onClickHamberger: function (event) {
		if (document.querySelector('#NavWoFwHamberger > input').checked)
			document.querySelector('#NavWoFwHamberger > label >img').src = window.navbarWoFw.config.srcCross;
		else
			document.querySelector('#NavWoFwHamberger > label > img').src = window.navbarWoFw.config.srcHamb;
	},
	render: function () {
		// console.log("hogehoge.");
		var style = document.createElement("style");
		style.innerHTML = this.css;
		document.getElementsByTagName("head")[0].appendChild(style);

		this.elements.NavWoFwBody.appendChild(this.elements.NavWoFwHamberger);
		// this.elements.NavWoFwBody.appendChild(this.elements.NavWoFwMenu);

		var contents = [];
		if (this.elements.NavWoFwImg != null)
			contents.push(this.elements.NavWoFwImg);
		if (this.elements.NavWoFwH1 != null)
			contents.push(this.elements.NavWoFwH1);
		contents.push(this.elements.NavWoFwBody);

		for (let ii = 0; ii < (contents||[]).length; ii++)
			this.elements.NavWoFw.appendChild(contents[ii]);
		for (let ii = 0; ii < (contents||[]).length; ii++) {
			contents[ii].style.marginTop =
				(this.elements.NavWoFw.clientHeight
					- contents[ii].clientHeight)/2+'px';
		}
		
		this.elements.NavWoFw.style.height = this.elements.NavWoFw.clientHeight+'px';
		// this.elements.NavWoFw.style.width = this.elements.NavWoFw.clientWidth+'px';
		// this.elements.NavWoFw.style.overflow = 'visible';

		document.getElementsByTagName('body')[0].style.marginTop = this.elements.NavWoFw.clientHeight+10+'px';
	},
	create: function ( argID, argList ) {
		this.elements.NavWoFw = document.getElementById(argID);
		// this.elements.NavWoFw.mouseleave = this.onClickCross;
	
		var NavWoFwBody = document.createElement("div");
		NavWoFwBody.id = 'NavWoFwBody';
		this.elements.NavWoFwBody = NavWoFwBody;

		var NavWoFwHamberger = document.createElement('div');
		NavWoFwHamberger.id = 'NavWoFwHamberger';
		NavWoFwHamberger.innerHTML = `
		<input type="checkbox" id="NavWoFwHambChkBx" onclick="window.navbarWoFw.onClickHamberger()">
		<label for="NavWoFwHambChkBx"><img src="${this.config.srcHamb}"></label>`;

		this.list = argList;
		var NavWoFwMenu = document.createElement("div");
		NavWoFwMenu.innerHTML = this.list;
		NavWoFwMenu = NavWoFwMenu.firstChild;
		NavWoFwMenu.id = 'NavWoFwMenu';
		NavWoFwHamberger.appendChild(NavWoFwMenu);

		this.elements.NavWoFwHamberger = NavWoFwHamberger;

		this.elements.NavWoFwMenu = NavWoFwMenu;
		
		var textColor = this.config.colors[0];
		var bgColor = this.config.colors[1];
		var focusedBgColor = this.config.colors[2];
		if ( navigator.userAgent.match(/iPhone|Android.+Mobile/)|| this.mobile==true) {
			// this.elements.NavWoFwMenu.mouseleave = this.onClickHamberger;
			// this.elements.NavWoFwMenu.mouseout = this.onClickHamberger;
			// this.elements.NavWoFwMenu.blur = this.onClickHamberger;
			this.css = `
			nav#${argID} {
				position: fixed; top: 0; left: 0;
				width: 100%;
				margin: 0;
				padding auto;
				background: ${bgColor};
				display: flex;
				align-items: center; // vertical
				color: ${textColor};
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			h1#NavWoFwH1 {
				font-size: 1rem;
				word-break: break-all;
				word-wrap: break-word;
				overflow: hidden;
				margin: auto 1rem;
				padding: 0;
				color: ${textColor};
			}
			#NavWoFwHamberger {
				color: ${textColor};
			}
			#NavWoFwHamberger a {
				color: ${textColor};
				text-decoration: none;
				font-weight: bold;
			}
			#NavWoFwHamberger > label > img {
				display: block;
				margin: auto 0 auto auto;
				width: 3rem;
				height: 3rem;
			}
			#NavWoFwHamberger > input {
				display: none;
			}
			#NavWoFwHamberger > ul {
				padding: 0;
				margin: 0;
				list-style-type: none;
				background: ${bgColor};
			}
			#NavWoFwHamberger > ul ul {
				padding: 0;
				margin: 0.5rem 0 0 0;
				list-style-type: none;
			}
			#NavWoFwHamberger > ul > li {
				padding: 0.5rem 1rem;
				background: ${bgColor};
				border-bottom: 1px solid ${textColor};
			}
			#NavWoFwHamberger li li {
				padding: 0.5rem 1rem;
				border-top: 1px solid ${textColor};
			}
			#NavWoFwHamberger > input + label + ul{
				overflow: hidden;
				max-height: 0;
				transition-property: max-height padding border;
				transition-duration: .2s;
				// transition: .2s;
				// transition-property: all;
				// -webkit-transition: max-height .2s ease;
				// -moz-transition: max-height .2s ease;
				// -o-transition: max-height .2s ease;
				// -ms-transition: max-height .2s ease;
			}
			#NavWoFwHamberger > input[type="checkbox"]:checked + label + ul {
				// height: fit-content;
				max-height: 40rem;
				padding: 0.5rem;
			}
			`;
		} else {
			this.css = `
			#NavWoFwHamberger > label,
			#NavWoFwHamberger > img,
			#NavWoFwHamberger > input {
				display: none;
			}
			nav#${argID} {
				position: fixed; top: 0; left: 0;
				width: 100%;
				margin: 0;
				padding 0;
				background: ${bgColor};
				display: flex;
				align-items: center; // vertical
				// justify-content: center; // horizontal
			}
			h1#NavWoFwH1 {
				overflow: hidden;
				margin: auto 1rem;
				padding: 0;
				color: ${textColor};
			}
			div#NavWoFwBody {
				margin: auto 0 auto auto;
				padding: 0;
			}
			ul#NavWoFwMenu {
				color: ${textColor};
				text-align: center;
				display: flex;
				list-style-type: none;
				margin: 0;
				padding: 0;
				font-size: 1.33rem;
			}
			ul#NavWoFwMenu li {
				margin: 0;
				padding: 0.7rem 1rem;
				// transition-property: max-height padding background;
				transition-property: all;
				transition-duration: .2s;
			}
			ul#NavWoFwMenu a {
				text-decoration: none;
				color: ${textColor};
			}
			ul#NavWoFwMenu ul {
				list-style-type: none;
				margin: 0.5rem 0 0 0;
				padding: 0;
				font-size: 1.33rem;
			}
			ul#NavWoFwMenu ul li {
				max-height: 0;
				overflow: hidden;
				padding: 0;
				background: ${focusedBgColor};
			}
			ul#NavWoFwMenu > li:hover {
				background: ${focusedBgColor};
			}
			ul#NavWoFwMenu li:hover > ul > li {
				max-height: 10rem;
				// overflow: visible;
				padding: 0.7rem 1rem;
			}
			ul#NavWoFwMenu ul li:hover {
				background: ${bgColor};
			}
			ul#NavWoFwMenu li:hover > a {
				border-bottom: 2px solid;
			}
			`;
		}
	}
};
