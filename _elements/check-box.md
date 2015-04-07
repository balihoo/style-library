---
title: Check Box
---

Use a check box when the user has a binary option (Yes or No). Make sure the check box is labeled clearly and that it defaults to the state most likely to be desired (often unselected, but occasionally selected makes more sense). Use a group of check boxes when the user needs to select any number of options from 1-9 choices. If possible, sub-group if there are more than five. If there are more than 10, use a multi-select list box.

### Preview:

<form>
	<div class="form-group">
		<div class="checkbox">
			<label>
				<input type="checkbox"> < 18
			</label>
		</div>
		<div class="checkbox">
			<label>
				<input type="checkbox"> 18–24
			</label>
		</div>
		<div class="checkbox disabled">
			<label>
				<input type="checkbox" disabled> 24–35
			</label>
		</div>
	</div>
</form>

### Code Sample:

{% highlight html %}
<!-- Checkboxes -->
<div class="checkbox">
	<label>
		<input type="checkbox"> &lt; 18
	</label>
</div>
<div class="checkbox">
	<label>
		<input type="checkbox"> 18–24
	</label>
</div>
<div class="checkbox disabled">
	<label>
		<input type="checkbox" disabled> 24–35
	</label>
</div>
{% endhighlight %}
