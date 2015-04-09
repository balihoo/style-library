---
title: Radio Buttons
---

Use a radio button group when the user needs to select one option from 2-5 choices and there is a standard default. Radio buttons should always appear in groups of two or more, and should have the most likely option already selected. Usually the topmost option should be “All” or “None” to ensure that if the user doesn’t select anything, they are left on the most likely desired value. If there are more than five options, use a single-select list box.

### Preview:

<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
		All
	</label>
</div>
<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
		&lt; 1 Year
	</label>
</div>
<div class="radio disabled">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
		1 to 5 Years
	</label>
</div>
<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
		&gt; 5 Years
	</label>
</div>

### Code Sample:

{% highlight html %}
<!-- Radio Buttons -->
<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
		All
	</label>
</div>

<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
		&lt; 1 Year
	</label>
</div>

<div class="radio disabled">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
		1 to 5 Years
	</label>
</div>

<div class="radio">
	<label>
		<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
		&gt; 5 Years
	</label>
</div>
{% endhighlight %}
