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

{% highlight html linenos %}

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

**********


### Inline Groups

Groups may have the a display inline attribute in form builder. When this is the case there is some work that will need to be done calculating the number of columns that are present in the field group and then setting the column class appropriately. Each field will need to be treated as a column. Compound or complicated fields such as the image carousel or tree select should be given their own row.

When calculating the number of columns, keep in mind that Bootstrap uses a twelve column grid so values that do not evenly go into twelve will need to have their column width rounded down. (e.g. If you have 5 fields in an inline group then the column width for each column would be 2 rather than 3)

Columns that are only 1 unit wide are not advisable so it is recommended that 6 be the maximum number of fields in an inline group row.

Labels should still apprear to the left of the field at small break points and larger. The recommended columns sizes for labels and inputs within a form group is 3 column labels and 9 column inputs.


<form class="form-horizontal bh--form-example">
  <div class="well">
    <fieldset class="bh--inline-group">
      <legend>Inline Group</legend>

      <div class="col-sm-3">
        <div class="form-group bh--info">
          <div class="col-sm-12">
            <p>Date:</p>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="inline1" class="col-sm-3 control-label">Text</label>
          <div class="col-sm-9">
            <input type="text" class="form-control bh--timepicker" id="inline1" placeholder="Start">
            <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group bh--info">
          <div class="col-sm-12">
            <p>to</p>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control bh--timepicker" id="inline2" placeholder="End">
          </div>
        </div>
      </div>

    </fieldset>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

<div class="well">
  <fieldset class="bh--inline-group">
    <legend>Inline Group</legend>
    <!-- Each form-group will need to be wrapped in it's own grid container. The number of columns to span should be calculated based on the number of fields in the inline group. -->
    <div class="col-sm-3">
      <div class="form-group bh--info">
        <div class="col-sm-12"><!-- grid containers in the form-group should all span 12 columns -->
          <p>Date:</p>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="form-group">
        <!-- When a field includes a label, the label should be 3 columns wide and the form will be 9 columns. This is a nested grid inside the form-group. -->
        <label for="inline1" class="col-sm-3 control-label">Text</label>
        <div class="col-sm-9">
          <input type="text" class="form-control bh--timepicker" id="inline1" placeholder="Start">
          <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="form-group bh--info">
        <div class="col-sm-12">
          <p>to</p>
        </div>
      </div>
    </div>

    <div class="col-sm-3">
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control bh--timepicker" id="inline2" placeholder="End">
        </div>
      </div>
    </div>

  </fieldset>
</div>

{% endhighlight %}

<form class="form-horizontal bh--form-example">
  <div class="well">
    <fieldset class="bh--inline-group">
      <legend>Another Inline Group</legend>

      <div class="col-sm-12">
        <div class="form-group">
          <div class="col-sm-12">
            <div class="form-group bh--form-image">
              <!-- A field and all related tags and content are wrapped in a form group element -->
              <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
              <label for="image1" class="col-sm-2 control-label">Image (Multiple Options Provided)</label>
              <div class="col-sm-10">
                <!-- Make sure to use both the carousel and slide classes. The ID should be unique. -->
                <div class="carousel slide" id="myCarousel">

                  <!-- The carousel indicators list should be built dynamically based on how many pages of images there are. -->
                  <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <div class="carousel-inner">

                    <!-- The carousel item is a container which includes multiple images. -->
                    <div class="item active">
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            one.jpg<br>
                            <small>200x200</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <!-- The class selected indicates which image is the current selection in the form. -->
                        <a href="#" class="selected">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            two.png<br>
                            <small>200x100</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            3.jpg<br>
                            <small>500x800</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            two.png<br>
                            <small>200x100</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            3.jpg<br>
                            <small>500x800</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <!-- Another page of images. -->
                    <div class="item">
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            four.jpg<br>
                            <small>300x150</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            5.gif<br>
                            <small>900x900</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            6.png<br>
                            <small>100x100</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            5.gif<br>
                            <small>900x900</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            6.png<br>
                            <small>100x100</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <!-- Another page of images. -->
                    <div class="item">
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                          <div class="carousel-caption">
                            seven.jpg<br>
                            <small>250x50</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            eight.jpg<br>
                            <small>50x400</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            eight.jpg<br>
                            <small>50x400</small>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                        <a href="#">
                          <img src="http://lorempixel.com/200/200/" class="img-responsive">
                          <div class="carousel-caption">
                            eight.jpg<br>
                            <small>50x400</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- Controls -->
                  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><!-- Make sure the href matches the ID of the carousel you wish to advance. -->
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div><!-- /.carousel -->
                <!-- Form fields and inputs. -->
                <div class="bh--form-image-controls">
                  <!-- Necessary but hidden fields should be given the hidden class. -->
                  <input type="file" id="image1" class="form-control hidden">
                  <button type="button" class="btn btn-default">Upload Image</button>
                  <button type="button" class="btn btn-link">Clear</button>
                </div>
                <!-- You may include help text. -->
                <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="textarea1" class="col-sm-3 control-label">Textarea</label>
          <div class="col-sm-9">
            <textarea class="form-control" rows="3" id="textarea1" placeholder="Placeholder"></textarea>
            <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group bh--info">
          <div class="col-sm-12">
            <p>Some other text.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control bh--timepicker" id="inline2" placeholder="End">
          </div>
        </div>
      </div>

    </fieldset>
  </div>
