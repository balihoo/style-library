---
title: Groups
---

A group, in this case, refers to a form builder group which encapulates several form builder fields. (As opposed to a 'form-group' which is a css class used in bootstrap to group content related to a single field)

**********

<form class="form-horizontal bh--form-example">
  <div class="well">
    <fieldset>
      <legend>User Login</legend>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
    </fieldset>
  </div>
  <div class="well">
    <fieldset>
      <legend>Another Group</legend>
      <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="checkbox">
            <label>
            <input type="checkbox" value="">
            Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div class="checkbox disabled">
            <label>
            <input type="checkbox" value="" disabled>
            Option two is disabled
            </label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="radio">
            <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div class="radio">
            <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
            Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div class="radio disabled">
            <label>
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
            Option three is disabled
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="form-group">
    <label for="howyoufindme" class="col-sm-2 control-label">How did you discover us? I am not a part of a group :-(</label>
    <div class="col-sm-8">
      <textarea id="howyoufindme" class="form-control" rows="3"></textarea>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-8">
      <div class="checkbox">
      <label>
        <input type="checkbox"> Remember me
      </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-8">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>

### Sample Code

{% highlight html %}
<form class="form-horizontal">
  <!-- Groups use the fieldset tag and are wrapped in a bootstrap well element. -->
  <div class="well">
    <fieldset>
      <!-- Group titles use the legend tag -->
      <legend>User Login</legend>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
    </fieldset>
  </div>
  <!-- A second group. -->
  <div class="well">
    <fieldset>
      <legend>Another Group</legend>
      <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div class="checkbox disabled">
            <label>
              <input type="checkbox" value="" disabled>
              Option two is disabled
            </label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
              Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
              Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div class="radio disabled">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
              Option three is disabled
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <!-- This field is not in a group. -->
  <div class="form-group">
    <label for="howyoufindme" class="col-sm-2 control-label">How did you discover us? I am not a part of a group :-(</label>
    <div class="col-sm-8">
      <textarea id="howyoufindme" class="form-control" rows="3"></textarea>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-8">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-8">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
{% endhighlight %}

