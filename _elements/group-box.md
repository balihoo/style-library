---
title: Group Box
---

Use group boxes to organize content on a page so that it’s clear how fields are related to each other and to the action buttons.

### Preview:

<div class="well">
	Basic well example.
</div>

<div class="panel panel-default bh--panel">
	<div class="panel-body">
		Basic panel example.
	</div>
</div>

<div class="well">
	<div class="panel panel-default bh--panel">
		<div class="panel-body">
			Panel nested in well.
		</div>
	</div>
</div>

<div class="panel panel-default bh--panel">
	<div class="panel-heading">Panel heading without title</div>
	<div class="panel-body">
		Basic panel example.
	</div>
</div>

<div class="panel panel-default bh--panel">
	<div class="panel-heading">
		<h3 class="panel-title">Panel title</h3>
	</div>
	<div class="panel-body">
		Panel content
	</div>
</div>

<div class="well">
	<div class="panel panel-default bh--panel">
		<div class="panel-heading">
			<h3 class="panel-title">Panel title</h3>
		</div>
		<div class="panel-body">
			Panel content
		</div>
	</div>
</div>

### Code Sample:

{% highlight html %}
<!-- Basic Well Example -->
<div class="well">
	Basic well example.
</div>

<!-- Basic Panel Example -->
<div class="panel panel-default bh--panel">
	<div class="panel-body">
		Basic panel example.
	</div>
</div>

<!-- Panel Nested in Well Example -->
<div class="well">
	<div class="panel panel-default bh--panel">
		<div class="panel-body">
			Panel nested in well.
		</div>
	</div>
</div>

<!-- Panel with heading Example -->
<div class="panel panel-default bh--panel">
	<div class="panel-heading">Panel heading without title</div>
	<div class="panel-body">
		Basic panel example.
	</div>
</div>

<!-- Panel with title Example -->
<div class="panel panel-default bh--panel">
	<div class="panel-heading">
		<h3 class="panel-title">Panel title</h3>
	</div>
	<div class="panel-body">
		Panel content
	</div>
</div>

<!-- Panel with title nested in Well Example -->
<div class="well">
	<div class="panel panel-default bh--panel">
		<div class="panel-heading">
			<h3 class="panel-title">Panel title</h3>
		</div>
		<div class="panel-body">
			Panel content
		</div>
	</div>
</div>
{% endhighlight %}
