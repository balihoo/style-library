---
title: Table
---

Tables can have a title, header buttons, and row buttons. Not all columns need to be sortable, but ones that are should show a hand pointer on hover to indicate that they can be clicked, and the primary sorted column gets an arrow indicating whether it’s sorted ascending or descending.

### Preview:

<table class="table table-responsive">
	<caption>Optional Table Caption</caption>
	<thead>
		<tr>
			<th>Participants Name</th>
			<th>Campaign Usage</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>New Participants</td>
			<td>New Campaign, New Campaign 3</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
		<tr>
			<td>New Participants 2</td>
			<td>New Campaign 2, New Campaign 5</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
		<tr>
			<td>New Participants 3</td>
			<td>New Campaign 4, New Campaign 7</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
	</tbody>
</table>

### Code Sample:

{% highlight html %}
<!-- Basic Table -->
<table class="table table-responsive">
	<caption>Optional Table Caption</caption>
	<thead>
		<tr>
			<th>Participants Name</th>
			<th>Campaign Usage</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>New Participants</td>
			<td>New Campaign, New Campaign 3</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
		<tr>
			<td>New Participants 2</td>
			<td>New Campaign 2, New Campaign 5</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
		<tr>
			<td>New Participants 3</td>
			<td>New Campaign 4, New Campaign 7</td>
			<td>
				<button type="button" class="btn btn-default btn-sm">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
				</button>
			</td>
		</tr>
	</tbody>
</table>
{% endhighlight %}

### Preview

<div class="panel panel-default bh--panel">
	<div class="panel-heading">
		<h3 class="panel-title">Table in Panel</h3>
	</div>
	<div class="panel-body">
		<p>Panel body content</p>
	</div>
	<table class="table table-responsive">
		<caption>Optional Table Caption</caption>
		<thead>
			<tr>
				<th>Participants Name</th>
				<th>Campaign Usage</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>New Participants</td>
				<td>New Campaign, New Campaign 3</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
			<tr>
				<td>New Participants 2</td>
				<td>New Campaign 2, New Campaign 5</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
			<tr>
				<td>New Participants 3</td>
				<td>New Campaign 4, New Campaign 7</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>

### Code Sample:

{% highlight html %}
<!-- Table in a panel -->
<div class="panel panel-default bh--panel">
	<div class="panel-heading">
		<h3 class="panel-title">Table in Panel</h3>
	</div>
	<div class="panel-body">
		<p>Panel body content</p>
	</div>
	<table class="table table-responsive">
		<caption>Optional Table Caption</caption>
		<thead>
			<tr>
				<th>Participants Name</th>
				<th>Campaign Usage</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>New Participants</td>
				<td>New Campaign, New Campaign 3</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
			<tr>
				<td>New Participants 2</td>
				<td>New Campaign 2, New Campaign 5</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
			<tr>
				<td>New Participants 3</td>
				<td>New Campaign 4, New Campaign 7</td>
				<td>
					<button type="button" class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>
{% endhighlight %}
