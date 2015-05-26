---
title: Form Containers
---

Balihoo forms should be laid out with labels left aligned and fields left aligned in their own column. This creates pleasing vertical flow and allows labels to be easily scanned.

**********

<form class="form-horizontal bh--form-example">
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

### Code Sample

{% highlight html %}
<!-- The form tag is given a class of 'form-horizontal' for the left aligned layout. -->
<form class="form-horizontal">
  <!-- A field and all related tags and content are wrapped in a form group element. -->
  <div class="form-group">
    <!-- Labels and field are set using bootstrap grid classes such as col-sm-2.  -->
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
  <div class="form-group">
    <!-- Fields with no label use an offset so that they align with the other fields. -->
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
