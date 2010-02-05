function tabify(element, i) {
  function escape(html) {
    return html.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');;
  }
  function script(href) {
    return '  <script type="text/javascript" src="' + href + '"></script>\n';
  }
  function css(href) {
    return '  <link href="' + href + '" media="screen" rel="stylesheet" type="text/css" /> \n';
  }
  var source = $(element).html();
  var linkA = "tab-a-" + i;
  var linkB = "tab-b-" + i;
  var linkC = "tab-c-" + i;
  var header = 
    '<html>\n' +
    script('http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js') +
    script('http://github.com/documentcloud/underscore/raw/master/underscore.js') +
    script('http://github.com/angular/angular.js/raw/master/angular.js') +
    css('http://github.com/angular/angular.js/raw/master/css/angular.css') +
    '  <script type="text/javascript">\n' +
    '    $(function(){\n' +
    '      scope = angular.compile(document);\n' +
    '      scope = scope.init();\n' +
    '    });\n' +
    '  </script>\n' +
    '  <body>\n';
  var footter = 
    '  </body>\n' +
  	'</html>';
  var contents = "";
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
  contents += '<pre class="prettyprint" ng-non-bindable>';
  contents += escape(header);      
  contents += escape(source);      
  contents += escape(footter);      
  contents += '</pre>';
  contents += '</div>';
  
  var r = $(contents);
  var x = $(element).replaceWith(r);
  r.tabs();
};
