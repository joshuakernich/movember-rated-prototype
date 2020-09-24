var storyUniLonely = {name:'Lonely & Frustrated',
	bg:{
		left:{img:'./character-01.png'},
		right:{img:'./character-02.png'}
	},
	thread:[
	{is:'them',p:["I'll never meet anyone. Honestly, it’s hopeless. I can’t believe I have to spend this whole year of college alone."]},
	{
		is:'question',
		iCorrect:1,
		p:["Maybe it’s best to just accept it for the time being.","Yeah, it’s tough. How are you coping with it all?","Yeah, it’s tough. But I’m sure you’ll be fine."],
		f:["Try not to <b>dismiss the conversation</b> so quickly.",
			"Ask <b>open-ended questions</b> that can’t be answered with simple yes or no replies.<ul><li>How are you doing?</li><li>What’s on your mind?</li><li>What’s been happening?</li></ul>",
			"Try not to <b>dismiss the conversation</b> so quickly."]

	},
	{
		is:"them",
		p:["Hmm. Not great, I suppose.","I guess I was excited about this year.","Now it’s all gone to hell and I’m just the dickhead that has to go it alone."]
	},
	{
		is:'question',
		iCorrect:0,
		p:[ "You’re not a dickhead. Just sounds like you’re lonely.","It sounds like you’re being dramatic to me."],
		f: [ "<b>Reflecting back</b> what a man has said and <b>asking questions</b> can demonstrate that you’re listening and interested.<ul><li>It sounds like...</li><li>I get the impression that...</li></ul>","Try not to <b>quickly judge</b> this guy for suffering."]
	},
	{
		is:"them",
		p:["Yeah. I suppose that’s what it comes down to.","But I don’t mind being alone so much. It’s the hopelessness of it that gets to me."]
	},
	{
		is:'question',
		iCorrect:1,
		p:[
			"You need to surrender to the new unknown.",
			"Have you thought of any ways you could deal with this?",
			"I have some mindfulness exercises that might help."
			
		],
		f:[
			"Perhaps he has <b>his own ideas</b> that you could ask about.",
			"Encouraging men to <b>think about different strategies</b> in dealing with their problems can help them come up with their own solutions.<ul><li>What have you tried in the past?</li><li>How can I help?</li><li>What’s something you can do to help yourself?</li></ul>",
			"Perhaps he has <b>his own ideas</b> that you could ask about."
		]
	},
	{
		is:"them",
		p:["I have actually!","There’s some cool social stuff going on online that I’ve been checking out.","But I might just concentrate on other things for a while."]
	},{
		is:'question',
		iCorrect:0,
		p:["Sounds like a good idea. What kind of things? Maybe we can do something together.","Yeah. Don’t bother with all that online shit."],
		f:["Asking <b>open questions</b> and offering more of <b>our own time</b> could improve feelings of isolation.","Online stuff does kind of suck. But maybe <b>avoid dismissing their ideas</b>."]
	},{
		is:"them",
		p:["Ah. That would be great.","I guess I’m mostly concentrating on studies for now. I actually should get back to that right now."]
	},{
		is:'question',
		iCorrect:0,
		p:[
		"Yeah, I’ve got to go, too. But let’s catch up again this time next week. Make this a regular thing.",
		"Yeah, I’ve got to go, too. But let’s do this again sometime. It’s great to talk to you.",
		"Yeah, I’ve got to go, too. Thanks for the chat."],
		f:["Offer <b>ongoing support</b> so he can be reassured that he’s not alone and can rely on your support and encouragement.","Try being more <b>specific</b> with your plans to catch up.","Now is a great time to <b>plan a check in</b>."]
	},{
		is:'them',
		p:['Sounds good. Let me know when.']
	},
	{
		is:'header',
		p:["That went well."]
	},
	{
		is:'remember',
		p:[
			'Ask <b>observational questions</b>.',
			'Listen by <b>reflecting back</b> a man’s thoughts.',
			'Encourage action by prompting a man to come up with <b>his own ideas</b>.',
			'Check in by <b>offering ongoing support</b>.'
		]
	},
	{
		is:'intention',
		p:[
			'Watch out for friends that are feeling <b>lonely</b> or making dramatic statements about how <b>hopeless</b> their situation is. Listen and connect from a place of friendship and care.'
		]
	}
]}