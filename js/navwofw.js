//
// MIT License
// Copyright (c) 2020 Kazuki UMEMOTO
// see https://github.com/UmemotoCtrl/NavWithoutFramework/ for details
//
(function () {
	var initConfig = {
		mobileMatchRegExp: new RegExp("iPhone|Android.+Mobile"),
		cssRootProperties: {
			'--NavWoFwTextColor': 'whitesmoke',
			'--NavWoFwBackgroundColor': '#10606D',
			'--NavWoFwFocusedColor': '#008082',
			'--NavWoFwFontSize': '1.2rem',
			'--NavWoFwIconHeight': '3rem',
			'--NavWoFwLiPaddingDesktop': '0.5rem 0.5rem',
			'--NavWoFwMaxListHeight': '50rem'
		},
		topMargin: 16,	// unit, px
		headerCSSForMobile: `
			position: absolute; top: 0; left: 0;
			width: 100%;
			margin: 0;
			padding auto;
			background: var(--NavWoFwBackgroundColor);
			display: flex;
			color: var(--NavWoFwTextColor);
			align-items: center; // vertical
			// justify-content: center; // horizontal
			// flex-wrap
			// word-wrap: break-word;
			// word-break: break-all;
	`,
		contentsCSSForMobile: `
			html {
				scroll-behavior: smooth;
			}
			img#NavWoFwImg {
				display: block;
				margin: auto 0 auto 0.5rem;
				height: calc(var(--NavWoFwIconHeight)*0.6);
			}
			h1#NavWoFwH1 {
				font-size: 1rem;
				overflow: hidden;
				margin-left: 1rem;
				padding: 0;
				color: var(--NavWoFwTextColor);
			}
			nav#NavWoFw {
				margin: auto 0 auto auto;
				padding: 0;
				color: var(--NavWoFwTextColor);
			}
			#NavWoFw a {
				color: var(--NavWoFwTextColor);
				text-decoration: none;
				font-weight: bold;
			}
			#NavWoFw > label {
				display: block;
				text-align: center;
				width: var(--NavWoFwIconHeight);
				height: var(--NavWoFwIconHeight);
				line-height: var(--NavWoFwIconHeight);
				font-size: calc(var(--NavWoFwIconHeight)*0.8);
			}
			#NavWoFw > input {
				display: none;
			}
			#NavWoFw > ul {
				position: absolute; top: var(--NavWoFwIconHeight); right: 0;
				padding: 0;
				margin: 0;
				list-style-type: none;
				background: var(--NavWoFwBackgroundColor);
				max-width: var(--NavWoFwIconWidth);
			}
			#NavWoFw > ul > li {
				padding: 0.5rem 1rem;
				background: var(--NavWoFwBackgroundColor);
				border-bottom: 1px solid var(--NavWoFwTextColor);
			}
			#NavWoFw > ul ul {
				padding: 0;
				margin: 0.5rem 0 0 0;
				list-style-type: none;
			}
			#NavWoFw li li {
				padding: 0.5rem 1rem;
				border-top: 1px solid var(--NavWoFwTextColor);
			}
			#NavWoFw > input[type="checkbox"]:checked + label + ul {
				max-height: var(--NavWoFwMaxListHeight);
				max-width: 100%;
				padding: 0.5rem;
			}
			#NavWoFw > input + label + ul{
				overflow: hidden;
				max-height: 0;
				transition-property: max-height max-width padding border;
				transition-duration: .2s;
			}
			div#NavWoFwToTop {
				position: fixed; bottom: .5rem; left: .5rem;
				width: calc(var(--NavWoFwIconHeight)*0.6);
				height: calc(var(--NavWoFwIconHeight)*0.6);
				text-align: center;
				font-size: calc(var(--NavWoFwIconHeight)*0.6);
				font-weight: bold;
				color: black;
				border: 1px solid black;
				border-radius: calc(var(--NavWoFwIconHeight)*0.3);
				background: rgba(255,255,255, 0.5);
			}
		`,
		headerCSSForDesktop: `
			position: fixed; top: 0; left: 0;
			width: 100%;
			margin: 0;
			padding 0;
			background: var(--NavWoFwBackgroundColor);
			display: flex;
			align-items: center; // vertical
		`,
		contentsCSSForDesktop: `
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
			#NavWoFw {
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
				transition-property: all;
				transition-duration: .2s;
				white-space: nowrap;
			}
			ul#NavWoFwMenu a {
				text-decoration: none;
				color: var(--NavWoFwTextColor);
			}
			ul#NavWoFwMenu ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				font-size: var(--NavWoFwFontSize);
				transition-property: all;
				transition-duration: .2s;
			}
			ul#NavWoFwMenu ul li {
				max-height: 0;
				overflow: hidden;
				padding: 0;
				background: var(--NavWoFwFocusedColor);
			}
			ul#NavWoFwMenu > li:hover {
				background: var(--NavWoFwFocusedColor);
			}
			ul#NavWoFwMenu li:hover > ul {
				margin: 0.5rem 0 0 0;
			}
			ul#NavWoFwMenu li:hover > ul > li {
				max-height: calc(var(--NavWoFwMaxListHeight)*0.5);
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
			header: null,
			NavWoFw: 'NavWoFw',
			NavWoFwMenu: 'NavWoFwMenu',
			NavWoFwImg: 'NavWoFwImg',
			NavWoFwH1: 'NavWoFwH1',
			NavWoFwDiv: 'NavWoFwDiv',
			NavWoFwToTop: 'NavWoFwToTop'
		},
		elements: {
			header: null,
			NavWoFw: document.createElement('nav'),	
			NavWoFwMenu: document.createElement("ul"),	// ul
			NavWoFwImg: null,	// img
			NavWoFwH1: null,	// h1
			NavWoFwDiv: null,	// div, not implemented
			NavWoFwToTop: document.createElement("div")
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
		setHamburgerMenu: function ( argBool ) {
			if (this.mobile) {
				if ( argBool ) {
					document.querySelector(`#${this.ids.NavWoFw} > input`).checked = true;
				} else {
					document.querySelector(`#${this.ids.NavWoFw} > input`).checked = false;
				}
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
			if ( this.mobile ) {
				this.elements.NavWoFw.onmouseleave = function() {window.navbarWoFw.setHamburgerMenu(false)};
				this.css = `header {${this.config.headerCSSForMobile}}${this.config.contentsCSSForMobile}`;
			} else {
				this.css = `header {${this.config.headerCSSForDesktop}}${this.config.contentsCSSForDesktop}`;
			}
			style.innerHTML = this.css;
			document.getElementsByTagName("head")[0].appendChild(style);
	
			var contents = [];
			if (this.elements.NavWoFwImg != null)
				contents.push(this.elements.NavWoFwImg);
			if (this.elements.NavWoFwH1 != null)
				contents.push(this.elements.NavWoFwH1);
			contents.push(this.elements.NavWoFw);
	
			for (let ii = 0; ii < (contents||[]).length; ii++)
				this.elements.header.appendChild(contents[ii]);
			// Fix position of navbar elements.
			for (let ii = 0; ii < (contents||[]).length; ii++) {
				contents[ii].style.marginTop = (this.elements.header.clientHeight - contents[ii].clientHeight)/2+'px';
			}
			// Fix width of list items.
			if (!this.mobile) {
				var listItems = this.elements.NavWoFwMenu.children;
				for (let ii = 0; ii < (listItems||[]).length; ii++) {
					listItems[ii].style.width = listItems[ii].clientWidth + 'px';
				}
			}
			
			this.elements.header.style.height = this.elements.header.clientHeight+'px';
			// this.elements.header.style.width = this.elements.header.clientWidth+'px';
			// this.elements.header.style.overflow = 'visible';
	
			document.getElementsByTagName('body')[0].style.marginTop = this.elements.header.clientHeight+this.config.topMargin+'px';
		},
		create: function ( argList ) {
			this.mobile = navigator.userAgent.match(this.config.mobileMatchRegExp) || this.mobile;
			this.elements.header = document.getElementsByTagName('header')[0];

			this.elements.NavWoFw.id = this.ids.NavWoFw;
			if (this.mobile) {
				this.elements.NavWoFw.innerHTML = `
				<input type="checkbox" id="NavWoFwHambChkBx">
				<label for="NavWoFwHambChkBx">&#9776;</label>`;
			}
	
			this.elements.NavWoFwMenu.innerHTML = argList;
			this.elements.NavWoFwMenu = this.elements.NavWoFwMenu.firstElementChild;
			this.elements.NavWoFwMenu.id = this.ids.NavWoFwMenu;
			this.elements.NavWoFw.appendChild(this.elements.NavWoFwMenu);

			if (this.mobile) {
				this.elements.NavWoFwToTop.id = this.ids.NavWoFwToTop;
				this.elements.NavWoFwToTop.innerHTML = "^";
				this.elements.NavWoFwToTop.onclick = function(){scrollTo(0, 0);};
				this.elements.NavWoFw.appendChild(this.elements.NavWoFwToTop);
			}
		}
	};
})();
