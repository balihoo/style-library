---
layout: post
title: Radio Buttons
---

Use a radio button group when the user needs to select one option from 2-5 choices and there is a standard default. Radio buttons should always appear in groups of two or more, and should have the most likely option already selected. Usually the topmost option should be “All” or “None” to ensure that if the user doesn’t select anything, they are left on the most likely desired value. If there are more than five options, use a single-select list box.

Preview:

![Preview](http://placehold.it/350x150)

Code Sample:

{% highlight html %}
<div id="hcard-Christopher-John-Coyier" class="vcard">
 <a class="url fn n" href="http://chriscoyier.net">
  <span class="given-name">Christopher</span>
  <span class="additional-name">John</span>
  <span class="family-name">Coyier</span>
</a>
 <div class="org">CSS-Tricks</div>
 <a class="email" href="mailto:chriscoyier@gmail.com">chriscoyier@gmail.com</a>
 <div class="adr">
  <div class="street-address">123 Appleseed Street</div>
  <span class="locality">Chicago</span>, <span class="region">IL </span> <span class="postal-code">60647</span>
  <span class="country-name">United States</span>
 </div>
 <div class="tel">555-555-5555</div>
</div>
{% endhighlight %}
