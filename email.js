let appData = {
  name: "Gmail",
  mailboxes: [
    "Inbox",
    "Starred",
    "Snoozed",
    "Sent",
    {
      box: "Drafts",
      emails: [
        {
          address: "",
          title: "",
          body: "",
          sent: false,
          read: false
        }
      ]
    },
    "Important",
    "Chats",
    "Scheduled",
    "All Mail",
    "Spam",
    "Trash"
  ],
  categories: ["Social", "Updates", "Forums", "Promotions"],
  user: {
    usersname: "Palmer Sola",
    address: "palmersola@gmail.com"
  },
  contacts: [
    "mike67@gmail.com",
    "rachelcrazy@hotmail.com",
    "ayyyyeImMasterYoda@yahoo.com"
  ],
  emails: [
    {
      address: "mike67@gmail.com",
      title: "I need Eggs",
      body: "Hey buddy I ran out of eggs. Plz leave some on my front step.",
      sent: false,
      read: false
    },
    {
      address: "rachelcrazy@hotmail.com",
      title: "Whoops! All F's",
      body:
        "I regret to inform you that you have failed this program. Enjpy working at Burger King.",
      sent: false,
      read: false
    },
    {
      address: "ayyyyeImMasterYoda@yahoo.com",
      title: "Urgent News",
      body: "Ayyyeee whats goin on. Master Yoda, am I",
      sent: false,
      read: false
    }
  ]
};

console.log(appData.mailboxes);

console.log(appData.emails);

console.log(appData.emails[1].body);

appData.emails[0].sent = true;

console.log(appData.emails[0].sent);

appData.mailboxes[4].emails[0].address = "test@yahoo.com";
appData.mailboxes[4].emails[0].title = "Test Test Test";
appData.mailboxes[4].emails[0].body = "This is a test email.";
console.log(appData.mailboxes[4].emails);
