function tabify(element, i) {
   var source = $(element).html();
   var linkA = "tab-a-" + i;
   var linkB = "tab-b-" + i;
   var linkC = "tab-c-" + i;
   contents = "";
   contents += '<div class="angular tabs">';
   contents += '<ul>';
   contents += '<li><a href="#' + linkA + '">angular</a></li>';
   contents += '<li><a href="#' + linkB + '">without</a></li>';
   contents += '<li><a href="#' + linkC + '">source</a></li>';
   contents += '</ul>';
   contents += '<div id="' + linkA + '">';
   contents += source;
   contents += '</div>';
   contents += '<div id="' + linkB + '" ng-non-bindable>';
   contents += source;        
   contents += '</div>';
   contents += '<div id="' + linkC + '" ng-non-bindable>';
   contents += '<pre class="prettyprint">';
   contents += source.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');      
   contents += '</pre>';
   contents += '</div>';
   
   var r = $(contents);
   var x = $(element).replaceWith(r);
   r.tabs();
};
