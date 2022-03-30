console.log('js ok');


let contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
];




let elemIndex = 0;
const app = new Vue({
    el: '#app',
    data: {
        contacts,
        elemIndex,
        selectedContact: contacts[elemIndex],
        selectedChat: contacts[elemIndex].messages,
        string: '',

        actualDate,
        answear,

    },
    methods: {

        //function for the contact selection
        select: function (contact) {
            this.selectedContact = contact;
            this.selectedChat = contact.messages;

        },
        //Function for PROFILE PICTURE
        profile: function (contact) {
            return string = `img-bolzapp/avatar${contact.avatar}.jpg`
        },

        //Show last message of a contact
        lastMessage: function (contact) {
            let lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage.message;
        },

        //show the time of the last message
        lastMessageTime: function (contact) {
            let lastMessage = contact.messages[contact.messages.length - 1];
            let time = lastMessage.date.split(" ");
            let fixTime = time[1].split(":");
            return `${fixTime[0]}:${fixTime[1]}`;
        },

        //show the time of the message
        messageTime: function (message) {
            let time = message.date.split(" ");
            let hour = time[1].split(':');
            return `${hour[0]}:${hour[1]}`;


        },
        //show the last date of the message - Used for the last access!
        lastDate: function (contact) {
            let lastMessage = contact.messages[contact.messages.length - 1];
            let time = lastMessage.date.split(" ");
            return time[0];

        },

        //Function for the class Selected
        selected: function (contactIndex) {
            if (contactIndex === this.contacts.indexOf(this.selectedContact)) {
                return 'selected';
            }

        },


        //
        addMessage(string) {
            const toAdd = {
                date: actualDate(),
                message: string,
                status: 'sent',
            }
            this.selectedChat.push(toAdd);
            setTimeout(answear, 2000);
            this.string = '';
        },



    },






});

function actualDate() {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    return dateTime;
}


function answear() {
    const toAdd = {
        date: actualDate(),
        message: 'ok',
        status: 'received',
    }
    app.selectedChat.push(toAdd);
};

