var questions = [				
["When the baker saw that the dough was <strong><i>coalesced,</i></strong> he knew that it is ready to cook.", "separate", "blended", "integrate ", "mix", "A", "Antonyms"],
["Writing <strong><i>concise</i></strong> sentences are the student’s activity in their English class.", "brief", "abrupt", "lengthy ", "blunt", "C", "Antonyms"],
["Even though I was new in my class; I was not worried, because my classmates were so <strong><i>convivial</i></strong> to me.", "festive", "caring", "cloudy ", "unfriendly", "D", "Antonyms"],
["James Yap’s years of practice <strong><i>culminated</i></strong> in a great success at the PBA tournament.", "climax", "apex", "beginning ", "height", "C", "Antonyms"],
["The basketball player’s career was ended by a <strong><i>debilitating</i></strong> injury to his knee.", "crippling", "weakening", "harmful ", "strengthening", "D", "Antonyms"],
["Mara could never seem to think of anything pleasant to say about anyone; almost all of his comments were <strong><i>derogatory</i></strong>.", "degrading", "praising", "humiliating", "shameful", "B", "Antonyms"],
["Fred said that he is an expert in playing guitar, but he doesn’t know how to strum, that made him <strong><i>dilettante</i></strong>.", "amateur", "beginner", "professional", "novice", "C", "Antonyms"],
["After being injected with a tranquilizer, the psychotic patient became <strong><i>docile</i></strong> and went to sleep.", "meek", "obedient", "quiet", "stubborn", "D", "Antonyms"],
["Linda was so <strong><i>egocentric</i></strong> that she could never give anyone else credit for doing anything.", "humble", "conceited", "selfish", "individualistic", "A", "Antonyms"],
["To <strong><i>mollify</i></strong> a baby when crying, immediately give him a bottle of milk.", "agitate", "lessen", "pacify", "appease", "A", "Antonyms"],
["The criminal was accused with contempt of court because he failed to obey a court's <strong><i>injunction.</i></strong>", "order", "permission", "mandate", "rule", "B", "Antonyms"],
["Filipino's who <strong><i>emigrate</i></strong> maintain ties with their families and their homeland.", "migrate", "quit", "stay", "deport", "C", "Antonyms"],
["The buyer was <strong><i>exasperated</i></strong> by the lack of clarity about the cost of an item.", "disturbed", "annoyed", "excited", "pleased", "D", "Antonyms"],
["With the <strong><i>glut</i></strong> of real  estate available on the market, prices become low and affordable.", "surplus ", "plenty", "over", "need", "D", "Antonyms"],
["The man was curious why he was <strong><i>indifferent</i></strong> about the mean comments everyone was throwing at him, he realized that he was deaf.", "anxious ", "concerned", "apathetic", "disinterested", "C", "Antonyms"],
["In medicine, the hereditary material in humans and almost all other organisms called DNA is an <strong><i>immutable</i></strong> part that cannot be altered by everyone.", "abiding ", "changeable", "stable", "changeless", "B", "Antonyms"],
["The employer is looking for <strong><i>fecund</i></strong> personalities who can finish many tasks in a short period of time.", "empty ", "productive ", "unfruitful", "expert", "C", "Antonyms"],
["The doctors know when their patients are <strong><i>malingering</i></strong>.", "increase", "deceive", "genuine", "to pretend to be sick", "C", "Antonyms"],
["The <strong><i>munificent</i></strong> man gave all of his inheritance to charity.", "generous", "greedy", "good", "thoughtful", "B", "Antonyms"],
["Point guard is a <strong><i>pivotal</i></strong> position in basketball.", "essential", "central", "decisive", "unimportant", "D", "Antonyms"],
];
	$(document).ready(function(){				
				// Show or hide the sticky footer button
				$(window).scroll(function() {
					if ($(this).scrollTop() > 200) {
						$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});
				
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
					
					$('html, body').animate({scrollTop: 0}, 300);
				});
				
				$(function() {
				  $('a[href*=#]:not([href=#])').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
						}, 1000);
						return false;
					  }
					}
				  });
				});	
				
				function newpage() {
					window.location = newLocation;
				}
				
				$('#mainexam').css('display', 'none');
				$('#result').css('display', 'none');
				$('#startExam').click(function(){
					$('#introexam').fadeOut(250);
					$('#mainexam').fadeIn(500);
					goExam();
				});
				
				
				$('#btnBack').click(function(){
							event.preventDefault();
							newLocation = 'quizzes.html';
							$('body').fadeOut(500, newpage);
						});
						
				$('#retake').click(function(){
					event.preventDefault();
					newLocation = 'main.html';
					$('body').fadeOut(500, newpage);
				});
				
				//checks if answer is correct and adds to score
					$('#choiceA').click(function(){
						ans = "A";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;

							$('#choiceA').css('background-color', '#4cae4c');
							$('#assessA').addClass('glyphicon glyphicon-ok');
						}
						else
						{
							$('#choiceA').css('background-color', '#d43f3a');
							$('#assessA').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
				
					$('#choiceB').click(function(){
						ans = "B";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceB').css('background-color', '#4cae4c');
							$('#assessB').addClass('glyphicon glyphicon-ok');
						}
						else
						{
							$('#choiceB').css('background-color', '#d43f3a');
							$('#assessB').addClass('glyphicon glyphicon-remove');
							
							if (questions[val][5]=='A')
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
					
					$('#choiceC').click(function(){
						ans = "C";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceC').css('background-color', '#4cae4c');
							$('#assessC').addClass('glyphicon glyphicon-ok');
						}
						else
						{
							$('#choiceC').css('background-color', '#d43f3a');
							$('#assessC').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='A')
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceD').css('background-color', '#4cae4c');
							}
						}
						countdown(5);
					});
					
					$('#choiceD').click(function(){
						ans = "D";
						$('#choiceA').attr('disabled', true);
						$('#choiceB').attr('disabled', true);
						$('#choiceC').attr('disabled', true);
						$('#choiceD').attr('disabled', true);
						if(ans == questions[val][5]){
							correct++;
							$('#choiceD').css('background-color', '#4cae4c');
							$('#assessD').addClass('glyphicon glyphicon-ok');
						}
						else
						{
							$('#choiceD').css('background-color', '#d43f3a');
							$('#assessD').addClass('glyphicon glyphicon-remove');
							if (questions[val][5]=='B')
							{
								$('#choiceB').css('background-color', '#4cae4c');
							}
							else if (questions[val][5]=='C')
							{
								$('#choiceC').css('background-color', '#4cae4c');
							}
							else
							{
								$('#choiceA').css('background-color', '#4cae4c');
							}

						}
						countdown(5);
					});
			});
				var pos=0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0, ans, val, nextArr = 0;
				var totalSyn = 0, totalAnt = 0, totalSwa = 0, totalDwa = 0, totalIde =0, totalCus = 0, totalLoi =0, totalRec = 0, category;
				var Syn = 0, Ant = 0, Swa = 0, Dwa = 0, Ide =0, Cus = 0, Loi =0, Rec = 0;
				//goes to exam page
				function _(x){
					return document.getElementById(x);
				}
				
				var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
				
				function shuffle(o) {
					for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
					return o;
				};

				var random = shuffle(numbers);
				
				function goExam(){
					//generate random numbers without repetition
					document.getElementById('diScore').innerHTML = correct;
					
					val = random[nextArr];
					nextArr = nextArr + 1;
                    
					//displays result if it has reached 50 questions
					if(pos > 9){
						$('#mainexam').fadeOut(500);
						$('#result').fadeIn(500);
						var verdict = "";
						wrongAns = 10 - parseInt(correct);
						
						if(correct < 10*.6)
						{
							verdict = "Sorry, you failed...";
							$('#resultVerdict').text(verdict);
						}
						else
						{
							verdict = "Congratulations! You passed...";
							$('#resultVerdict').text(verdict);
						}
						$('#totalScore').text(correct);
						var doughnutOptions = {
							//Boolean - Whether we should show a stroke on each segment
							segmentShowStroke : true,
							
							//String - The colour of each segment stroke
							segmentStrokeColor : "#fff",
							
							//Number - The width of each segment stroke
							segmentStrokeWidth : 2,
							
							//The percentage of the chart that we cut out of the middle.
							percentageInnerCutout : 50,
							
							//Boolean - Whether we should animate the chart	
							animation : true,
							
							//Number - Amount of animation steps
							animationSteps : 100,
							
							//String - Animation easing effect
							animationEasing : "easeOutBounce",
							
							//Boolean - Whether we animate the rotation of the Doughnut
							animateRotate : true,

							//Boolean - Whether we animate scaling the Doughnut from the centre
							animateScale : true,
							
							//Function - Will fire on animation completion.
							onAnimationComplete : null
						}


						// Doughnut Chart Data
						var doughnutData = [
							{
								label: "Correct",
								value : correct,
								color : "#4cae4c"
							},
							{
								label: "Mistakes",
								value : wrongAns,
								color : "#d43f3a"
							},

						]


						//Get the context of the Doughnut Chart canvas element we want to select
						var ctx = document.getElementById("doughnutChart").getContext("2d");

						// Create the Doughnut Chart
						var mydoughnutChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions); 
						
						pos=0;
						correct=0;
						return false;
					}
					
					
					_("test_status").innerHTML = "<span class=\"pull-left\">" + questions[val][6]+ "</span><span class=\"pull-right\">" + (pos+1) + "/50</span>" ;
					//retrieves elements in multi-dimensional array and displays it on element
					question = questions[val][0];
					chA = questions[val][1];
					chB = questions[val][2];
					chC = questions[val][3];
					chD = questions[val][4];
					
					
					_("quest").innerHTML = question;
					_("choiceA").innerHTML = chA + " <span id=\"assessA\" class=\"pull-right\"></span>";
					_("choiceB").innerHTML = chB + " <span id=\"assessB\" class=\"pull-right\"></span>";
					_("choiceC").innerHTML = chC + " <span id=\"assessC\" class=\"pull-right\"></span>";
					_("choiceD").innerHTML = chD + " <span id=\"assessD\" class=\"pull-right\"></span>";
				}
				//displays main menu after 5 seconds when the app was loaded
				function countdown(secs) {
					if (secs == 2){
						$('#choiceA').css('background-color', '#5bc0de');
						$('#choiceB').css('background-color', '#5bc0de');
						$('#choiceC').css('background-color', '#5bc0de');
						$('#choiceD').css('background-color', '#5bc0de');
						$('.btn-info').css('color', 'black');
						$('#choiceA').attr('disabled', false);
						$('#choiceB').attr('disabled', false);
						$('#choiceC').attr('disabled', false);
						$('#choiceD').attr('disabled', false);
						clearTimeout(timer);
						pos++;
						goExam();
					}
					secs--;
					var timer = setTimeout('countdown('+secs+')', 1000);
				}
					
					function stop() {
						correct=0;
						pos=0;
					}
