---
title: Multi-Select
---

Multi-Select elements will display differently based on how they are configured.

**********

If there are 10 or fewer items then the multi-select field will display as checkboxes (regradless of whether a default value is provided or not).

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <div class="col-sm-8 col-sm-offset-2">
      <div class="checkbox">
        <label>
          <input type="checkbox" name="checkboxOptions" id="checkbox1" value="option1"> option 1
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" name="checkboxOptions" id="checkbox2" value="option2" checked="checked"> option 2
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" name="checkboxOptions" id="checkbox3" value="option3" checked="checked"> option 3
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
  <div class="col-sm-8 col-sm-offset-2">
    <!-- One checkbox element for each option -->
    <div class="checkbox">
      <label>
        <input type="checkbox" name="checkboxOptions" id="checkbox1" value="option1"> option 1
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="checkboxOptions" id="checkbox2" value="option2" checked="checked"> option 2
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="checkboxOptions" id="checkbox3" value="option3" checked="checked"> option 3
      </label>
    </div>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}

**********

If more than 10 options are provided then a multi-select will display as a listbox.

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="select1" class="col-sm-2">MultiSelect Dropdown</label>
    <div id="select1" class="col-sm-8">
      <select multiple class="form-control">
        <option>Option 1</option>
        <option selected>Option 2</option>
        <option selected>Option 3</option>
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
  <label for="select1" class="col-sm-2">MultiSelect Dropdown</label>
  <div id="select1" class="col-sm-8">
    <!-- The select element should include the multiple attribute -->
    <select multiple class="form-control">
      <option>Option 1</option>
      <!-- Selected options are give the selected attribute -->
      <option selected>Option 2</option>
      <option selected>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
