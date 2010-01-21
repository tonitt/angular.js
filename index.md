---
title: Home
layout: default
open: '{{'
close: '}}'
---
angular.js
==========

Simple apps made simple.

Bi-directional databinding with a javascript library and a few custom attributes.

Calculator
----------
databinding, mustaches

<div class="angular">
  Quantity: <input type="text" size="5" name="a" value="2"/>
  *
  Cost: <input type="text" size="5" name="b" value="4.2"/>
  = {{ page.open }} a * b | currency {{ page.close }}
</div>

Spreadsheet
-----------
repeater, filters, actions

{% include spreadsheet.html %}

Database
--------
Cross-site AJAX to a RESTful JSON store.

Here's an [example](/database.html) connecting to http://www.getangular.com

Slides
------

<iframe src="http://docs.google.com/present/embed?id=d449gch_237xq95nwdq" frameborder="0" width="410" height="342"></iframe>

