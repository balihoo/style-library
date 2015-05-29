---
title: Image
---

Description coming soon.

**********

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group bh--form-image">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="image1" class="col-sm-2 control-label">Image (Multiple Options Provided)</label>
    <div class="col-sm-10">
      <div class="carousel slide" id="myCarousel">

        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">

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
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div><!-- /.carousel -->
      <div class="bh--form-image-controls">
        <input type="file" id="image1" class="form-control hidden">
        <button type="button" class="btn btn-default">Upload Image</button>
        <button type="button" class="btn btn-link">Clear</button>
      </div>
      <!-- You may include help text. -->
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

### Sample Code

{% highlight html linenos %}

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

{% endhighlight %}

<form class="form-horizontal bh--form-example">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <div class="form-group bh--form-image">
    <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
    <label for="image1" class="col-sm-2 control-label">Image (No Options)</label>
    <div class="col-sm-10">
      <div class="preview">
        <img src="" alt="No Image Loaded Yet">
      </div>
      <div class="controls">
        <input type="file" id="image1" class="form-control hidden">
        <button type="button" class="btn btn-default">Upload Image</button>
        <button type="button" class="btn btn-link">Clear</button>
      </div>
      <!-- You may include help text. -->
      <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </div>
  </div>
</form>

{% highlight html linenos %}

<div class="form-group bh--form-image">
  <!-- A field and all related tags and content are wrapped in a form group element -->
  <!-- Labels and fields are still column classes so that they are left aligned and reflow on smaller screens  -->
  <label for="image1" class="col-sm-2 control-label">Image (No Options)</label>
  <div class="col-sm-10">
    <div class="preview">
      <img src="" alt="No Image Loaded Yet">
    </div>
    <div class="controls">
      <input type="file" id="image1" class="form-control hidden">
      <button type="button" class="btn btn-default">Upload Image</button>
      <button type="button" class="btn btn-link">Clear</button>
    </div>
    <!-- You may include help text. -->
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
  </div>
</div>

{% endhighlight %}
