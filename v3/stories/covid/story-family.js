var storyCovidFamily = {
	name:"Juggling Work & Family",
	bg:{
		left:{img:'https://conversations.movember.com/static/assets/images/image-9723dfdd46c616f37dc130c33b42edfd72673e58-1000x1000-png'},
		right:{img:'https://conversations.movember.com/static/assets/images/image-49df9364688f3b428ceac6093b52265d131ca125-1000x1000-png'}
	},
	thread:[
		{
			is:'them',p:['I really should check on the kids.','I’m so busy with work. But I need to get them away from screens for a while.']
		},
		{
			is:'header',
			p:['What would you say?']
		},
		{
			is:'question',
			iCorrect:1,
			p:[
				'Good plan. Your family is more important than work.',
				'Yeah. My youngest is glued to my phone. He doesn’t understand why he can’t play with his friends as much.',
				'Just concentrate on your work. The kids can take care of themselves.'
			],
			f:[
				'Try not to judge or <b>impose your own values</b>. Help your friend open up.',
				'<b>Sharing your own struggles</b> is a great way to open up conversation.',
				'Try not to <b>impose your own ideas</b>. Help your friend open up.',
			]
		},
		{
			is:'them',
			p:['Yeah, I’m totally dropping the ball.','Actually, now is not a great time. I need to get back to it.']
		},
		{
			is:'question',
			iCorrect:2,
			p:[
				'Don’t let me distract you. I’ll leave you to it.',
				'No worries. Let’s talk sometime soon.',
				'All good. Let’s catch up tomorrow. What time is good?'
			],
			f:[
				"Don't <b>walk away</b> so easily. Tune in to what your friend is saying and make another plan.",
				'Try to avoid <b>vague promises</b> of future connection.',
				'Making sure you set an <b>appropriate, specific time</b> is a great place to start.'
			]
		},
		{
			is:'them',
			p:['That sounds great. How’s 1pm?']
		},
		{
			is:'header',
			p:['That went well.']
		},
		{
			is:'header',
			p:["The next day..."]
		},
		{
			is:'header',
			p:["at 1pm-ish."]
		},
		{
			is:'them',
			p:['It’s nice to take a break from everything.','I haven’t got a lot of time, though. Really worried about the kids.']
		},
		{
			is:'question',
			iCorrect:1,
			p:[
			'What do you mean?',
			'This must be a tough time for kids. What’s worrying you about them?',
			'Kids are tough. They’ll survive. Let’s talk about you.',
			],
			f:[
			'Try and be a little more <b>specific</b>.',
			'<b>Reflect their concerns</b> back to them and ask a <b>specific, open question</b>.',
			'Don’t be <b>dismissive</b>. Pay attention and mirror what they’re saying back to them.',
			]
		},
		{
			is:'them',
			p:['They’re just spending a lot of time inside and it’s all screen time.','I feel like I should be spending more time with them.']
		},
		{
			is:'question',
			iCorrect:0,
			p:[

				'Do you think they’re struggling with everything going on?',
				'Have some kindness for yourself.',
				'I’m sure they’re fine. They can entertain themselves.',
			],
			f:[
				"Demonstrating that you're listening by <b>asking deeper questions</b> will help develop the conversation.",
				"This is actually kinda nice. But let's ask some <b>deeper questions</b>.",
				'Don’t <b>shut them down</b>. Ask questions.',
			]	
		},
		{
			is:'them',
			p:['Definitely. I’m sure it’s not easy on them.','Meanwhile, I’m really falling behind with work. I’m not doing anything well right now.']
		},
		{
			is:'question',
			iCorrect:1,
			p:[
				'Maybe make a daily schedule.',
				'Sounds tough. Are there any changes you could make?',
				'You need to slow down and take a breather!',
				
			],
			f:[
				"Don’t be <b>prescriptive</b>. Encourage them to find their own solution.",
				"<b>Encourage him to think creatively</b> about how to improve the situation.",
				"Don’t <b>give them orders</b>. Encourage them to find their own solution.",
			]
		},
		{
			is:'them',
			p:['What do you mean?']
		},
		{
			is:'question',
			iCorrect:1,
			p:[
				"You should tell your boss you need to cut back to spend more time with your family.",
				"Like seeing if your work can offer you more support. Maybe there's room for some flexibility?"
			],
			f:[
				"Encourage action without being <b>overly prescriptive</b>.",
				"Offer <b>practical support</b> while encouraging them to come up with <b>their own solution</b>."
			]
		},
		{
			is:'them',
			p:['That’s a big ask but I suppose I could look into it.']
		},
		{
			is:'question',
			iCorrect:0,
			p:[
				"It wouldn’t hurt. This is new territory for all of us. I’m still trying to figure out things too.",
				"Less talk, more action. Modern problems require modern solutions!",
				"Get on it! There's plenty of opportunities to change things up.",
				
			],
			f:[

				"It’s helpful to <b>reflect on your own experiences</b> to encourage vulnerability.",
				"Don’t get <b>pushy</b>. A witty catch phrase could easily feel dismissive.",
				"Things were going well. Don’t get <b>pushy</b> and overwhelm this guy.",
			]
		},
		{
			is:'them',
			p:['Yeah. I guess I have to accept things are going to be very different for a while.']
		},
		{
			is:'question',
			iCorrect:1,
			p:[
				"I believe in you. You’ve got this.",
				'Definitely. We should keep in touch. Maybe we could have a weekly catch-up?',
				"Sounds like my work here is done. The answers were inside you along.",
			],
			f:[
				"A lovely sentiment. But let’s set up a <b>check-in</b>.",
				"This is a good first step in setting up a <b>check-in</b>.",
				"Very poetic. But you are <b>not the guru</b>. Stick with being a friend.",
			]
		},
		{
			is:'them',
			p:["That would be great."]
		},
		{
			is:'question',
			iCorrect:2,
			p:[
				"Perfect. Talk soon!",
				'Good luck with everything.',
				"Same time next week?",
			],
			f:[
				"Avoid making <b>vague plans</b> for future connection.",
				"Don't leave the conversation without <b>specific intentions</b> for a future check-in.",
				"Try to make <b>specific plans</b> when setting up future check-ins.",
			]
		},
		{
			is:'them',
			p:["It's a date!"]
		},
		{
			is:'header',
			p:["That went well."]
		},
		{
			is:'remember',
			p:[
				'Ask questions at an <b>appropriate time</b>.',
				'Listen and <b>reflect his thoughts</b> back to him.',
				'Encourage a <b>problem-solving</b> attitude.',
				'Check in on a <b>regular basis</b>.'
			]
		},
		{
			is:'intention',
			p:[
				'Look out for men who are <b>struggling to adapt</b> or having difficulty <b>juggling family and work-life</b>. Commit to offering a supportive, listening ear.'
			]
		}


	]
}


