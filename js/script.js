const questions = [
    {
        'Qns': 'Which the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'currect': 'a'
    },
    {
        'Qns': 'Which  the following is a style language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'currect': 'b'
    },
    {
        'Qns': 'Who invented JavaScript?',
        'a': 'Douglas Crockford',
        'b': "Sheryl Sandberg",
        'c': "Brendan Eich",
        'd': 'fuddu',
        'currect': 'c'
    },
    {
        'Qns': 'Which one of these is a JavaScript package manager?',
        'a': 'Node.js',
        'b': 'TypeScript',
        'c': 'npm',
        'd': 'mangoDB',
        'currect': 'c'
    },
    {
        'Qns': 'Which tool can you use to ensure code quality?',
        'a': "Angular",
        'b': "jQuery",
        'c': "RequireJS",
        'd': "ESLint",
        'currect': 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const qnsBox = document.getElementById('qnsBox');
const optionInp = document.querySelectorAll('.Option')

const loadQuestion = () => {
    if(index === total) {
        return endQuiz();
    }
    reset()

    const data = questions[index];
    qnsBox.innerText = `${index + 1}) ${data.Qns}`;
    optionInp[0].nextElementSibling.innerText = data.a;
    optionInp[1].nextElementSibling.innerText = data.b;
    optionInp[2].nextElementSibling.innerText = data.c;
    optionInp[3].nextElementSibling.innerText = data.d;
}



const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.currect) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInp.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInp.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing the Quiz </h3>
    <h2> ${right} / ${total} are Correct! </h2>
    `
}

loadQuestion();