const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const path = require('path');
const fs = require('fs');
var nodemailer=require('nodemailer');
require('dotenv').config();

const app = express(); 

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var jsonissue = fs.readFile("issueData.json");
// var myObject1 = JSON.parse(jsonissue);

// var jsonenq = fs.readFile("enquiryData.json");
// var myObject2 = JSON.parse(jsonenq);

// SEND ISSUE TICKET

app.post('/send_issue_ticket',cors(), (req,res) => {
    let data = req.body;
    console.log(data);
    res.send(data);

    // myObject1.push(data);
    
    // fs.writeFile("issueData.json", JSON.stringify(myObject1), (err) => {
    // if (err) 
    // console.log(err);
    // else
    // console.log("New data added");
    // });


    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    });

            transporter.verify((err, success) => {
                if (err) console.error(err);
                console.log('Your config is correct');
            });
            

    var mailOptions={
       from:'riyapatidar111@gmail.com',
       to: data.email.toString(), 
     
       subject:'Here is your issue ticket',
        html:`
            <h3>Your Ticket is generated.Ticket id is ${data.ticketId} .Our team will reach you back.</h3>
            <h4>Response we got from you:</h4>
            <ul>
                <li>${data.quesarray[0]} : ${data.array[0]}</li>
                <li>${data.quesarray[1]} : ${data.array[1]}</li>
                <li>${data.quesarray[2]} : ${data.array[2]}</li>
            </ul>
            `
    };
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
            console.log('WE ARE HERE');
        }
        else
        console.log('Email sent:'+ info.response);
    });
});

// SEND ENQUIRY TICKET

app.post('/send_enquiry_ticket',cors(), (req,res) => {
    let data = req.body;
    console.log(data);
    res.send(data);
    
    // myObject2.push(data);
    
    // fs.writeFile("enquiryData.json", JSON.stringify(myObject2), (err) => {
    //     if (err) 
    //     console.log(err);
    //     else
    //     console.log("New data added");
    // });

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    });

    var mailOptions={
       from:'riyapatidar111@gmail.com',
       to: data.email.toString(), 
    
       subject:'Here is your enquiry ticket',
        html:`
            <h3>Your Ticket is generated.Ticket id is ${data.ticketId}.Our team will reach you back.</h3>
            <h4>Response we got from you:</h4>
            <ul>
                <li>Product Id : ${data.prid}</li>
                <li>Product Query : ${data.prquery}</li>
            </ul>
            `
    };
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
            console.log('WE ARE HERE');
        }
        else
        console.log('Email sent:'+ info.response);
    });
});

app.get('/', (req, res) => {
    res.send('hi');
});


const port = process.env.PORT || 5000 || 51184;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV == "production")
{
    app.use("client/build");
    const path = require("path");
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server started on port ${port}`))




// app.use(express.static(path.join(__dirname ,'vmbot/public')));

// app.use(express.static('public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'vmbot', 'public', 'index.html'));
// });

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "..", "build", "index.html"));
//   });




 // var transporter =nodemailer.createTransport({
    //             host:process.env.MAIL_HOST,
    //             port:process.env.MAIL_PORT,
    //             secure: true,
    //             auth:{
    //                 api_key:process.env.API_TOKEN,
    //                 user:process.env.MAIL_USER,
    //                 pass:process.env.MAIL_PASS
    //             },
    //             ignoreTLS: true
    //         });