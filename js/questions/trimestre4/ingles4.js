// ============================================
// INGLÉS IV: GRAMMAR AND LANGUAGE SKILLS
// 9 ACTIVITIES - 90 QUESTIONS
// ============================================

const inglesIV = {
    id: "inglesIV",
    nombre: "INGLÉS IV: GRAMMAR AND LANGUAGE SKILLS",
    icono: "🇬🇧",
    descripcion: "Study of demonstrative adjectives, used to for past habits, Present Perfect Tense with adverbs (already, yet, just, ever, never), for and since, passive voice, modal verbs (must, have to, should, ought to, would, could, may, might), zero, first and second conditionals.",
    modulos: {
        modulo1: {
            nombre: "Module 1: Life - Past Habits and Present Perfect",
            actividades: {
                act1: {
                    nombre: "Activity 1: Demonstrative Adjectives and Used To",
                    desc: "Understanding of demonstrative adjectives (this, that, these, those) and 'used to' for past habits and routines.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Demonstrative adjectives",
                            q: "What are the singular demonstrative adjectives in English?",
                            options: ["These and those", "This and that", "This and these", "That and those"],
                            answerIndex: 1,
                            explain: "This and that are singular demonstrative adjectives. 'This' refers to objects close to you and 'that' for objects far from you."
                        },
                        {
                            topic: "Demonstrative adjectives",
                            q: "Which demonstrative adjective refers to plural objects that are far from you?",
                            options: ["These", "This", "Those", "That"],
                            answerIndex: 2,
                            explain: "'Those' is the plural demonstrative adjective used for objects that are far from you, while 'these' is for objects close to you."
                        },
                        {
                            topic: "Used to - affirmative",
                            q: "What is the correct affirmative structure of 'used to'?",
                            options: ["Subject + used to + infinitive verb", "Subject + use to + infinitive verb", "Subject + used to + past participle", "Subject + did + use to + verb"],
                            answerIndex: 0,
                            explain: "The affirmative form of 'used to' is: Subject + used to + infinitive verb (without 'to'). Example: I used to wear jeans."
                        },
                        {
                            topic: "Used to - meaning",
                            q: "What does 'used to' express in English?",
                            options: ["Present habits", "Future plans", "Past habits and actions that no longer happen", "Continuous actions"],
                            answerIndex: 2,
                            explain: "'Used to' refers to past habits and repeated actions which happened in the past but no longer occur in the present."
                        },
                        {
                            topic: "Used to - negative",
                            q: "What is the correct negative form of 'used to'?",
                            options: ["Subject + used not to + verb", "Subject + didn't use to + verb", "Subject + didn't used to + verb", "Subject + use not to + verb"],
                            answerIndex: 1,
                            explain: "The negative form uses the auxiliary 'did' + 'not' + 'use to' + verb. Example: I didn't use to smoke."
                        },
                        {
                            topic: "Used to - interrogative",
                            q: "What is the correct interrogative structure of 'used to'?",
                            options: ["Used to + subject + verb?", "Did + subject + used to + verb?", "Did + subject + use to + verb?", "Use to + subject + verb?"],
                            answerIndex: 2,
                            explain: "The interrogative form uses the auxiliary 'did' + subject + 'use to' + verb. Example: Did you use to ride a bike?"
                        },
                        {
                            topic: "Used to - Wh- questions",
                            q: "Which sentence correctly uses a Wh- word with 'used to'?",
                            options: ["Where used you to go?", "Where did you used to go?", "Where did you use to go?", "Where did you use to went?"],
                            answerIndex: 2,
                            explain: "Wh- questions with 'used to' follow the structure: Wh- word + did + subject + use to + verb. Example: Where did you use to go to school?"
                        },
                        {
                            topic: "Demonstrative pronouns",
                            q: "What is the difference between 'this' and 'it' as a demonstrative pronoun?",
                            options: ["No difference", "This specifies an object; it is a personal pronoun", "This is plural; it is singular", "This is for people; it is for objects"],
                            answerIndex: 1,
                            explain: "Demonstrative pronouns (this, that, these, those) specify which object you are talking about, while 'it' is a personal pronoun."
                        },
                        {
                            topic: "Reading comprehension",
                            q: "According to the reading 'When I was a child', what did boys use to learn in school?",
                            options: ["Cook and clean", "Woodwork", "Sewing", "Painting"],
                            answerIndex: 1,
                            explain: "The text states: 'Boys used to learn woodwork and girls used to sew simple clothes.'"
                        },
                        {
                            topic: "Reading comprehension",
                            q: "According to the reading, what did teachers use to do if a child didn't do homework?",
                            options: ["Call their parents", "Send them home", "Stay in classroom without a break to finish it", "Give them extra homework"],
                            answerIndex: 2,
                            explain: "The text says: 'If any child didn't do the homework, she or he used to stay in classroom to finish it without getting a break.'"
                        }
                    ]
                },
                act2: {
                    nombre: "Activity 2: Present Perfect Tense",
                    desc: "Understanding of Present Perfect Tense, its structure, and adverbs (already, yet, just, recently, rarely, ever, never).",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Present Perfect - use",
                            q: "When do we use the Present Perfect Tense?",
                            options: ["For actions that happened at a specific past time", "To connect a finished action with the present", "For future plans", "For ongoing present actions"],
                            answerIndex: 1,
                            explain: "The Present Perfect Tense is used to describe actions that started in the past and have an impact on or continue into the present."
                        },
                        {
                            topic: "Present Perfect - structure",
                            q: "What is the correct structure for affirmative sentences in Present Perfect?",
                            options: ["Subject + have/has + past participle", "Subject + have/has + present participle", "Subject + had + past participle", "Subject + have/has + infinitive"],
                            answerIndex: 0,
                            explain: "The affirmative structure is: Subject + auxiliary verb (have/has) + past participle of the main verb."
                        },
                        {
                            topic: "Present Perfect - past participle",
                            q: "How is the past participle of regular verbs formed?",
                            options: ["Add -ing", "Add -ed at the end of the base verb", "Add -s", "Add -en"],
                            answerIndex: 1,
                            explain: "The past participle of regular verbs is formed by adding -ed to the base form of the verb. Example: play → played."
                        },
                        {
                            topic: "Adverb - Already",
                            q: "Where is 'already' placed in a Present Perfect sentence?",
                            options: ["At the end of the sentence", "Before the subject", "Between have/has and the past participle", "After the past participle"],
                            answerIndex: 2,
                            explain: "'Already' goes between the auxiliary verb (have/has) and the past participle. Example: I have already done my homework."
                        },
                        {
                            topic: "Adverb - Yet",
                            q: "How is 'yet' used in Present Perfect sentences?",
                            options: ["In affirmative sentences only", "In negative sentences and questions, placed at the end", "Between have/has and past participle", "At the beginning of the sentence"],
                            answerIndex: 1,
                            explain: "'Yet' is used in negative sentences and questions, placed at the end of the statement. Example: I haven't done my homework yet."
                        },
                        {
                            topic: "Adverb - Just",
                            q: "What does 'just' mean in Present Perfect?",
                            options: ["A long time ago", "At a specific time", "Recently, a very short time before the moment of speaking", "Never"],
                            answerIndex: 2,
                            explain: "'Just' means recently and refers to an action finished during a very short period before the moment of speaking."
                        },
                        {
                            topic: "Adverb - Ever",
                            q: "How is 'ever' used in Present Perfect?",
                            options: ["In affirmative sentences with positive meaning", "In questions to ask if someone has experienced something in their life", "In negative sentences", "To express duration"],
                            answerIndex: 1,
                            explain: "'Ever' is used in questions to ask if someone has done or experienced something in his or her life. Example: Have you ever been to Italy?"
                        },
                        {
                            topic: "Adverb - Never",
                            q: "What does 'never' mean in Present Perfect?",
                            options: ["At any time", "At no time, not at any time", "Recently", "Already"],
                            answerIndex: 1,
                            explain: "'Never' means 'at no time' or 'not at any time' and is used in affirmative sentences but with a negative meaning."
                        },
                        {
                            topic: "Present Perfect - negative",
                            q: "What is the correct negative form of Present Perfect?",
                            options: ["Subject + don't have + past participle", "Subject + have/has + not + past participle", "Subject + not have + past participle", "Subject + haven't has + past participle"],
                            answerIndex: 1,
                            explain: "The negative form is: Subject + have/has + not + past participle. Contractions: haven't/hasn't."
                        },
                        {
                            topic: "Present Perfect - interrogative",
                            q: "How do you form questions in Present Perfect?",
                            options: ["Add 'do' before the subject", "Invert the auxiliary verb have/has with the subject", "Add 'did' before the subject", "Add 'is' before the subject"],
                            answerIndex: 1,
                            explain: "The interrogative form is made by inverting the auxiliary verb have/has to the front of the sentence (before the subject)."
                        }
                    ]
                },
                act3: {
                    nombre: "Activity 3: Present Perfect with Adverbs and Passive Voice",
                    desc: "Understanding of Present Perfect with already, yet, just, ever, never, for, since, and passive voice in simple present and past.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Yet - negative questions",
                            q: "What is the purpose of negative questions with 'yet'?",
                            options: ["To express surprise", "To express a stronger expectation that something will happen", "To express happiness", "To express doubt"],
                            answerIndex: 1,
                            explain: "Negative questions with 'yet' express a stronger expectation that something will happen. Example: Hasn't your sister called yet?"
                        },
                        {
                            topic: "For vs Since",
                            q: "What is the difference between 'for' and 'since' in Present Perfect?",
                            options: ["For expresses specific time; since expresses duration", "For expresses duration of time; since expresses the starting point of an action", "For is used with past; since with future", "No difference"],
                            answerIndex: 1,
                            explain: "For expresses the length of time an action has carried on (duration). Since expresses the specific time when an action started."
                        },
                        {
                            topic: "How long",
                            q: "What question word is used to ask about the duration of an action?",
                            options: ["When", "Where", "How long", "Why"],
                            answerIndex: 2,
                            explain: "'How long' is used to ask about the duration of any action or period of time and is often used with Present Perfect."
                        },
                        {
                            topic: "Passive voice - use",
                            q: "When is passive voice used?",
                            options: ["To emphasize the subject performing the action", "To emphasize the result of an action without mentioning who did it", "To express future actions", "To express past habits"],
                            answerIndex: 1,
                            explain: "Passive voice is used to emphasize the result of an action without mentioning who did it, especially when the 'doer' is unknown or unimportant."
                        },
                        {
                            topic: "Passive voice - structure",
                            q: "What is the structure of passive voice in present simple?",
                            options: ["Subject + have/has + past participle", "Subject + am/is/are + past participle", "Subject + was/were + past participle", "Subject + will be + past participle"],
                            answerIndex: 1,
                            explain: "Passive voice in present simple uses: Subject + am/is/are + past participle. Example: English is taught here."
                        },
                        {
                            topic: "Passive voice - past simple",
                            q: "What is the structure of passive voice in past simple?",
                            options: ["Subject + have/has + been + past participle", "Subject + was/were + past participle", "Subject + am/is/are + past participle", "Subject + had + past participle"],
                            answerIndex: 1,
                            explain: "Passive voice in past simple uses: Subject + was/were + past participle. Example: His bike was stolen."
                        },
                        {
                            topic: "Passive voice - agent",
                            q: "How is the 'doer' (agent) introduced in passive voice?",
                            options: ["With the preposition 'by'", "With the preposition 'for'", "With the preposition 'with'", "With the preposition 'from'"],
                            answerIndex: 0,
                            explain: "The 'doer' or agent in passive voice is introduced with the preposition 'by'. Example: This story was written by Poe."
                        },
                        {
                            topic: "Active vs Passive",
                            q: "Convert to passive: 'Someone stole his bike last night.'",
                            options: ["His bike stole last night", "His bike was stolen last night", "His bike is stolen last night", "His bike has stolen last night"],
                            answerIndex: 1,
                            explain: "The passive form is: 'His bike was stolen last night' (past simple passive: was/were + past participle)."
                        },
                        {
                            topic: "For - example",
                            q: "Which sentence correctly uses 'for' in Present Perfect?",
                            options: ["I have lived here since 10 years", "I have lived here for 10 years", "I have lived here already 10 years", "I have lived here yet 10 years"],
                            answerIndex: 1,
                            explain: "'For' expresses duration. The correct structure is: I have lived here for 10 years (duration of time)."
                        },
                        {
                            topic: "Since - example",
                            q: "Which sentence correctly uses 'since' in Present Perfect?",
                            options: ["I have lived here for I was 10", "I have lived here since I was 10 years old", "I have lived here already I was 10", "I have lived here yet I was 10"],
                            answerIndex: 1,
                            explain: "'Since' expresses the starting point of an action. The correct structure is: I have lived here since I was 10 years old."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Module 2: Life Choices - Modal Verbs for Obligation and Advice",
            actividades: {
                act1: {
                    nombre: "Activity 1: Modal Verbs Must and Have To",
                    desc: "Understanding of must for personal obligation/prohibition and have to for external obligation/necessity.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Must - use",
                            q: "What does 'must' express in English?",
                            options: ["Possibility", "Obligation, duty, necessity, and strong recommendation", "Permission", "Ability"],
                            answerIndex: 1,
                            explain: "Must is used to express obligation, duty, rules, laws, regulations, necessity, and to give strong recommendations."
                        },
                        {
                            topic: "Must - prohibition",
                            q: "How do you express prohibition with 'must'?",
                            options: ["Must not / mustn't", "Must not to", "Mustn't to", "Not must"],
                            answerIndex: 0,
                            explain: "The negative form 'must not' (mustn't) is used to express prohibition. Example: People must not use their phone while driving."
                        },
                        {
                            topic: "Must vs Have to - difference",
                            q: "What is the main difference between 'must' and 'have to'?",
                            options: ["No difference", "Must is for external obligation; have to is for personal obligation", "Must is for personal/subjective obligation; have to is for external obligation", "Must is past; have to is present"],
                            answerIndex: 2,
                            explain: "Must expresses obligation coming from the speaker (personal/subjective), while have to expresses obligation coming from an external authority."
                        },
                        {
                            topic: "Have to - meaning",
                            q: "What does 'have to' express?",
                            options: ["Possibility", "Permission", "Necessity, certainty, and objective obligation", "Recommendation"],
                            answerIndex: 2,
                            explain: "Have to is used to express certainty, necessity, and objective (impersonal) obligation."
                        },
                        {
                            topic: "Have to - affirmative",
                            q: "What is the correct affirmative form of 'have to' with he/she/it?",
                            options: ["He have to", "He has to", "He to have", "He having to"],
                            answerIndex: 1,
                            explain: "With he, she, and it, 'have to' changes to 'has to'. Example: He has to wear a tie at work."
                        },
                        {
                            topic: "Have to - negative meaning",
                            q: "What does 'don't have to' mean?",
                            options: ["Prohibition", "Lack of necessity (no obligation)", "Impossibility", "Strong advice"],
                            answerIndex: 1,
                            explain: "'Don't/doesn't have to' means there is no obligation to do something (it is not necessary)."
                        },
                        {
                            topic: "Must vs Don't have to",
                            q: "What is the difference between 'must not' and 'don't have to'?",
                            options: ["No difference", "Must not = prohibition; don't have to = lack of necessity", "Must not = past; don't have to = present", "Must not = advice; don't have to = obligation"],
                            answerIndex: 1,
                            explain: "'Must not' expresses prohibition (it is forbidden), while 'don't have to' expresses lack of necessity (it is not necessary)."
                        },
                        {
                            topic: "Have to - interrogative",
                            q: "How do you form questions with 'have to'?",
                            options: ["Have to + subject + verb?", "Do/Does + subject + have to + verb?", "Do/Does + subject + to have + verb?", "Have + subject + to + verb?"],
                            answerIndex: 1,
                            explain: "Questions with 'have to' use the auxiliary verb do/does. Example: Does she have to get up early?"
                        },
                        {
                            topic: "Have to - obligation source",
                            q: "Which sentence expresses external obligation?",
                            options: ["I must call my mom today", "John has to wear a tie at work (company rule)", "You must see that movie", "I must study more"],
                            answerIndex: 1,
                            explain: "External obligation comes from an outside authority (rules, laws, regulations). 'Has to wear a tie at work' is a company rule, not a personal feeling."
                        },
                        {
                            topic: "Must - strong recommendation",
                            q: "Which sentence uses 'must' to give a strong recommendation?",
                            options: ["You must wear a seatbelt", "Children must obey their parents", "You must see the Parasite movie, it's fantastic!", "She must go to the hospital"],
                            answerIndex: 2,
                            explain: "'Must' can give a strong recommendation (stronger than advice). Example: 'You must see the Parasite movie!' expresses a strong recommendation."
                        }
                    ]
                },
                act2: {
                    nombre: "Activity 2: Modal Verb Have To",
                    desc: "Detailed understanding of have to for obligation, necessity, and its negative and interrogative forms.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Have to - impersonal obligation",
                            q: "Which sentence expresses impersonal obligation with 'have to'?",
                            options: ["I must call my friend", "You have to drive on the right in England (law)", "I need to eat", "You should study"],
                            answerIndex: 1,
                            explain: "Impersonal obligation refers to external rules or laws. 'You have to drive on the right in England' is a legal requirement."
                        },
                        {
                            topic: "Have to - certainty",
                            q: "How can 'have to' express certainty?",
                            options: ["I have to go to work", "She has to pass her exam. She studied hard all night (evidence)", "You have to wear a uniform", "They have to arrive early"],
                            answerIndex: 1,
                            explain: "'Have to' can express certainty when there is evidence. Example: 'She has to pass her exam' because there is evidence she studied hard."
                        },
                        {
                            topic: "Have to - necessity emphasis",
                            q: "Which sentence uses 'have to' to emphasize necessity?",
                            options: ["You must see that film", "The soup has to be stirred continuously to prevent burning", "I should call my mom", "He might come later"],
                            answerIndex: 1,
                            explain: "'Have to' can emphasize the necessity of doing something. The soup must be stirred to prevent burning (it is necessary)."
                        },
                        {
                            topic: "Have to - negative",
                            q: "What is the correct negative form of 'have to'?",
                            options: ["Subject + haven't to + verb", "Subject + don't/doesn't have to + verb", "Subject + haven't + verb", "Subject + don't has to + verb"],
                            answerIndex: 1,
                            explain: "The negative form uses the auxiliary do/does + not + have to. Example: I don't have to get up early."
                        },
                        {
                            topic: "Have to vs Must - comparison",
                            q: "Which sentence would likely use 'must' rather than 'have to'?",
                            options: ["Employees have to arrive at 9 AM", "Drivers have to stop at red lights", "I must finish this project because it's important to me", "Students have to wear uniforms"],
                            answerIndex: 2,
                            explain: "'Must' is used for strong personal obligations that come from the speaker's feelings, not external rules."
                        },
                        {
                            topic: "Have to - Wh- questions",
                            q: "Which Wh- question with 'have to' is correctly formed?",
                            options: ["When have you to send the invitation?", "When do you have to send the invitation?", "When you have to send the invitation?", "When does you have to send the invitation?"],
                            answerIndex: 1,
                            explain: "Wh- questions with 'have to' use: Wh- word + do/does + subject + have to + verb. Example: When do I have to send the invitation?"
                        },
                        {
                            topic: "Have to - third person singular",
                            q: "Why is 'has to' used in 'She has to read four books'?",
                            options: ["Because 'have to' changes to 'has to' with he/she/it", "Because it's past tense", "Because it's future", "Because it's a question"],
                            answerIndex: 0,
                            explain: "In affirmative sentences, 'have to' changes to 'has to' with third person singular subjects (he, she, it)."
                        },
                        {
                            topic: "Have to - short answers",
                            q: "What is the correct short answer to 'Do I have to eat vegetables every day?'",
                            options: ["Yes, I have", "Yes, you do", "Yes, you have to", "Yes, you do have"],
                            answerIndex: 1,
                            explain: "Short answers with 'have to' use the auxiliary 'do/does'. Example: 'Do I have to eat vegetables? Yes, you do.'"
                        },
                        {
                            topic: "Have to - interrogative with Wh-",
                            q: "Choose the correct Wh- question with 'have to'.",
                            options: ["Why does she have to work on Sunday?", "Why do she has to work on Sunday?", "Why she have to work on Sunday?", "Why does she has to work on Sunday?"],
                            answerIndex: 0,
                            explain: "Correct structure: Why + does (auxiliary) + subject (she) + have to + verb? The main verb 'have' does not change to 'has' after 'does'."
                        },
                        {
                            topic: "Have to - meaning comparison",
                            q: "Which sentence means 'it is not necessary'?",
                            options: ["You must not smoke here", "You don't have to smoke here", "You shouldn't smoke here", "You couldn't smoke here"],
                            answerIndex: 1,
                            explain: "'Don't have to' means lack of necessity (it is not necessary to do something). 'Must not' means prohibition (it is forbidden)."
                        }
                    ]
                },
                act3: {
                    nombre: "Activity 3: Modal Verbs Should and Ought To",
                    desc: "Understanding of should for advice/suggestions and ought to for moral responsibility.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Should - use",
                            q: "What is the main use of 'should'?",
                            options: ["Express obligation", "Give advice, opinions, and suggestions", "Express ability", "Express certainty"],
                            answerIndex: 1,
                            explain: "Should is used for giving advice, opinions, suggestions, and recommendations. Example: You should start eating healthier."
                        },
                        {
                            topic: "Should - negative",
                            q: "What is the negative contraction of 'should not'?",
                            options: ["Shouldn't", "Should't", "Shoudn't", "Shouldnot"],
                            answerIndex: 0,
                            explain: "The contracted form of 'should not' is 'shouldn't'. Example: She shouldn't behave in that way."
                        },
                        {
                            topic: "Should - interrogative",
                            q: "How do you form questions with 'should'?",
                            options: ["Do + subject + should + verb?", "Should + subject + verb?", "Subject + should + verb?", "Does + subject + should + verb?"],
                            answerIndex: 1,
                            explain: "Questions with 'should' are formed by moving 'should' to the front of the sentence: Should + subject + verb?"
                        },
                        {
                            topic: "Should vs Ought to",
                            q: "What is the difference between 'should' and 'ought to'?",
                            options: ["No difference, they are identical", "Should is for past; ought to is for present", "Should is more common; ought to is more formal and implies moral responsibility", "Should is for negative; ought to is for affirmative"],
                            answerIndex: 2,
                            explain: "Ought to is more formal than should and often implies a moral responsibility or duty."
                        },
                        {
                            topic: "Ought to - structure",
                            q: "What is the correct structure for 'ought to'?",
                            options: ["Subject + ought + verb", "Subject + ought to + verb", "Subject + ought + to + verb", "Subject + ought + verb infinitive"],
                            answerIndex: 1,
                            explain: "The structure is: Subject + ought to + infinitive verb (without 'to' because 'to' is already part of 'ought to'). Example: You ought to study more."
                        },
                        {
                            topic: "Ought to - negative",
                            q: "What is the negative form of 'ought to'?",
                            options: ["Ought not to", "Oughtn't to", "Both are correct", "Ought to not"],
                            answerIndex: 2,
                            explain: "The negative form can be 'ought not to' or the contraction 'oughtn't to'. Example: The kids ought not to play soccer."
                        },
                        {
                            topic: "Should - Wh- questions",
                            q: "Choose the correctly formed Wh- question with 'should'.",
                            options: ["What I should do with this?", "What should I do with this?", "What should to I do with this?", "What do I should do with this?"],
                            answerIndex: 1,
                            explain: "Wh- questions with 'should' follow the structure: Wh- word + should + subject + verb. Example: What should I do?"
                        },
                        {
                            topic: "Should - recommendation",
                            q: "Which sentence gives a recommendation?",
                            options: ["You must wear a seatbelt", "You should try to lose weight", "You have to arrive on time", "You need to study"],
                            answerIndex: 1,
                            explain: "'Should' is used for recommendations and advice. 'You should try to lose weight' is a recommendation, not a strict obligation."
                        },
                        {
                            topic: "Should vs Must",
                            q: "What is the difference between 'you should go' and 'you must go'?",
                            options: ["No difference", "Should is stronger than must", "Should is advice/recommendation; must is strong obligation", "Should is past; must is present"],
                            answerIndex: 2,
                            explain: "'Should' expresses advice or recommendation (weaker), while 'must' expresses strong obligation (stronger)."
                        },
                        {
                            topic: "Should - obligation or recommendation",
                            q: "Which sentence expresses an obligation rather than a recommendation?",
                            options: ["You should be on time at the meeting", "You should see a doctor", "You should eat vegetables", "You should try this restaurant"],
                            answerIndex: 0,
                            explain: "While 'should' typically expresses recommendations, 'should be on time at the meeting' implies a professional obligation, though less strong than 'must'."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Module 3: If I Were You - Conditionals and Modals",
            actividades: {
                act1: {
                    nombre: "Activity 1: Zero and First Conditionals",
                    desc: "Understanding of zero conditional for general truths/facts and first conditional for real possibility in the future.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Zero Conditional - use",
                            q: "When do we use the Zero Conditional?",
                            options: ["For future possibilities", "For unreal situations", "For facts and general truths where the result always happens", "For past habits"],
                            answerIndex: 2,
                            explain: "The Zero Conditional is used when the result will always happen (facts, general truths, scientific facts)."
                        },
                        {
                            topic: "Zero Conditional - structure",
                            q: "What is the correct structure of the Zero Conditional?",
                            options: ["If + present simple, will + verb", "If + past simple, would + verb", "If + present simple, present simple", "If + present continuous, present simple"],
                            answerIndex: 2,
                            explain: "The Zero Conditional uses the Simple Present Tense in both clauses: If + present simple, present simple."
                        },
                        {
                            topic: "Zero Conditional - example",
                            q: "Which sentence is an example of Zero Conditional?",
                            options: ["If it rains, I will stay home", "If I were rich, I would travel", "If you heat ice, it melts", "If she comes, I will be happy"],
                            answerIndex: 2,
                            explain: "'If you heat ice, it melts' is a Zero Conditional because it expresses a scientific fact that is always true."
                        },
                        {
                            topic: "Zero Conditional - replacing 'if'",
                            q: "Which word can often replace 'if' in Zero Conditional without changing the meaning?",
                            options: ["When", "Unless", "Whether", "After"],
                            answerIndex: 0,
                            explain: "In Zero Conditional, 'if' can usually be replaced by 'when' without changing the meaning. Example: When you heat ice, it melts."
                        },
                        {
                            topic: "First Conditional - use",
                            q: "When do we use the First Conditional?",
                            options: ["For general facts", "For unreal or hypothetical situations", "For real possibilities in the future", "For past events"],
                            answerIndex: 2,
                            explain: "The First Conditional is used to express a real possibility about a particular condition or situation in the future."
                        },
                        {
                            topic: "First Conditional - structure",
                            q: "What is the correct structure of the First Conditional?",
                            options: ["If + present simple, will + verb", "If + past simple, would + verb", "If + present perfect, will + verb", "If + present simple, present simple"],
                            answerIndex: 0,
                            explain: "The First Conditional uses: If + present simple, will + base verb (infinitive without 'to')."
                        },
                        {
                            topic: "First Conditional - example",
                            q: "Which sentence is an example of First Conditional?",
                            options: ["If you heat water, it boils", "If I won the lottery, I would travel", "If it rains tomorrow, I will stay at home", "If I were you, I would study"],
                            answerIndex: 2,
                            explain: "'If it rains tomorrow, I will stay at home' expresses a real possibility about a future condition."
                        },
                        {
                            topic: "Conditionals - clause order",
                            q: "When the main clause comes first in a conditional sentence, is a comma needed?",
                            options: ["Yes, always", "No, never", "Only in First Conditional", "Only in Zero Conditional"],
                            answerIndex: 1,
                            explain: "When the main clause comes first, no comma is needed between the clauses. Example: I will stay at home if it rains tomorrow."
                        },
                        {
                            topic: "First Conditional - possibility degree",
                            q: "What degree of possibility does the First Conditional express?",
                            options: ["100% certain", "Real or likely possibility", "Very unlikely possibility", "Impossible situation"],
                            answerIndex: 1,
                            explain: "The First Conditional expresses real or likely possibilities about future events or situations."
                        },
                        {
                            topic: "Zero vs First Conditional",
                            q: "What is the main difference between Zero and First Conditional?",
                            options: ["Zero is for past; First is for present", "Zero is for general truths/facts (always true); First is for real future possibilities", "Zero uses will; First uses present", "No difference"],
                            answerIndex: 1,
                            explain: "Zero Conditional expresses general truths and facts that are always true. First Conditional expresses real possibilities about specific future situations."
                        }
                    ]
                },
                act2: {
                    nombre: "Activity 2: Modal Verbs Would, Could, May, Might",
                    desc: "Understanding of would for wishes/polite requests, and could/may/might for possibility and permission.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Would - wishes",
                            q: "What does 'would' express when talking about desires?",
                            options: ["I would love to live here (wish/desire)", "I would go (obligation)", "I would be (certainty)", "I would like (past)"],
                            answerIndex: 0,
                            explain: "'Would' is used to express wishes, desires, and willingness. Example: I would love to live here."
                        },
                        {
                            topic: "Would - polite requests",
                            q: "Which sentence is a polite request using 'would'?",
                            options: ["Open the door", "Would you open the door, please?", "You must open the door", "You open the door"],
                            answerIndex: 1,
                            explain: "'Would you open the door, please?' is more polite than the imperative form."
                        },
                        {
                            topic: "Would - hypothetical situations",
                            q: "What is the correct contraction of 'would' in affirmative sentences?",
                            options: ["'d", "'ll", "'s", "'ve"],
                            answerIndex: 0,
                            explain: "The contracted form of 'would' is 'd. Example: I would go → I'd go."
                        },
                        {
                            topic: "Would - negative contraction",
                            q: "What is the negative contraction of 'would not'?",
                            options: ["Wouldn't", "Would'nt", "Won't", "Would not"],
                            answerIndex: 0,
                            explain: "The contracted form of 'would not' is 'wouldn't'. Example: I wouldn't eat that."
                        },
                        {
                            topic: "Could, May, Might - possibility",
                            q: "Which modal verb expresses the highest degree of possibility?",
                            options: ["Might", "Could", "May", "All express the same degree"],
                            answerIndex: 2,
                            explain: "May expresses the highest likelihood, followed by could, then might (the least certain). May = 50% possibility, might = 30-40%."
                        },
                        {
                            topic: "Could, May, Might - permission",
                            q: "Which modal verbs are used to ask for permission formally?",
                            options: ["Must and have to", "Could, may, and might", "Should and ought to", "Will and would"],
                            answerIndex: 1,
                            explain: "Could, may, and might are used to ask for or give permission in a formal way. Example: May I borrow your pencil?"
                        },
                        {
                            topic: "Might - certainty level",
                            q: "What does 'might' express about possibility?",
                            options: ["High probability", "Only a possibility, nothing is very certain", "Impossible", "100% certain"],
                            answerIndex: 1,
                            explain: "'Might' expresses a lower degree of possibility. There is only a possibility, but nothing is very certain."
                        },
                        {
                            topic: "May - negative form",
                            q: "What is the negative form of 'may'?",
                            options: ["May not (no contraction)", "Mayn't", "Might not", "May doesn't"],
                            answerIndex: 0,
                            explain: "The negative form of 'may' is 'may not' and this form cannot be contracted."
                        },
                        {
                            topic: "Could - negative contraction",
                            q: "What is the negative contraction of 'could'?",
                            options: ["Couldn't", "Could'nt", "Coudn't", "Could not"],
                            answerIndex: 0,
                            explain: "The negative contraction of 'could' is 'couldn't'. Example: It couldn't be true."
                        },
                        {
                            topic: "Would - Wh- questions",
                            q: "Choose the correctly formed Wh- question with 'would'.",
                            options: ["What you would like to do?", "What would you like to do?", "What would you to do?", "What would you likes to do?"],
                            answerIndex: 1,
                            explain: "Wh- questions with 'would' follow the structure: Wh- word + would + subject + verb. Example: What would you like to do?"
                        }
                    ]
                },
                act3: {
                    nombre: "Activity 3: Second Conditional",
                    desc: "Understanding of Second Conditional for unreal/hypothetical situations, using would, could, might, and the subjunctive mood with 'were'.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Second Conditional - use",
                            q: "When do we use the Second Conditional?",
                            options: ["For real future possibilities", "For general facts", "For unreal or hypothetical situations in the present or future", "For past habits"],
                            answerIndex: 2,
                            explain: "The Second Conditional is used to describe unreal, hypothetical, or improbable situations in the present or near future."
                        },
                        {
                            topic: "Second Conditional - structure",
                            q: "What is the correct structure of the Second Conditional?",
                            options: ["If + present simple, will + verb", "If + past simple, would + verb", "If + past perfect, would have + past participle", "If + present simple, present simple"],
                            answerIndex: 1,
                            explain: "The Second Conditional uses: If + past simple (condition clause), would + verb (main clause)."
                        },
                        {
                            topic: "Second Conditional - example",
                            q: "Which sentence is an example of Second Conditional?",
                            options: ["If you heat ice, it melts", "If it rains tomorrow, I will stay home", "If I won the lottery, I would travel around the world", "If she comes, I will be happy"],
                            answerIndex: 2,
                            explain: "'If I won the lottery, I would travel' expresses an unreal/hypothetical situation that is unlikely to happen."
                        },
                        {
                            topic: "Subjunctive mood - were",
                            q: "What verb form must be used with 'I, he, she, it' in Second Conditional 'if' clauses?",
                            options: ["Was", "Were", "Is", "Are"],
                            answerIndex: 1,
                            explain: "In Second Conditional, when the verb in the if clause is 'to be', you must use 'were' instead of 'was' for I, he, she, it (subjunctive mood). Example: If I were you..."
                        },
                        {
                            topic: "Could in Second Conditional",
                            q: "How can 'could' be used in the Second Conditional main clause?",
                            options: ["To express ability", "To express permission", "To express a possible result in unlikely circumstances", "To express certainty"],
                            answerIndex: 2,
                            explain: "'Could' can be used in the main clause of Second Conditional instead of 'would' to give a possible result on unlikely circumstances. Example: If she got a better job, she could buy a larger house."
                        },
                        {
                            topic: "Might in Second Conditional",
                            q: "What does 'might' express in Second Conditional main clause?",
                            options: ["Strong certainty", "A possible but less certain result", "Obligation", "Advice"],
                            answerIndex: 1,
                            explain: "'Might' in Second Conditional expresses a possible but less certain result. Example: Might she get a scholarship if she spoke French?"
                        },
                        {
                            topic: "First vs Second Conditional",
                            q: "What is the main difference between First and Second Conditional?",
                            options: ["First = real possibility; Second = unreal/unlikely possibility", "First = past; Second = present", "First = present; Second = past", "No difference"],
                            answerIndex: 0,
                            explain: "First Conditional describes something that is really likely to happen. Second Conditional describes something that is possible but unlikely to happen (hypothetical)."
                        },
                        {
                            topic: "Second Conditional - dream scenario",
                            q: "Which sentence expresses a dream or wish?",
                            options: ["If you study, you will pass", "If I were rich, I would travel around the world", "If you heat water, it boils", "If she comes, I will be happy"],
                            answerIndex: 1,
                            explain: "Second Conditional is used to talk about dreams, wishes, and imaginary situations that are unlikely or impossible."
                        },
                        {
                            topic: "Second Conditional - main clause first",
                            q: "Is a comma needed when the main clause comes first in Second Conditional?",
                            options: ["Yes, always", "No, never", "Only with 'were'", "Only with 'could'"],
                            answerIndex: 1,
                            explain: "When the main clause comes first, no comma is needed. Example: You wouldn't be so tired if you went to bed earlier."
                        },
                        {
                            topic: "Second Conditional - contrary to fact",
                            q: "What fact does 'If it rained today, I would take my umbrella' imply about the current weather?",
                            options: ["It is raining", "It is likely to rain", "It is sunny or only cloudy a little (not raining)", "It is snowing"],
                            answerIndex: 2,
                            explain: "In Second Conditional, the condition is contrary to present fact. 'If it rained today' implies that it is NOT raining now (it is sunny or only slightly cloudy)."
                        }
                    ]
                }
            }
        }
    }
};

export default inglesIV;