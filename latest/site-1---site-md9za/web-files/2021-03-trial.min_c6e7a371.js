/*!
 * @title Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v14.1.0 - 2023-11-21
 *
 */
!function(o,t,r){"use strict";var i="wb-bonjour",d="."+i,e=r.doc,u={};e.on("nom.de.votre.evenement",d,function(e,n){e=e.currentTarget,e=o(e);e.append("Bonjour le monde"),n&&n.surpassetoi&&e.prepend("Surpasse toi")}),e.on("timerpoke.wb wb-init.wb-bonjour",d,function(e){var n=r.init(e,i,d);n&&(e=o(n),n=o.extend(!0,{},u,t[i],r.getData(e,i)),e.trigger("nom.de.votre.evenement",n),r.ready(e,i))}),r.add(d)}(jQuery,window,wb),function(o,t,r){"use strict";var i="wb-bonjour",d="."+i,e=r.doc,u={};e.on("nom.de.votre.evenement",d,function(e,n){e=e.currentTarget,e=o(e);e.append("Bonjour le monde"),n&&n.surpassetoi&&e.prepend("Surpasse toi")}),e.on("timerpoke.wb wb-init.wb-bonjour",d,function(e){var n=r.init(e,i,d);n&&(e=o(n),n=o.extend(!0,{},u,t[i],r.getData(e,i)),e.trigger("nom.de.votre.evenement",n),r.ready(e,i))}),r.add(d)}(jQuery,window,wb);