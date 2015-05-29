---
title: Select
order: 6
---

Select elements will display differently based on how they are configured.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element. -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens. -->
    <div class="col-sm-8 col-sm-offset-2">
      <div class="radio">
        <label>
          <input type="radio" name="radioOptions" id="radio1" value="option1"> option 1
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="radioOptions" id="radio2" value="option2" checked="checked"> option 2
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="radioOptions" id="radio3" value="option3"> option 3
        </label>
      </div>
      <!-- You may include help text. -->
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code 1

{% highlight html linenos %}

<div class="form-group">
  <!-- Radios are offset since there is no label visible to the left of the field. -->
  <div class="col-sm-8 col-sm-offset-2">
    <div class="radio">
      <label>
        <!-- The input tag is included inside the label tag. -->
        <input type="radio" name="radioOptions" id="radio1" value="option1"> option 1
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="radioOptions" id="radio2" value="option2" checked="checked"> option 2
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="radioOptions" id="radio3" value="option3"> option 3
      </label>
    </div>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}

**********

If no default option is provided then the single select field will display as a form dropdown.

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element. -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens.  -->
    <label for="select1" class="col-sm-2">Single Select Dropdown</label>
    <div id="select1" class="col-sm-8">
      <select class="form-control">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
      </select>
      <!-- You may include help text. -->
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code 2

{% highlight html linenos %}

<div class="form-group">
  <label for="select1" class="col-sm-2">Single Select Dropdown</label>
  <div id="select1" class="col-sm-8">
    <!-- A form dropdown is marked up using a select tag. Options are provided as a part of the select tag markup. -->
    <select class="form-control">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
