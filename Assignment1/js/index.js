// Rule Item Clone
let clone = `<div class="rule" id="rule"> <div class="rule-item" id="rule-item"> <span> <select> <option selected>aff_sub</option> </select> <select> <option selected>is</option> </select> </span> <span class="addRuleContainer"> <input type="text" name="parameter"> <p class="addRule">add rule</p> </span> <span> <i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i> </span> </div> </div>`;
let ruleClone = `<div class="rule-item" id="rule-item"> <span> </span> <span class="addRuleContainer"> <input type="text" name="parameter"> <p class="addRule">add rule</p> </span> <span> <i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i> </span> </div>`;

// Remove function
Element.prototype.remove = function () {
	this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
	for (var i = this.length - 1; i >= 0; i--) {
		if (this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}

// Button Disable
let itemLength = 1;
let ruleLength = 1;

function removeButton() {
	if (itemLength === 1) {
		$('.rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i>');
		$('#remove').css('cursor', 'not-allowed').removeClass('remove');
	} else {
		$('#remove').css('cursor', 'pointer').addClass('remove');
		$('.rule-item span:last-child').html('');
		$('.rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i>');
		$('.rule .rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i>');
	$('.rule:last-child .rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i>');
	}
}

removeButton();

// Click Events
$(document).on('click', '.add', function () {
	$('.rule-parent').append(clone);
	itemLength++;
	removeButton();
});

$(document).on('click', '.remove', function () {
	$(this).parent().parent().parent().remove();
	itemLength--;
	removeButton();
});

$(document).on('click', '.addRule', function(){
	$(this).parent().parent().parent().append(ruleClone);
	
	ruleLength++;
	if(ruleLength > 1){
		$('.rule-item p').html('remove rule').addClass('removeRule').removeClass('addRule');
		$('.rule-item span:last-child').html('');
		$('.rule-item:last-child p').html('add rule').addClass('addRule').removeClass('removeRule');
		$('.rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i>');
		$('.rule .rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i>');
	$('.rule:last-child .rule-item:last-child span:last-child').html('<i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i>');
	}
	removeButton();
});

		let test = 1;

$(document).on('click', '.removeRule', function(){
	let index = $(this).parent().parent().index();
	if($(this).parent().parent().index() > 0){
		$(this).parent().parent().remove();
	}else{
		let parent = $(this).parent().parent();

		if($(this).parent().parent().parent().children().length < 3){
			console.log('if');
			parent.next().html('<span> <select> <option selected>aff_sub</option> </select> <select> <option selected>is</option> </select> </span> <span class="addRuleContainer"> <input type="text" name="parameter"> <p class="addRule">add rule</p> </span> <span> <i class="fas fa-minus remove" id="remove"></i> <i class="fas fa-plus add"></i> </span>');
			if($(this).parent().parent().parent().length > 1){
				test = 0;
				removeButton();
			}
			console.log($(this).parent().parent().parent().children().length);
		}else{
			console.log('else');	
			parent.next().html('<span> <select> <option selected>aff_sub</option> </select> <select> <option selected>is</option> </select> </span> <span class="addRuleContainer"> <input type="text" name="parameter"> <p class="removeRule">remove rule</p> </span> <span></span>');
			test = 1;
		}
		parent.remove();
	}
});