---
title: Home
layout: default
open: '{{'
close: '}}'
---
angular.js
==========

Calculator
----------
<div class="angular">
  Quantity: <input type="text" name="a" value="2"/>
  *
  Cost: <input type="text" name="b" value="4.2"/>
  = {{ page.open }} a * b | currency {{ page.close }}
</div>

Spreadsheet
-----------
{% include spreadsheet.html %}


Database
--------


