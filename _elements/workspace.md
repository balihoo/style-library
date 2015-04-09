---
title: Workspace
---

This is how the main workspace looks on BAC pages. The title of the page or component being worked on appears in white text in the dark gray bar along the top, sometimes with other information (like campaign start and end dates on the campaign creation screen).

### Preview:

<div class="panel panel-default bh-panel">
	<div class="panel-heading clearfix">
		<h3 class="panel-title pull-left">Workspace Title</h3>
		<button type="button" class="btn btn-default pull-right">
			<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Action Button
		</button>
	</div>
	<div class="panel-body">
		<p>Workspace content and description text</p>
	</div>
	<table class="table table-responsive">
		<caption>Table in workspace</caption>
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
	<div class="panel-footer">
		<p>Workspace footer</p>
	</div>
</div>

### Code Sample:

{% highlight html %}
<!-- Workspace Module -->
<div class="panel panel-default bh-panel">
	<div class="panel-heading clearfix">
		<h3 class="panel-title pull-left">Workspace Title</h3>
		<button type="button" class="btn btn-default pull-right">
			<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Action Button
		</button>
	</div>
	<div class="panel-body">
		<p>Workspace content and description text</p>
	</div>
	<table class="table table-responsive">
		<caption>Table in workspace</caption>
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
	<div class="panel-footer">
		<p>Workspace footer</p>
	</div>
</div>
{% endhighlight %}
