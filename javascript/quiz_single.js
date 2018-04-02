$( document ).ready(function() {
    $("#test").replaceWith("");
    $("#test").append("<h3>Choose the statement that best fits what you find to be the most meaningful in a relationship. If both or neither seem to fit you, then choose the one you that is most meaningful to you the majority of the time</h3>");
    $("#test").append("<h3>Allow 10 - 15 minutes to complete the quiz. Take your time and give each question careful thought for the best results</h3>");
    $("#test").append("<a class='myButton' onclick='quiz.startQuiz()'>Click Here to Begin</a>");
});

var quiz = {
    pos: 0,
    lng_A: 0, lng_B: 0, lng_C: 0, lng_D: 0, lng_E: 0,
    questions: [
        ["someone I love sends me a loving note/text/email for no special reason", "I hug someone I love",
            "A", "E"],
        ["I can spend alone time with someone I love - just us","someone I love does something practical to help me out",
            "B", "D"],
        ["someone I love gives me a little gift as a token of our love of concern for each other", "I get to spend uninterrupted lesisure time with those I love",
            "C", "B"],
        ["someone I love does something unexpected for me to help me with a project", "I can share an innocent touch with someone I love",
            "D", "E"],
        ["someone I love puts their arm around me in public", "someone I love surprises me with a gift",
            "E", "C"],
        ["I'm around someone I love, even if we're not really doing anything", "I can be comfortable holding hands, high-fiving, or putting my arm around someone I love",
            "B", "E"],
        ["I receive a gift from someone I love", "I hear from someone I love that they love me",
            "C", "A"],
        ["I sit close to someone I love", "I am complimented by someone I love for no apparent reason",
                "E", "A"],
        ["I get the chance to just \"hang out\" with someone I love", "I unexpectedly get small gifts from someone I love",
            "B", "C"],
        ["I hear someone I love tell me, \"I'm proud of you\"", "someone I love helps me with a task",
            "A", "D"],
        ["I get to do things with someone I love", "I hear supportive words from someone I love",
            "B", "A"],
        ["someone I love does things for me instead of just talking about doing nice things", "I feel connected to someone I love through a hug",
            "D", "E"],
        ["I hear praise from someone I love", "someone I love gives me something that shows they were really thinking about me",
            "A", "C"],
        ["I'm able to just be around someone I love", "I get a back rub from someone I love",
            "B", "E"],
        ["someone I love reacts positively to something I've accomplished", "someone I love does something for me that I know they don't particularly enjoy",
            "A", "D"],
        ["I'm able to be in close physical proximity to someone I love", "I sense someone I love showing interest in the things I care about",
            "E", "B"],
        ["someone I love works on special projects with me that I have to complete", "someone I love gives me an exciting gift",
            "D", "C"],
        ["I'm complimented by someone I love on my appearance", "someone I love takes the time to listen to me and really understands my feelings",
            "A", "B"],
        ["I can share a meaningful touch in public with someone I love", "someone I love offers to run errands for me",
            "E", "D"],
        ["someone I love does something special for me to help me out", "I get a gift that someone I love put thought into choosing",
            "D", "C"],
        ["someone I love doesn't check their phone while we're talking with each other", "someone I love goes out of their way to do something that relieves pressure on me",
            "B", "D"],
        ["I can look forward to a holiday because I'll probably get a gift from someone I love", "I hear the words, \"I appreciate you\" from someone I love",
            "C", "A"],
        ["someone I love and haven't seen in a while thinks enough of me to give me a little gift", "someone I love takes care of something I'm responsible to do that I feel too stressed to do at the time",
            "C", "D"],
        ["someone I love doesn't interrupt me while I'm talking", "gift giving is an important part of the relationship with someone I love",
            "B", "C"],
        ["someone I love helps me out when they know I'm already tired", "I get to go somewhere while spending time with someone I love",
            "D", "B"],
        ["someone I love touches my arm or shoulder to show their care or concern", "someone I love gives me a little gift that they picked up in the course of their normal day",
            "E", "C"],
        ["someone I love says something encouraging to me", "I get to spend time in a shared activity or hobby with someone I love",
            "A", "B"],
        ["someone I love surprises me with a small token of their appreciation", "I'm touching someone I love frequently to express our friendship",
            "C", "E"],
        ["someone I love helps me out - especially if I know they're already busy", "I hear someone I love tell me that they appreciate me",
            "D", "A"],
        ["I get a hug from someone whom I haven't seen in a while", "I hear someone I love tell me how much I mean to them",
            "E", "A"],
    ],

    startQuiz: function() {
        $("#test").replaceWith("<div id='test'><i>It's more meaningful to me when</i> <form id='questions'></form> <a class='myButton' id='next' onclick='quiz.nextQuestion()'>Next Question</a><div id='error'></div></div>");
        $("#test").css("text-align", "left");
        $("#error").css({
            "text-align":"left",
            "font-weight":"bold",
            "margin": "1em"
        });

        this.renderQuestion();
    },

    renderQuestion: function() {
        var choice1 = this.questions[this.pos][0];
        var choice2 = this.questions[this.pos][1];
        var value1 = this.questions[this.pos][2];
        var value2 = this.questions[this.pos][3];
        var length = this.questions.length;

        $('#test-status').text("Question " + (this.pos + 1) + " of " + length);
        $('#error').text("");

        $('#questions').replaceWith("<form id='questions'><input type='radio' name='choices' value='" + value1 +"' id='c1'/> <label for='c1'><span><span></span></span>" + choice1 +
            "</label><br> <input type = 'radio' name = 'choices' value='" + value2 + "' id='c2'/> <label for='c2'><span><span></span></span>" + choice2 + "</label><br></form>");

        if(this.pos == length - 1) {
            $('#next').text("Finish");
        }

    },

    nextQuestion: function() {
        var answer = $('input[name=choices]:checked', "#questions").val();

        switch(answer) {
            case 'A':
                this.lng_A++;
                break;
            case 'B':
                this.lng_B++;
                break;
            case 'C':
                this.lng_C++;
                break;
            case 'D':
                this.lng_D++;
                break;
            case 'E':
                this.lng_E++;
                break;
            default:
                $('#error').text("Please select an answer");
                return;
        }

        if(this.pos != this.questions.length - 1) {
            this.pos++;
            this.renderQuestion();
        } else {
            this.finishQuiz();
        }
    },

    finishQuiz: function() {
        var counter = 0;
        var results = [
            {name:"Words of Affirmation", value: this.lng_A, description:
                "Actions don’t always speak louder than words. If this is your love language, unsolicited compliments mean the world to you. Hearing the words, \“I love you,\” are important—hearing the reasons behind that love sends your spirits skyward. Insults can leave you shattered and are not easily forgotten."},
            {name:"Quality Time", value: this.lng_B, description:
                "In the vernacular of Quality Time, nothing says, \“I love you,\” like full, undivided attention. Being there for this type of person is critical, but really being there—with the TV off, fork and knife down, and all chores and tasks on standby—makes your significant other feel truly special and loved. Distractions, postponed dates, or the failure to listen can be especially hurtful."},
            {name:"Receiving Gifts", value: this.lng_C, description:
                "Don’t mistake this love language for materialism; the receiver of gifts thrives on the love, thoughtfulness, and effort behind the gift. If you speak this language, the perfect gift or gesture shows that you are known, you are cared for, and you are prized above whatever was sacrificed to bring the gift to you. A missed birthday, anniversary, or a hasty, thoughtless gift would be disastrous—so would the absence of everyday gestures."},
            {name:"Acts of Service", value: this.lng_D, description:
                "Can vacuuming the floors really be an expression of love? Absolutely! Anything you do to ease the burden of responsibilities weighing on an \“Acts of Service\” person will speak volumes. The words he or she most wants to hear: \“Let me do that for you.\” Laziness, broken commitments, and making more work for them tell speakers of this language their feelings don’t matter."},
            {name:"Physical Touch", value: this.lng_E, description:
                "This language isn’t all about the bedroom. A person whose primary language is Physical Touch is, not surprisingly, very touchy. Hugs, pats on the back, holding hands, and thoughtful touches on the arm, shoulder, or face—they can all be ways to show excitement, concern, care, and love. Physical presence and accessibility are crucial, while neglect or abuse can be unforgivable and destructive."}
        ];

        results.sort(function(a, b) {
            return b.value - a.value;
        });

        $('#test-status').text("Your love language is: " + results[0].name);

        $("#test").replaceWith("<div id='test-results'></div>");

        for(counter = 0; counter < results.length; counter++) {
            $("#test-results").append("<h2>" + (counter + 1) + ") " + results[counter].name +
                " " + results[counter].value + "</h2><br><h3>" + results[counter].description + "</h3><br>");
        }
    }

}