</form>

{% highlight html linenos %}

<div class="well">
  <fieldset class="bh--inline-group">
    <legend>Another Inline Group</legend>

    <!-- Compound or complex fields should always have their own row -->
    <div class="col-sm-12">
      <div class="form-group">
        <div class="col-sm-12">
          <div class="form-group bh--form-image">
            <!-- A field and all related tags and content are wrapped in a form group element -->
            <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
            <label for="image1" class="col-sm-2 control-label">Image (Multiple Options Provided)</label>
            <div class="col-sm-10">
              <!-- Make sure to use both the carousel and slide classes. The ID should be unique. -->
              <div class="carousel slide" id="myCarousel">

                <!-- The carousel indicators list should be built dynamically based on how many pages of images there are. -->
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">

                  <!-- The carousel item is a container which includes multiple images. -->
                  <div class="item active">
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          one.jpg<br>
                          <small>200x200</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <!-- The class selected indicates which image is the current selection in the form. -->
                      <a href="#" class="selected">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          two.png<br>
                          <small>200x100</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          3.jpg<br>
                          <small>500x800</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          two.png<br>
                          <small>200x100</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          3.jpg<br>
                          <small>500x800</small>
                        </div>
                      </a>
                    </div>
                  </div>
                  <!-- Another page of images. -->
                  <div class="item">
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          four.jpg<br>
                          <small>300x150</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          5.gif<br>
                          <small>900x900</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          6.png<br>
                          <small>100x100</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          5.gif<br>
                          <small>900x900</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          6.png<br>
                          <small>100x100</small>
                        </div>
                      </a>
                    </div>
                  </div>
                  <!-- Another page of images. -->
                  <div class="item">
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2 col-sm-offset-1">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/sports" class="img-responsive">
                        <div class="carousel-caption">
                          seven.jpg<br>
                          <small>250x50</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          eight.jpg<br>
                          <small>50x400</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          eight.jpg<br>
                          <small>50x400</small>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-2 col-xs-2 col-md-2 col-sm-2">
                      <a href="#">
                        <img src="http://lorempixel.com/200/200/" class="img-responsive">
                        <div class="carousel-caption">
                          eight.jpg<br>
                          <small>50x400</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><!-- Make sure the href matches the ID of the carousel you wish to advance. -->
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div><!-- /.carousel -->
              <!-- Form fields and inputs. -->
              <div class="bh--form-image-controls">
                <!-- Necessary but hidden fields should be given the hidden class. -->
                <input type="file" id="image1" class="form-control hidden">
                <button type="button" class="btn btn-default">Upload Image</button>
                <button type="button" class="btn btn-link">Clear</button>
              </div>
              <!-- You may include help text. -->
              <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Textarea fields should be in columns -->
    <div class="col-sm-4">
      <div class="form-group">
        <label for="textarea1" class="col-sm-3 control-label">Textarea</label>
        <div class="col-sm-9">
          <textarea class="form-control" rows="3" id="textarea1" placeholder="Placeholder"></textarea>
          <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="form-group bh--info">
        <div class="col-sm-12">
          <p>Some other text.</p>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control bh--timepicker" id="inline2" placeholder="End">
        </div>
      </div>
    </div>

  </fieldset>
</div>

{% endhighlight %}
