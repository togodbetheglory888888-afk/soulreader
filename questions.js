const QUESTIONS = [
{q:"You enter a room where almost nobody knows you. What do you naturally do?",a:[
["Start conversations and take the social lead.",{lead:3,social:3,ind:0,emp:1,risk:2,wis:0}],
["Observe first, then approach people selectively.",{lead:1,social:0,ind:3,emp:2,risk:1,wis:2}],
["Find one interesting person and connect deeply.",{lead:1,social:1,ind:1,emp:3,risk:1,wis:2}],
["Stay comfortable alone until someone approaches.",{lead:0,social:-2,ind:4,emp:1,risk:0,wis:2}]
]},
{q:"When a group cannot decide what to do, you usually...",a:[
["Take charge and make a decision.",{lead:4,social:1,ind:2,emp:0,risk:2,wis:1}],
["Help everyone reach a compromise.",{lead:1,social:2,ind:0,emp:4,risk:0,wis:2}],
["Wait and see which option makes the most sense.",{lead:1,social:-1,ind:3,emp:1,risk:0,wis:4}],
["Suggest an unusual option nobody considered.",{lead:2,social:0,ind:3,emp:0,risk:3,wis:2}]
]},
{q:"Someone criticizes you unfairly. Your first reaction is to...",a:[
["Defend yourself immediately.",{lead:3,social:1,ind:1,emp:0,risk:2,wis:0}],
["Ask why they feel that way.",{lead:1,social:1,ind:0,emp:4,risk:0,wis:3}],
["Ignore it if you know your own worth.",{lead:2,social:-1,ind:4,emp:1,risk:0,wis:3}],
["Analyze whether there is anything useful in the criticism.",{lead:1,social:0,ind:2,emp:1,risk:0,wis:5}]
]},
{q:"Which matters more to you?",a:[
["Achievement and influence.",{lead:4,social:2,ind:1,emp:0,risk:2,wis:0}],
["Strong relationships and belonging.",{lead:0,social:3,ind:0,emp:4,risk:0,wis:2}],
["Freedom to live by your own rules.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:1}],
["Meaning, wisdom and understanding.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"When you are under pressure, you tend to...",a:[
["Become more decisive and action-oriented.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:0}],
["Look for support and keep everyone calm.",{lead:1,social:2,ind:0,emp:4,risk:0,wis:2}],
["Withdraw and solve the problem privately.",{lead:1,social:-1,ind:5,emp:1,risk:1,wis:3}],
["Slow down and search for the deeper cause.",{lead:0,social:0,ind:2,emp:2,risk:-1,wis:5}]
]},
{q:"How comfortable are you being different from the crowd?",a:[
["I don't mind standing out if I believe in my choice.",{lead:3,social:0,ind:4,emp:0,risk:3,wis:1}],
["I prefer harmony, but I keep my own values.",{lead:1,social:2,ind:1,emp:3,risk:0,wis:2}],
["Very comfortable. I often prefer my own path.",{lead:2,social:-2,ind:5,emp:1,risk:2,wis:2}],
["I care less about being different and more about being wise.",{lead:0,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"A close friend is struggling. What do you naturally offer?",a:[
["A practical plan and motivation to act.",{lead:3,social:2,ind:1,emp:2,risk:1,wis:1}],
["A listening ear and emotional support.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:2}],
["Space, plus help when they actually ask.",{lead:1,social:-1,ind:4,emp:2,risk:0,wis:3}],
["Perspective and a way to understand the experience.",{lead:1,social:0,ind:2,emp:3,risk:0,wis:5}]
]},
{q:"Which statement sounds most like you?",a:[
["I would rather lead than wait.",{lead:5,social:2,ind:2,emp:0,risk:2,wis:0}],
["People are more important than status.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:2}],
["I don't need a crowd to validate me.",{lead:2,social:-2,ind:5,emp:1,risk:1,wis:3}],
["Every experience can teach me something.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"How do you make an important decision?",a:[
["Trust my confidence and act.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:1}],
["Think about how it affects other people.",{lead:1,social:2,ind:0,emp:5,risk:0,wis:2}],
["Make the decision independently, away from pressure.",{lead:2,social:-1,ind:5,emp:1,risk:1,wis:2}],
["Consider patterns, consequences and long-term meaning.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"What attracts you most?",a:[
["Challenge and competition.",{lead:4,social:2,ind:2,emp:0,risk:4,wis:0}],
["Connection and shared experiences.",{lead:0,social:4,ind:0,emp:4,risk:0,wis:2}],
["Mystery, freedom and independence.",{lead:2,social:-1,ind:5,emp:1,risk:3,wis:3}],
["History, philosophy and questions about life.",{lead:0,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"When you meet someone for the first time, you notice...",a:[
["Their confidence and presence.",{lead:3,social:3,ind:1,emp:0,risk:1,wis:1}],
["Their emotions and how comfortable they seem.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:2}],
["Whether they respect personal boundaries.",{lead:2,social:0,ind:5,emp:2,risk:0,wis:3}],
["Their worldview and the way they think.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"If you could choose one ability, it would be...",a:[
["The ability to influence and lead people.",{lead:5,social:3,ind:1,emp:0,risk:2,wis:0}],
["The ability to deeply understand people.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:4}],
["The ability to remain completely independent.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:2}],
["The ability to understand the meaning behind life.",{lead:0,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"How do you feel about solitude?",a:[
["Useful, but I prefer having a team around me.",{lead:3,social:3,ind:1,emp:1,risk:1,wis:1}],
["I enjoy some solitude, but relationships energize me.",{lead:1,social:3,ind:1,emp:3,risk:0,wis:2}],
["I genuinely recharge through solitude.",{lead:2,social:-2,ind:5,emp:1,risk:1,wis:3}],
["Solitude gives me time to reflect.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"Which fear is hardest for you?",a:[
["Losing control of my future.",{lead:4,social:1,ind:3,emp:0,risk:1,wis:1}],
["Losing someone important.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:3}],
["Being trapped by other people's expectations.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:2}],
["Living without discovering what truly matters.",{lead:0,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"What do you value most in yourself?",a:[
["Courage.",{lead:4,social:1,ind:3,emp:0,risk:4,wis:1}],
["Kindness.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:3}],
["Independence.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:2}],
["Wisdom.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"When plans suddenly change, you...",a:[
["Take over and create a new plan.",{lead:4,social:2,ind:2,emp:0,risk:3,wis:1}],
["Check how everyone is affected.",{lead:1,social:3,ind:0,emp:4,risk:0,wis:2}],
["Adapt quietly and keep going.",{lead:2,social:-1,ind:4,emp:2,risk:2,wis:3}],
["Look at why the change happened and what it teaches.",{lead:1,social:0,ind:2,emp:2,risk:1,wis:5}]
]},
{q:"How important is social recognition?",a:[
["Very important; achievement should be visible.",{lead:4,social:3,ind:1,emp:0,risk:2,wis:0}],
["Somewhat important; appreciation feels good.",{lead:1,social:3,ind:0,emp:3,risk:0,wis:2}],
["Not very important; I know who I am.",{lead:2,social:-2,ind:5,emp:1,risk:1,wis:3}],
["It matters less than living meaningfully.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"Which describes your approach to conflict?",a:[
["Confront it directly.",{lead:5,social:1,ind:2,emp:0,risk:3,wis:0}],
["Try to restore understanding.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["Avoid unnecessary conflict and protect my boundaries.",{lead:2,social:-1,ind:5,emp:2,risk:0,wis:3}],
["Understand the root issue before reacting.",{lead:1,social:0,ind:2,emp:3,risk:0,wis:5}]
]},
{q:"What would you most like people to remember about you?",a:[
["That I achieved something significant.",{lead:4,social:2,ind:2,emp:0,risk:2,wis:1}],
["That I cared about people.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:3}],
["That I lived on my own terms.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:2}],
["That I left wisdom behind.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"Which experience feels most meaningful?",a:[
["Overcoming something difficult.",{lead:4,social:1,ind:3,emp:0,risk:4,wis:1}],
["Helping someone transform their life.",{lead:1,social:2,ind:0,emp:5,risk:0,wis:3}],
["Discovering something on my own.",{lead:2,social:-1,ind:5,emp:1,risk:3,wis:3}],
["Understanding myself more deeply.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]}

,
{q:"When you think about your life as a whole, what pulls your attention most?",a:[
["What I can build, accomplish, and leave behind.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:1}],
["The people I love and the bonds I create.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:2}],
["The freedom to choose a life that feels truly mine.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:3}],
["The lessons hidden inside everything I experience.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"Which kind of challenge changes you the most?",a:[
["A challenge that forces me to become stronger.",{lead:4,social:1,ind:3,emp:0,risk:4,wis:1}],
["A challenge involving people, trust, or relationships.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["A challenge that tests my independence.",{lead:2,social:-1,ind:5,emp:1,risk:3,wis:2}],
["A challenge that makes me question what I believe.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"If you could revisit one kind of moment, you would prefer to...",a:[
["Redo a difficult decision and act more boldly.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:2}],
["Reconnect with someone and say what mattered.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["See what your life would have looked like on another path.",{lead:1,social:-1,ind:5,emp:1,risk:3,wis:3}],
["Understand the lesson you missed the first time.",{lead:0,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"What kind of legacy feels most meaningful?",a:[
["A visible achievement that improves something.",{lead:4,social:2,ind:2,emp:0,risk:2,wis:1}],
["People remembering that they felt loved and supported.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["A life that stayed authentic even when it was unconventional.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:2}],
["Ideas or wisdom that help others see life differently.",{lead:1,social:0,ind:2,emp:2,risk:0,wis:5}]
]},
{q:"When you sense that something is changing in your life, you...",a:[
["Move quickly and shape the change yourself.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:1}],
["Talk it through with people you trust.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:2}],
["Watch quietly until you know what feels right.",{lead:1,social:-1,ind:5,emp:2,risk:1,wis:3}],
["Look for the larger pattern before choosing a direction.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"Which description of intuition feels closest to you?",a:[
["A strong instinct that tells me when to act.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:2}],
["A feeling about what another person may need.",{lead:0,social:2,ind:0,emp:5,risk:0,wis:3}],
["An inner signal that protects my independence.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:3}],
["A quiet sense that connects separate ideas.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"What would you most like to understand about yourself?",a:[
["How far I can go when I fully commit.",{lead:4,social:1,ind:3,emp:0,risk:3,wis:1}],
["How deeply I can connect with others.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["Why I need freedom and space to be myself.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:3}],
["What gives my life a sense of meaning.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]},
{q:"If this quiz were a journey, what would you want at the end?",a:[
["A clear direction and the courage to pursue it.",{lead:4,social:1,ind:2,emp:0,risk:3,wis:2}],
["A deeper appreciation for the people around me.",{lead:0,social:3,ind:0,emp:5,risk:0,wis:3}],
["A stronger sense of who I am apart from expectations.",{lead:2,social:-1,ind:5,emp:1,risk:2,wis:3}],
["A new question that helps me understand myself.",{lead:0,social:0,ind:3,emp:2,risk:0,wis:5}]
]}

];
