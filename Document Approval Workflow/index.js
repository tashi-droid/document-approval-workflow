
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startWorkFlow(){
    console.log("Document Approval Workflow Started");

    rl.question("Submit document? (yes/no): ", (submit)=>{
        if (submit.toLowerCase() != 'yes') {
            console.log("Workflow cancelled");
            rl.close();
        } else {
            console.log("Document sent to Manager");

            rl.question("Manager approves? (yes/no): ", (approval) => {
                if (approval.toLowerCase() == 'yes') {
                    console.log("Document published");
                    rl.close();
                } else {
                    console.log("Document needs revision");
                }
            });
        }
    });
}

 startWorkFlow();