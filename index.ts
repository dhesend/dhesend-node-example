import Dhesend from 'dhesend';

const dhesend = new Dhesend('dhe_fdd03c4eb1'); // Replace with your actual API key

(async function () {
    const { data, error } = await dhesend.emails.send({
        from: "Dhesend <example@domain.com>",
        to: ['example@dhesend.com'],
        subject: 'Welcome to Dhesend',
        htmlBody: '<strong>Have a nice day!</strong>',
    });

    if (error) {
        console.error('Failed to send email:', error);
    };

    console.log('Email sent successfully:', data);
})();
