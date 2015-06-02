---
title: Text
---

Text fields are single line text inputs.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group bh--form-text">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="input1" class="col-sm-2 control-label">Text</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="input1" placeholder="Placeholder Text">
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

<div class="form-group bh--form-text">
  <label for="input1" class="col-sm-2 control-label">Text</label>
  <div class="col-sm-8">
    <!-- Text fields use a basic html text input with a from-control class. -->
    <input type="text" class="form-control" id="input1" placeholder="Placeholder Text"><!-- Placeholder text should be dynamic if supplied -->
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div><!-- /.form-group -->

{% endhighlight %}
