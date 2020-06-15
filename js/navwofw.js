//
// MIT License
// Copyright (c) 2020 Kazuki UMEMOTO
// see https://github.com/UmemotoCtrl/NavWithoutFramework/ for details
//
(function () {
	var initConfig = {
		mobileMatchRegExp: new RegExp("iPhone|Android.+Mobile"),
		srcHamb: 'https://cdn.jsdelivr.net/gh/UmemotoCtrl/NavWithoutFramework@0.01/img/hamburger.svg',
		srcCross: 'https://cdn.jsdelivr.net/gh/UmemotoCtrl/NavWithoutFramework@0.01/img/cross.svg',
		cssRootProperties: {
			'--NavWoFwTextColor': 'whitesmoke',
			'--NavWoFwBackgroundColor': '#10606D',
			'--NavWoFwFocusedColor': '#008082',
			'--NavWoFwFontSize': '1.1rem',
			'--NavWoFwIconHeight': '3rem',
			'--NavWoFwLiPaddingDesktop': '0.75rem 0.5rem'
		},
		topMargin: 16,	// unit, px
		navCSSForMobile: `
			position: fixed; top: 0; left: 0;
			width: 100%;
			margin: 0;
			padding auto;
			background: var(--NavWoFwBackgroundColor);
			display: flex;
			color: var(--NavWoFwTextColor);
			align-items: center; // vertical
			// justify-content: center; // horizontal
			// flex-wrap
		`,
		contentsCSSForMobile: `
			img#NavWoFwImg {
				display: block;
				margin: auto 0 auto 0.5rem;
				// width: 2.5rem;
				height: calc(var(--NavWoFwIconHeight)*0.6);
			}
			h1#NavWoFwH1 {
				font-size: 1rem;
				// overflow: visible;
				overflow: hidden;
				// margin: auto 1rem;
				margin-left: 1rem;
				padding: 0;
				color: var(--NavWoFwTextColor);
			}
			#NavWoFwHamburger {
				margin: auto 0 auto auto;
				padding: 0;
				color: var(--NavWoFwTextColor);
				word-wrap: break-word;
				// word-break: break-all;
			}
			#NavWoFwHamburger a {
				color: var(--NavWoFwTextColor);
				text-decoration: none;
				font-weight: bold;
			}
			#NavWoFwHamburger > label > img {
				display: block;
				margin: auto 0 auto auto;
				width: var(--NavWoFwIconHeight);
				height: var(--NavWoFwIconHeight);
			}
			#NavWoFwHamburger > input {
				display: none;
			}
			#NavWoFwHamburger > ul {
				padding: 0;
				margin: 0;
				list-style-type: none;
				background: var(--NavWoFwBackgroundColor);
				max-width: var(--NavWoFwIconWidth);
			}
			#NavWoFwHamburger > ul ul {
				padding: 0;
				margin: 0.5rem 0 0 0;
				list-style-type: none;
			}
			#NavWoFwHamburger > ul > li {
				padding: 0.5rem 1rem;
				background: var(--NavWoFwBackgroundColor);
				border-bottom: 1px solid var(--NavWoFwTextColor);
			}
			#NavWoFwHamburger li li {
				padding: 0.5rem 1rem;
				border-top: 1px solid var(--NavWoFwTextColor);
			}
			#NavWoFwHamburger > input + label + ul{
				overflow: hidden;
				max-height: 0;
				transition-property: max-height max-width padding border;
				transition-duration: .2s;
				// transition: .2s;
				// transition-property: all;
				// -webkit-transition: max-height .2s ease;
				// -moz-transition: max-height .2s ease;
				// -o-transition: max-height .2s ease;
				// -ms-transition: max-height .2s ease;
			}
			#NavWoFwHamburger > input[type="checkbox"]:checked + label + ul {
				// height: fit-content;
				max-height: 40rem;
				max-width: 20rem;
				padding: 0.5rem;
			}
		`,
		navCSSForDesktop: `
			position: fixed; top: 0; left: 0;
			width: 100%;
			margin: 0;
			padding 0;
			background: var(--NavWoFwBackgroundColor);
			display: flex;
			align-items: center; // vertical
		`,
		contentsCSSForDesktop: `
			#NavWoFwHamburger > label,
			#NavWoFwHamburger > img,
			#NavWoFwHamburger > input {
				display: none;
			}
			img#NavWoFwImg {
				display: block;
				margin: auto 0 auto 0.5rem;
				// padding: 0.5rem;
				height: calc(var(--NavWoFwIconHeight)*0.6);
			}
			h1#NavWoFwH1 {
				overflow: hidden;
				margin: auto 0 auto 1rem;
				// margin-left: 1rem;
				padding: 0;
				color: var(--NavWoFwTextColor);
				font-size: 1.33rem;
			}
			div#NavWoFwHamburger {
				margin: auto 0 auto auto;
				padding: 0;
			}
			ul#NavWoFwMenu {
				color: var(--NavWoFwTextColor);
				text-align: center;
				display: flex;
				list-style-type: none;
				margin: auto 0;
				padding: 0;
				font-size: var(--NavWoFwFontSize);
			}
			ul#NavWoFwMenu li {
				margin: 0;
				padding: var(--NavWoFwLiPaddingDesktop);
				// transition-property: max-height padding background;
				transition-property: all;
				transition-duration: .2s;
			}
			ul#NavWoFwMenu a {
				text-decoration: none;
				color: var(--NavWoFwTextColor);
			}
			ul#NavWoFwMenu ul {
				list-style-type: none;
				margin: 0.5rem 0 0 0;
				padding: 0;
				font-size: var(--NavWoFwFontSize);
			}
			// ul#NavWoFwMenu ul:before {
			// 	display: inline;
			// 	content: "v";
			// }
			ul#NavWoFwMenu ul li {
				max-height: 0;
				overflow: hidden;
				padding: 0;
				background: var(--NavWoFwFocusedColor);
			}
			ul#NavWoFwMenu > li:hover {
				background: var(--NavWoFwFocusedColor);
			}
			ul#NavWoFwMenu li:hover > ul > li {
				max-height: 10rem;
				// overflow: visible;
				padding: var(--NavWoFwLiPaddingDesktop);
			}
			ul#NavWoFwMenu ul li:hover {
				background: var(--NavWoFwBackgroundColor);
			}
			ul#NavWoFwMenu li:hover > a {
				border-bottom: 2px solid;
			}
		`
	};

	window.navbarWoFw = {
		config: initConfig,
		mobile: false,
		ids: {
			NavWoFw: null,
			NavWoFwHamburger: 'NavWoFwHamburger',
			NavWoFwMenu: 'NavWoFwMenu',
			NavWoFwImg: 'NavWoFwImg',
			NavWoFwH1: 'NavWoFwH1',
			NavWoFwDiv: 'NavWoFwDiv'
		},
		elements: {
			NavWoFw: null,
			NavWoFwHamburger: null,
			NavWoFwMenu: null,
			NavWoFwImg: null,
			NavWoFwH1: null,
			NavWoFwDiv: null
		},
		css: '',
		addImg: function (argSrc, argAlt) {
			this.elements.NavWoFwImg = document.createElement("img");
			this.elements.NavWoFwImg.id = 'NavWoFwImg';
			this.elements.NavWoFwImg.alt = argAlt;
			this.elements.NavWoFwImg.src = argSrc;
		},
		addH1: function (argText) {
			this.elements.NavWoFwH1 = document.createElement("h1");
			this.elements.NavWoFwH1.id = 'NavWoFwH1';
			this.elements.NavWoFwH1.innerHTML = argText;
		},
		onClickHamburger: function (event) {
			this.setHamburgerMenu(document.querySelector(`#${this.ids.NavWoFwHamburger} > input`).checked);
			// if (document.querySelector(`#${this.ids.NavWoFwHamburger} > input`).checked)
			// 	document.querySelector(`#${this.ids.NavWoFwHamburger} > label >img`).src = this.config.srcCross;
			// else
			// 	document.querySelector(`#${this.ids.NavWoFwHamburger} > label > img`).src = this.config.srcHamb;
		},
		setHamburgerMenu: function ( argBool ) {
			if ( argBool ) {
				document.querySelector(`#${this.ids.NavWoFwHamburger} > input`).checked = true;
				document.querySelector(`#${this.ids.NavWoFwHamburger} > label > img`).src = this.config.srcCross;
			} else {
				document.querySelector(`#${this.ids.NavWoFwHamburger} > input`).checked = false;
				document.querySelector(`#${this.ids.NavWoFwHamburger} > label > img`).src = this.config.srcHamb;
			}
		},
		render: function () {
			// Add properties as css :root variable
			var keys = Object.keys(this.config.cssRootProperties);
			for (let ii = 0; ii < (keys||[]).length; ii++) {
				document.documentElement.style.setProperty(keys[ii], this.config.cssRootProperties[keys[ii]]);
				// .style.getPropertyValue('--a')
			}
	
			var style = document.createElement("style");
			this.mobile = navigator.userAgent.match(this.config.mobileMatchRegExp) || this.mobile;
			if ( this.mobile ) {
				this.elements.NavWoFw.onmouseleave = function() {window.navbarWoFw.setHamburgerMenu(false)};
				this.css = `nav#${this.ids.NavWoFw} {${this.config.navCSSForMobile}}${this.config.contentsCSSForMobile}`;
			} else {
				this.css = `nav#${this.ids.NavWoFw} {${this.config.navCSSForDesktop}}${this.config.contentsCSSForDesktop}`;
			}
			style.innerHTML = this.css;
			document.getElementsByTagName("head")[0].appendChild(style);
	
			var contents = [];
			if (this.elements.NavWoFwImg != null)
				contents.push(this.elements.NavWoFwImg);
			if (this.elements.NavWoFwH1 != null)
				contents.push(this.elements.NavWoFwH1);
			contents.push(this.elements.NavWoFwHamburger);
	
			for (let ii = 0; ii < (contents||[]).length; ii++)
				this.elements.NavWoFw.appendChild(contents[ii]);
			// Fix position of navbar elements.
			for (let ii = 0; ii < (contents||[]).length; ii++) {
				contents[ii].style.marginTop = (this.elements.NavWoFw.clientHeight - contents[ii].clientHeight)/2+'px';
			}
			// Fix width of list items.
			if (!this.mobile) {
				var listItems = document.getElementById('NavWoFwMenu').children;
				for (let ii = 0; ii < (listItems||[]).length; ii++) {
					listItems[ii].style.width = listItems[ii].clientWidth + 'px';
				}
			}
			
			this.elements.NavWoFw.style.height = this.elements.NavWoFw.clientHeight+'px';
			// this.elements.NavWoFw.style.width = this.elements.NavWoFw.clientWidth+'px';
			// this.elements.NavWoFw.style.overflow = 'visible';
	
			document.getElementsByTagName('body')[0].style.marginTop = this.elements.NavWoFw.clientHeight+this.config.topMargin+'px';
		},
		create: function ( argID, argList ) {
			this.elements.NavWoFw = document.getElementById(argID);
			this.ids.NavWoFw = argID;
		
			var NavWoFwHamburger = document.createElement('div');
			NavWoFwHamburger.id = 'NavWoFwHamburger';
			NavWoFwHamburger.innerHTML = `
			<input type="checkbox" id="NavWoFwHambChkBx" onclick="window.navbarWoFw.onClickHamburger()">
			<label for="NavWoFwHambChkBx"><img src="${this.config.srcHamb}"></label>`;
	
			var NavWoFwMenu = document.createElement("ul");
			NavWoFwMenu.innerHTML = argList;
			NavWoFwMenu = NavWoFwMenu.firstElementChild;
			NavWoFwMenu.id = 'NavWoFwMenu';
			NavWoFwHamburger.appendChild(NavWoFwMenu);
	
			this.elements.NavWoFwHamburger = NavWoFwHamburger;
	
			this.elements.NavWoFwMenu = NavWoFwMenu;
		}
	};
})();
