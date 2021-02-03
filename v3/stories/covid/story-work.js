var storyCovidWork = {name:'Dave',
				bg:{
					left:{img:'https://conversations.movember.com/static/assets/images/image-f34dd8fc826c2c2535da51855a488dfe35cc2337-1080x1080-png'},
					right:{img:'https://conversations.movember.com/static/assets/images/image-cd42a130ffe5cd739029fcfa885e6ab4ce8f8c08-1080x1080-png'}
				},
				thread:[
				{is:'them',p:['I have no idea how I’m going to find a job at this point.',"It's really getting to me."]},
				{is:'header',p:['What would you say?']},
				{is:'question',
					iCorrect:0,
					p:[
					"That sounds really tough. The uncertainty is getting to me as well.",
					"Maybe you should think about all the creative stuff you can get done!",
					"Have you seen if there are any jobs available? Maybe a side hustle?",
				],f:[
					"Acknowledging what they've shared and being <b>honest and vulnerable</b> about your own struggles can help open up the conversation.",
					"Try not to <b>jump to solutions</b>. Consider sharing your own struggles instead.",
					"Try not to <b>jump to solutions</b>. Consider sharing your own struggles instead."
				]},
				{
					is:'them',
					p:['Yeah, I don’t really know what I’m supposed to do.','It’s my problem though. I’ll be all right.']
				},
				{
					is:'question',
					iCorrect:0,
					p:[
						'No doubt. But how are you holding up?',
						'Have you tried meditating?',
						'We should talk about this sometime.'
					],
					f:[
						"Always ask <b>open-ended questions</b> that can't be answered with a simple yes or no.\
						<ul>\
							<li>How are you doing?</li>\
							<li>What’s on your mind?</li>\
							<li>What’s been happening?</li>\
						</ul>",
						"Try not to <b>jump to solutions</b>. Focus on getting your friend to open up.",
						"Try not to <b>delay or dodge</b> the conversation. Perhaps you can help your friend open up right now."
					]
				},
				{
					is:'them',
					p:['I’m all right. It all feels kinda pointless these days.','But I’m not going to bore you with a sob story.']
				},
				{
					is:'question',
					iCorrect:1,
					p:[
						'Yeah. Welcome to the Corona-coaster.',
						'What do you mean by pointless?',
						'Yeah. Best not to dwell on these things too much.',
					],
					f:[
						'Nice pun! But try not to <b>quickly dismiss</b> the conversation. Ask questions to help them open up.',
						'When listening, <b>ask clarifying questions</b> to make sure you understand what is being said.<ul><li>What do you mean by...?</li><li>Can you tell me a bit more about...?</li><li>Are you saying...?</li></ul>',
						'Try not to <b>quickly dismiss</b> the conversation. Ask questions to help them open up.'
					]
				},
				{
					is:'them',
					p:['I just haven’t got a lot to do, so I’m spending all of my time online.','I feel like I’m not really achieving anything.',"It's really getting to me."]
				},
				{
					is:'question',
					iCorrect:1,
					p:[
						"There's a lot to keep everyone entertained online these days.",
						"Have you spoken to anyone else about how you're feeling?",
						"I think everyone is struggling.",
					],
					f:[
						"Making <b>broad comments</b> steers the conversation away from their personal struggles.",
						"Encouraging a friend to <b>reach out to other friends and family</b> will help them develop a wider support network.",
						"Making <b>broad comments</b> steers the conversation away from their personal struggles."
					]
				},
				{
					is:'them',
					p:['Not really. I don’t really want to bother anyone.','It’s a hard time for everyone.']
				},
				{
					is:'question',
					iCorrect:1,
					p:[
						"Absolutely. Everyone has their own shit to deal with right now.",
						"You're right. But now is a great time to reach out to people. It's been really helpful for me.",
						"Yeah, maybe it's a better time to learn to enjoy your own company.",
					],
					f:[
						"Don’t let the <b>broader story</b> get in the way of more personal struggles.",
						"You're encouraging <b>reaching out</b> while demonstrating some of your own <b>vulnerability</b>.",
						"Don’t be <b>dismissive</b> or <b>jump to solutions</b>. Look for ways to offer continued support."
					]
				},
				{
					is:'them',
					p:['Yeah, maybe.',"I'll think about it."]
				},
				{
					is:'question',
					iCorrect:1,
					p:[
						"Do it! Now's the time.",
						"Let's talk again in a couple of days. What time works?",
						"Good to hear from you. I hope we can chat again sometime.",
					],
					f:[

						'Encourage them without <b>hounding</b> them. Offer ongoing support.',
						"Always arrange a future check in at a <b>specified time</b>.",
						"Try to avoid <b>vague promises</b> of further connection."
					]
				},
				{
					is:'them',
					p:["Yeah, sure. Talk soon."]
				},{
					is:'question',
					iCorrect:0,
					p:[
						"Can we book something in for Thursday afternoon?",
						"Get back to me with a time.",
						"Sounds good!",
					],
					f:[

						"Try and be <b>specific and intentional</b>.",
						"Try to avoid leaving things with <b>vague plans</b>.",
						"Try to avoid leaving things with <b>vague plans</b>."
					]
				},{
					is:'them',
					p:["Umm... not sure what I'm doing that day.","Let's see how it turns out."]
				},{
					is:'question',
					iCorrect:2,
					p:[
						"Works for me.",
						"Sure. Get back to me.",
						"Yeah, I've got some things going on too. I think setting a time will help.",
					],
					f:[

						"Don't let them get away with <b>vague plans</b> so easily.",
						"Don't let them get away with <b>vague plans</b> so easily.",
						"Always try to make <b>definite, specific plans</b>."
					]
				},{
					is:'them',
					p:["Alright, Thursday afternoon works.","Call me up at lunchtime."]
				},
				{
					is:'header',
					p:["That went well."]
				},
				{
					is:'remember',
					p:[
						'Ask <b>open-ended questions</b>.',
						'Listen and use <b>clarifying questions</b>.',
						'Encourage seeking support from <b>family and friends</b>.',
						'Check in at a <b>specified time</b>.'
					]
				},
				{
					is:'intention',
					p:[
						'Think about friends that may be struggling to <b>find work</b> or experiencing <b>financial difficulties</b>. Make an effort to check in and have a genuine, supportive and open conversation.'
					]
				}

			]}