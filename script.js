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
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                openToolKit: false,
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
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                openToolKit: false,
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                openToolKit: false,
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
                status: 'received',
                openToolKit: false,
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                openToolKit: false,
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
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                openToolKit: false,
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
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                openToolKit: false,
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
                message: 'Ciao Claudia, hai novit???',
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                openToolKit: false,
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
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                openToolKit: false,
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
                status: 'received',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                openToolKit: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                openToolKit: false,
            }
        ],
    }
];



let screenLog = document.querySelector('#message-box');
let elemIndex = 0;
const app = new Vue({
    el: '#app',
    data: {
        contacts,
        elemIndex,
        selectedContact: undefined,
        selectedChat: undefined,
        string: '',
        filterString: '',

        actualDate,




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


        //Function to Write the msg in the Chat
        addMessage(string) {
            const toAdd = {
                date: actualDate(),
                message: string,
                status: 'sent',
                openToolKit: false,
            }
            this.selectedChat.push(toAdd);
            setTimeout(this.answear, 2000);
            this.string = '';
        },

        filter: function (filterString) {
            const stringLow = filterString.toLowerCase();
            if (filterString === '') {
                contacts.forEach(element => {
                    element.visible = true;
                });
            } else {
                contacts.forEach(element => {
                    const nameLow = element.name.toLowerCase();
                    if (!nameLow.includes(stringLow)) {
                        element.visible = false;
                    } else {
                        element.visible = true;
                    }

                });
            }
            filterString = this.filterString;
        },

        //Answear Function
        answear: function () {
            const toAdd = {
                date: actualDate(),
                message: 'ok',
                status: 'received',
                openToolKit: false,
            }
            this.selectedChat.push(toAdd);
        },

        deleteMessage: function (a) {
            this.selectedChat[a].message = '"Questo messagio ?? stato elimnato"';
            this.selectedChat[a].openToolKit = false;
        }






    },






});

function actualDate() {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    return dateTime;
}








