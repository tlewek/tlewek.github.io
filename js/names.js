const names = [
  {
    ticketNumber: "76249564A0550",
    firstName: "Ben",
    lastName: "Katz",
    email: "bkinlic@gmail.com",
    phone: null,
    ticketType: "Raffle Ticket/Boleto de Rifa: $100 Gift Certificate to Major League Baseball Shop / Certificado de regalo de $100 para la tienda de MLB"
  },
  {
    ticketNumber: "78986927A0545",
    firstName: "Jaron",
    lastName: "Yu",
    email: "jaron7778@yahoo.com",
    phone: "+13476819981",
    ticketType: "Raffle Ticket/Boleto de Rifa: $100 Gift Certificate to Major League Baseball Shop / Certificado de regalo de $100 para la tienda de MLB"
  }
];

const randomName = names[Math.floor(Math.random() * names.length)];

const message = `Congratulations, ${randomName.firstName} ${randomName.lastName} (ticket # ${randomName.ticketNumber})! You won ${randomName.ticketType}.`;

console.log(message);