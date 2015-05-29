---
title: Color
order: 10
---

Description coming soon.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group bh--form-color">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="color1" class="col-sm-2 control-label">Color Picker</label>
    <div class="col-sm-8">
      <input type="text" id="color1" class="form-control bh--colorpicker">
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

<div class="form-group bh--form-color">
  <label for="color1" class="col-sm-2 control-label">Color Picker</label>
  <div class="col-sm-8">
    <!-- The colorpicker uses a text field. bh--colorpicker class is required for the js to initialize -->
    <input type="text" id="color1" class="form-control bh--colorpicker">
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
