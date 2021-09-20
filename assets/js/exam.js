// Question Data
const exam = {
    "question1": {
      "questionText": `You find yourself captive in a dungeon for no good reason, you’re there, okay? Accept it. <br>How do you escape?`,
      "answers": {
        "answer1": {
          "answerText": "I fashion a lockpick from convenient debris, pick the lock and escape into the shadows.",
          "answerTextShort": "Fashion Lockpick",
          "answerStat": "thief",
          "answerResponse": `How very convenient, the dungeon does have a <em>lot</em> of shadows.`
        },
        "answer2": {
          "answerText": "I punch it.",
          "answerTextShort": "Punch It",
          "answerStat": "fighter",
          "answerResponse": "Wha… What are you punching exactly? *sigh* Nevermind. It doesn't matter."
        },
        "answer3": {
          "answerText": "I stun the guard with magical sparkles and levitate the key from their pocket while they’re distracted.",
          "answerTextShort": "Magical Sparkles",
          "answerStat": "mage",
          "answerResponse": "You call that magic? Throwing glitter in someone's face? *puffs dismissively*"
        }
      }
    },
    "question2": {
      "questionText": `After months of gruelling transcontinental warfare against a dark and powerful army, you finally find yourself at the summit of Mount Skullfire to face off against the all powerful, villainous dragonlord Greg. <br>How do you proceed?`,
      "answers": {
        "answer1": {
          "answerText": "I deftly make my way to Greg’s sleeping chambers and take his life while he sleeps with a precise slice of my dagger. Then make off with all his gold.",
          "answerTextShort": "Stealth",
          "answerStat": "thief",
          "answerResponse": "Well, that got dark quickly."
        },
        "answer2": {
          "answerText": "I punch it.",
          "answerTextShort": "Punch It",
          "answerStat": "fighter",
          "answerResponse": "The mountain? You punch… the mountain?"
        },
        "answer3": {
          "answerText": "I cast an epic spell.",
          "answerTextShort": "Cast Spell",
          "answerStat": "mage",
          "answerResponse": "Epic!"
        }
      }
    },
    "question3": {
      "questionText": `You are sat at the bar in the local tavern. The barkeeper passes you the beer you've ordered. <br>What do you do?`,
      "answers": {
        "answer1": {
          "answerText": `I place a bucket on the bar keeper’s head to obscure his vision and help myself to a bottle of their finest whiskey. Then I drink my beer.`,
          "answerTextShort": "Use Bucket",
          "answerStat": "thief",
          "answerResponse": "I can't believe any situation, fictional or otherwise, where that’d actually work."
        },
        "answer2": {
          "answerText": "I punch it.",
          "answerTextShort": "Punch It",
          "answerStat": "fighter",
          "answerResponse": "It's customary to drink it, but, okay."
        },
        "answer3": {
          "answerText": 'I call out to the bar "This round’s on me!" and cast a duplication spell on my beer.',
          "answerTextShort": `"This round's on me!"`,
          "answerStat": "mage",
          "answerResponse": "I can tell you with the benefit of hindsight, such behaviour is liable to get you barred from a tavern."
        }
      }
    },
    "question4": {
      "questionText": `As you pass a traveller on the road they call to you asking for help. <br>How will you be of assistance?`,
      "answers": {
        "answer1": {
          "answerText": "I use my stealth skills to inconspicuously fling myself into the roadside bushes, saving myself from a charity mugging.",
          "answerTextShort": "Use Bushes",
          "answerStat": "thief",
          "answerResponse": "Understandable."
        },
        "answer2": {
          "answerText": "I punch it.",
          "answerTextShort": "Punch It",
          "answerStat": "fighter",
          "answerResponse": "Wow... I know punching stuff is fun but they were fellow human being. *shakes head *"
        },
        "answer3": {
          "answerText": `I pick up my pace but send them my thoughts and magic, calling back "I'll say a spell for you."`,
          "answerTextShort": "Thoughts and Magic",
          "answerStat": "mage",
          "answerResponse": "I'm sure they appreciate it."
        }
      }
    },
    "question5": {
      "questionText": "One morning you find yourself facing the mirror, contemplating your life, your very existence. Who are you?",
      "answers": {
        "answer1": {
          "answerText": "I am a thief.",
          "answerTextShort": "A Thief",
          "answerStat": "thief",
          "answerResponse": "I had my suspicions."
        },
        "answer2": {
          "answerText": "I punch it.",
          "answerTextShort": "Punch It",
          "answerStat": "fighter",
          "answerResponse": "Yep. You're definitely a fighter."
        },
        "answer3": {
          "answerText": " I am a mage.",
          "answerTextShort": "A Mage",
          "answerStat": "mage",
          "answerResponse": "You look magical."
        }
      }
    }
  };