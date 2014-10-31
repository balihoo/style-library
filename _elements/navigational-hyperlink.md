---
layout: post
title: Navigation Hyperlink
---

These hyperlinks are used in page headers or workspace headers to allow the user to move to a different page. When one of these is clicked, revert any unsaved changes, throw away any selections or data entered into fields, and navigate to the desired page.

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
