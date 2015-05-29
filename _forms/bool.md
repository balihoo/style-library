---
title: Boolean
order: 5
---

Description

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element. -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens. -->
    <div class="col-sm-8 col-sm-offset-2">
      <div class="checkbox">
      <label>
        <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."> Bool
      </label>
      </div>
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos%}

<div class="form-group">
  <!-- Checkboxes need an offset since the label is displayed to the right of the checkbox rather than to the left of the field. -->
  <div class="col-sm-8 col-sm-offset-2">
    <!-- The bool field is wrapped in a div with the class checkbox. -->
    <div class="checkbox">
      <label>
        <!-- The input is included inside the label tag. -->
        <input type="checkbox" id="blankCheckbox" value="option1"> Bool
      </label>
    </div>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
