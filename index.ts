import inquirer from "inquirer";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string; 
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1:Write the command which is used to add tsconfig.json file?",
        choices: ["tsc--init","tsc","tsc --init"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2:Write the command which is used to add package.json file?",
        choices: ["npm","npm -y","npm init -y"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:Write the command which is used to add node_module?",
        choices: ["npm i @types/inquirer","npm i --save-dev @types/inquirer","npm init"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:Which operator is commonly used for string concentration in typescript?",
        choices: ["+","*","/","-"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:In typescript,which symbol is commonly used to terminate a statement?",
        choices: [";",".",",",":"],
    }
]);

let score: number = 0;


switch(quiz.question_1){
    case "tsc --init":
    console.log("1. correct");
    ++score;
    break;
    default:
        console.log("1. incorrect!");
}

switch(quiz.question_2){
    case "npm init -y":
    console.log("2. correct");
    ++score;
    break;
    default:
        console.log("2. incorrect!");
}

switch(quiz.question_3){
    case "npm i --save-dev @types/inquirer":
    console.log("3. correct");
    ++score;
    break;
    default:
        console.log("3. incorrect!");
}

switch(quiz.question_4){
    case "+":
    console.log("4. correct");
    ++score;
    break;
    default:
        console.log("4. incorrect!");
}

switch(quiz.question_5){
    case ";":
    console.log("5. correct");
    ++score;
    break;
    default:
        console.log("5. incorrect!");
}

console.log(`Score:${score}`);



























