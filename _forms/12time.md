---
title: Time
---

*This needs to be updated*

The time picker uses http://acpmasquerade.github.io/bootstrap3-timepicker2/ which is based on jdewits time picker but ported to bootstrap 3.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="timepicker1" class="col-sm-2 control-label">Timepicker</label>
    <div class="col-sm-8">
      <input id="timepicker1" type="text" class="form-control bh--timepicker"> <!-- need the bh--timepicker class for script to initialize -->
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line .</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

<div class="form-group">
  <label for="timepicker1" class="col-sm-2 control-label">Timepicker</label>
  <div class="col-sm-8">
    <!-- The timepicker is a simple text field. It needs the bh--timepicker class for script to initialize -->
    <input id="timepicker1" type="text" class="form-control bh--timepicker">
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line .</span>
  </div>
</div>

{% endhighlight %}
