var storyGrieving = {name:'Grieving',
bg:{
	left:{img:'https://conversations.movember.com/static/assets/images/image-66a9b8a444422868dc2aa8d671ffef05a220dc5d-1000x1000-png',thumb:{y:-250}},
	right:{img:'https://conversations.movember.com/static/assets/images/image-63e5166d68b6f880f7b8407215f3a6e294c2bd69-1000x1000-png'}
},thread:[
{
	is:'them',
	p:[
		'I don’t think I can make it out today.',
		'I’ve got some things to do.'
	]
},
	{is:'header',p:['What would you say?']},
{
	is:'question',
	iCorrect:0,
	p:[
		'Yeah, no worries. How are you feeling over there?',
		'Yeah, I get it. Life is busy.',
		'All good. Are you going okay?'
	],
	f:[
		"Start with an <b>open question</b> when you suspect someone is struggling. These are questions that can't be answered with a yes or no.<ul><li>How are you feeling today?</li><li>What’s on your mind?</li></ul>",
		'It’s good to acknowledge and respect someone’s boundaries. But this might be a good opportunity to <b>ask some questions</b>.',
		'It’s good to ask questions, but think about <b>open questions</b> that don’t have a yes or no answer.',
	]
},
{
	is:'them',
	p:[
		'Yeah.',
		'I’m alright.',
	]
},
{
	is:'question',
	iCorrect:1,
	p:[
		'It’s not like you to bail on me. I’m a bit pissed.',
		"It’s not like you to bail on me. Are you stuggling?",
		'It’s not like you to bail on me. But I get it.'
	],
	f:[
		'It’s perfectly understandable to be upset by an unreliable friend. But now might be a good moment to lead with <b>empathy</b>.',
		'Asking <b>observational questions</b> shows that we are paying attention, care, and want to help.',
		'It’s important to acknowledge and respect their feelings. But <b>deeper inquiry</b> might help him open up.'
	]
},
{ is:'them',p:['Yeah, I am a bit.','Honestly, it hurts like hell.']},
{ is:'question',
	iCorrect:1,
	p:['Yeah mate, I know what that’s like. I lost a friend a few years ago.','Yeah mate. It must be really painful. I’ve been thinking of you a lot.','Yeah mate, but it’s important to remember that this, too, shall pass.'],f:[
	'Sharing your own stories can be helpful. But there may be a more <b>empathetic</b> approach.',
	'Demonstrating that you care and are <b>empathetic</b> establishes a relationship that may help your friend open up.',
	'Racing to solutions or <b>over-simplifying</b> the issue can feel dismissive and unhelpful. He may just want to talk.'
]},
{
	is:'them',p:['Thanks, mate. I appreciate it.','If only I’d spent more time with them toward the end.']
},
{
	is:'question',
	iCorrect:1,
	p:['Nah mate, you can’t be thinking like that.','Yeah. I think it’s pretty normal to feel that way.','Chin up, man. Life is too short for regrets.'],
	f:['Rejecting his feelings may make him close down. Try <b>accepting</b> how he feels.','Accepting his feelings, and <b>reassuring him that it’s normal</b> will allow him to relax and express himself freely.','<b>Jumping to solutions</b> while ignoring his feelings will likely make him close down.']
},
{
	is:'them',
	p:['Yeah.','I just feel so alone.']
},
{
	is:'question',
	iQuestion:0,
	p:['Do you think you’re getting the support you need?','You’re not alone. You’re never alone.','Yeah, I can imagine.'],
	f:['This is a great step toward getting a man to think more productively about how he can broaden his <b>support network</b>.','<b>Poetic refrains</b> won’t help your friend make sense of their struggles.',"Try not to lead the conversation into a <b>dead end</b>. Keep asking questions."]
},
{
	is:'them',
	p:['Everyone’s been really lovely.','But they don’t really get it.','How could they?']
},
{
	is:'question',
	iQuestion:0,
	p:['I can’t pretend to know how you feel. But I can be here for you now.','Well, a lot of us have been through our own grief.','You underestimate your friends.'],
	f:["It's important to <b>validate</b> a man's feeling, and other authentic empathy and care.","Try not to get <b>defensive</b>. Your friend is feeling alone right now. It's a good opportunity to offer your empathy.","Try not to get <b>defensive</b>. Your friend is feeling alone right now. It's a good opportunity to offer your empathy."]
},
{
	is:'them',
	p:['Thanks, mate.','Everyone is saying that.','But it doesn’t really help.']
},
{
	is:'question',
	iQuestion:0,
	p:['Is there anything I can do that might help?','Yeah I know. It sucks.','I really mean it though. I am here for you, bro.'],
	f:["offer your help while allowing them to <b>come up with their own solutions</b>.","Broad statements may come across as <b>dismissive</b> or lead the conversation down a dead-end.",'These are well meaning words. But they don’t add up to any immediate action. Perhaps we can keep <b>asking questions</b>.']

},
{
	is:'them',
	p:['Well...','I suppose some company would be welcome']
},
{
	is:'question',
	iCorrect:1,
	p:['That, I can do. Let me know when you’re free.','That, I can do. When can we line that up?','I’ll keep that in mind.'],
	f:[
	'Try not to put the onus on a struggling man to reach out. Think about making more <b>specific plans</b? to check-in.',
	"It's important to make <b>specific plans</b> for the next check-in.",
	"Try to avoid <b>vague promises</b> of future connection. Plan a specific check-in."]
},
{
	is:'them',
	p:['I’m free this Thursday night.']
},
{
	is:'question',
	iCorrect:1,
	p:['Great. Lock it in.','Great. Pencil it in.',"I’m busy, then. But I'm sure we’ll figure something out."],
	f:["Always make specific plans at a <b>specific time</b> for the next check-in.","Don't leave the plans in a shaky, uncertain place. Plan something <b>specific</b>.","Don't leave the plans in a shaky, uncertain place. Plan something <b>specific</b>."],
},
{
	is:'them',
	p:['Look forward to it.']
},
{
	is:'header',
	p:['That went well.']
},
{
	is:'remember',
	p:[
		'Ask <b>open questions</b> to help a man open up',
		'Listen with <b>empathy</b> and accept their feelings',
		'Encourage Action by offering your support and suggesting more <b>open communication</b>',
		'Check-in by making <b>specific and definite plans</b> to catch up'
	]
},
{
	is:'intention',
	p:['Look out for men who are <b>grieving and withdrawing socially</b>. Reach out with understanding and care. You don’t need to fix anything. Just be a friend.']
}
]
}


