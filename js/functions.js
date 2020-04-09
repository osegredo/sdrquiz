
function answerQuizQuestion(qnum, answer) {
	// start quiz
	if (qnum ==1) {
		$('#quizProgressDiv').fadeIn('slow');
		//fbq('trackCustom', 'QuizLpxQ02Start');
	}
	
	// answer question
	//fbq('trackCustom', 'QuizLpxQ02AnswerQ' + qnum + '_' + answer);
	var progress = qnum / 4 * 100;
	$("#quizProgressBar").css("width", Math.min(progress, 100) + "%");
	$("#quizProgressText").html(Math.min(Math.round(progress), 100) + "%");
	$('#q' + qnum + 'Div').fadeOut(400, function() {
		if (qnum != 4)
			$('#q' + (qnum + 1) + 'Div').fadeIn('slow');
		else {
				$("#quizProgressBar").removeClass("progress-bar-striped");
				setTimeout(function() { $('#quizProgressDiv').fadeOut(); }, 500);
				$('#validateDiv').fadeIn('slow', validateQuiz());
			
				// finish quiz
				//fbq('trackCustom', 'QuizLpxQ02Done');
		}
	});
}

var progress = 5;

function validateQuiz() {
	progress += 3.7;
	$("#analyzeBar").css("width", Math.min(progress, 100) + "%");
	$("#analyzeText").html(Math.min(Math.round(progress), 100) + "%");
	if (progress >= 100) {
		progress = 100;
		$("#analyzeBar").removeClass("progress-bar-striped");
		$("#analyzeText").removeClass("text-right").addClass("text-center");
		$("#analyzeText").html("Avaliação concluída!");
		setTimeout(function () {
			$('#validatingDiv').fadeOut('slow', function () {
				$('#validatedDiv').fadeIn('slow');
					setTimeout(function () { $("#linkForm").submit(); }, 1000 * 15);
				});
		}, 2000);
	}
	
	if (progress < 100) {
		setTimeout(function () {
			validateQuiz();
		}, 250);
	}
}
			