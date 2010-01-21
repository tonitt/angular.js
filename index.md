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
databinding, scope evaluation, mustaches

<div class="angular">
  Quantity: <input type="text" size="5" name="a" value="2"/>
  *
  Cost: <input type="text" size="5" name="b" value="4.2"/>
  = {{ page.open }} a * b | currency {{ page.close }}
</div>

Spreadsheet
-----------
repeater, filter, actions

{% include spreadsheet.html %}

Database
--------
Cross-site AJAX to a RESTful JSON store.

Here's an [example](/database.html) connecting to http://www.getangular.com


