const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`\nPing button clicked`);
};

const sendChatMessage = () => {
    logEvent('\nChat button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        //TODO - send message from client

        // logEvent(`\nON CLIENT - CHAT - SENT - with message : ${message}`)
    }else{
        // logEvent(`\nON CLIENT - CHAT - ERROR - Message is empty. Can't send.`)
    }
};

const sendFeedback = () =>{
    logEvent('\nSend feedback button clicked');
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date:  new Date(),
        user: clientIO.id,
        message: userInput
    }

    // TODO - send feedback from client

    // logEvent(`\nON CLIENT - FEEDBACK - SENT : ${JSON.stringify(feedback)}`);
};

const joinGroup = () => {
    logEvent('\nJoin group button clicked');
    
    // TODO - send group join request

    // logEvent(`\nON CLIENT - JOIN-GROUP - SENT - request sent.`)
};

const leaveGroup = () => {
    logEvent('\Leave group button clicked');

    // TODO - send group leave request

    // logEvent(`\nON CLIENT - LEAVE-GROUP - SENT - request sent.`)
};

const disconnectServer = () => {
    logEvent('\nDisconnect server button clicked');

    // TODO - send disconnect  request

    // logEvent(`\nON CLIENT - DISCONNECT - SENT - request sent.`)
};