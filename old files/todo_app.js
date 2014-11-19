var task = {};
task.list = document.querySelector('#task_list');
task.input = document.getElementById("new_task");
task.priority = document.getElementById('task_priority');
task.due = document.querySelector('#due');

var tasks = [];

// Check if the task is done
var task_done = function(li)
{	
	taski = li.parentNode;

	if(li.checked == true)
	{
		taski.classList.add('checked');
	}
	else
	{
		taski.classList.remove('checked');
	}
	for (var i = 0; i < tasks.length; i++) {
		console.log(li.parentNode.textContent, 111, tasks[i].text)
		if (tasks[i].text == li.parentNode.textContent) {
			tasks.splice(i, 1);
			break;
		}
	}
	local_save(tasks);
}

//local storage
var local_save = function (not_completed)
{
	// var res = [];
	// var i;
	// var all_entries = document.querySelectorAll('li');
	// for (i=0; i < all_entries.length; i++) 
	// {
	// 	var current_entry = all_entries[i];
	// 	console.log(current_entry);
	// 	if (!current_entry.classList.contains("checked")) {
	// 		var obj = {
	// 			task: current_entry.textContent,
	// 			priority: current_entry.className
	// 		};	
	// 		res.push(obj);
	// 	}
	// }
	// console.log(res);
	localStorage['todoDatabase'] = JSON.stringify(not_completed);

}

//Add event onload
window.onload = function()
{
	var retrieve = localStorage['todoDatabase'];
	tasks = JSON.parse(retrieve);
	console.log(tasks);
	for (var i=-1; i < tasks.length; i++) {
		add_task_general(tasks[i].text, tasks[i].priority, tasks[i].due);
	}
}

var add_task_general = function (to_do, priority, due) {

	if (to_do != '') {

		var priority, li, label, container;

		li = document.createElement('li');
		li.classList.add('item-container');
		label = document.createElement('label');

		label.textContent = to_do + " | Due: " + due;
		label.classList.add(priority);

		box = document.createElement('input');
		box.setAttribute("type", "checkbox");
		box.setAttribute("onclick", "task_done(this)");

		li.appendChild(box);
		li.appendChild(label);
		task.list.appendChild(li);

		local_save(tasks);
	}
	task.input.value = "";
	task.due.value = "";
}


// Add task
var add_task = function () {
	var to_do = task.input.value;
	var priority = task.priority.value;
	var due = task.due.value;
	tasks.push({
		text: to_do,
		priority: priority,
		due: due
	});
	add_task_general(to_do, priority, due);
}

// Add task when "Enter" is hit on the keyboard
task_enter = function (k) {
	if (k.keyCode === 13) {
		add_task();
	}
}

// var clear_all = function () {

// }

