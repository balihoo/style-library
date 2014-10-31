---
layout: post
title: Dialog
---

Modal dialogs pop up under the following conditions, and a lightbox effect grays out the rest of the screen until the user clicks to dismiss it.

* User needs to confirm a critical action.
* User needs to make an important decision that will result in an action involving data changes.

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
