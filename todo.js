// Check if the task is done
task_done = function(li)
{	
	taski = li.parentNode;

	if(li.checked == true)
	{
		taski.parentNode.className = "checked";
	}
	else
	{
		taski.parentNode.className = "";
	}
}

// Add task
add_task = function()
{
	if(document.getElementById("new_task").value != "")
	{	
		var priority;
		li = document.createElement('li');
		label = document.createElement('label');
		task = document.createElement('input');
		label.innerHTML = document.getElementById("new_task").value;
		task.setAttribute("type", "checkbox");
		task.setAttribute("onclick", "task_done(this)");

		label.appendChild(task);
		li.appendChild(label);

		document.getElementById("task_ul").appendChild(li);
	}
}

