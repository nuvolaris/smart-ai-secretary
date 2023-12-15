nuv invoke waitlist/createThread | tee out.json
ID=$(cat out.json | jq .body.id -r)
nuv invoke waitlist/sendMessage -p threadId "$ID" -p message "what is is mastroGPT"
nuv invoke waitlist/listMessages -p threadId "$ID"