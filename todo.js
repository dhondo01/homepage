// Check if the task is done
var task_done = function(li)
{	
	taski = li.parentNode;

	if(li.checked == true)
	{
		taski.parentNode.classList.add('checked');
	}
	else
	{
		taski.parentNode.classList.remove('checked');
		taski.parentNode.className = "";
	}
	local_save()
}

//local storage
local_save = function()
{
	res = [];
	var i;
	all_entries = document.querySelectorAll('li');
	for(i=0; i < all_entries.length; i++)
	{all_entries
		if(all_entries[i].className != "checked")
		{
			res.push(all_entries[i].innerHTML);
		}
	}
	console.log(res);
	localStorage.setItem("todoDatabase",JSON.stringify(res));

}

//Add event onload
window.load = function()
{
	retrieve = localStorage.getItem("todoDatabase");
	retrieve = JSON.parse(retrieve);
	var l;
	for(i=0; i<retrieve.length; i++) {
		li = document.createElement('li');
		task_retrieve = retrieve[l];
		li.innerHTML = task_retrieve;
		document.getElementById("task_list").appendChild(li);
	}
}

// Add task
var add_task = function()
{
	if(document.getElementById("new_task").value != "")
	{	
		var priority, li, label, task;
		li = document.createElement('li');
		label = document.createElement('label');
		task = document.createElement('input');
		label.innerHTML = document.getElementById("new_task").value;
		task.setAttribute("type", "checkbox");
		task.setAttribute("onclick", "task_done(this)");

		label.appendChild(task);
		li.appendChild(label);

		document.getElementById("task_list").appendChild(li);
		local_save();
	}
	 document.getElementById("new_task").value = "";
}

