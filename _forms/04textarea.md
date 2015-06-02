---
title: Textarea
---

Textarea fields are multi-line text inputs.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group bh--form-textarea">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="textarea1" class="col-sm-2 control-label">Textarea</label>
    <div class="col-sm-8">
      <textarea class="form-control" rows="3" id="textarea1" placeholder="Placeholder"></textarea>
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

<div class="form-group bh--form-textarea">
  <label for="textarea1" class="col-sm-2 control-label">Textarea</label>
  <div class="col-sm-8">
    <!-- Text fields use a basic html textarea with a from-control class. -->
    <textarea class="form-control" rows="3" id="textarea1" placeholder="Placeholder"></textarea><!-- Placeholder text should be dynamic if supplied. -->
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
