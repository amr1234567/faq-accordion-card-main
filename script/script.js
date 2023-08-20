let paragraphText = [
    `You can inviteup to 2 additional users on the Free plan. There is no limit onteam members for the Premium plan.`,
    `No more than 2GB. All files in your account must fit your allotted storage space.`,
    `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    `Yes! Send us a message and we’ll process your request noquestions asked.`,
    ` Chat and email support is available 24/7. Phone lines are open during normal business hours.`
];
let questions = document.querySelectorAll('.question');
let conts = document.querySelectorAll('.question-container p');
let arrows = document.querySelectorAll('.question-container img');

questions.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        if (ele.children[0].children[0].classList.contains('p-clicked')) {
            ele.children[0].children[0].classList.remove('p-clicked');
            ele.children[0].children[0].classList.add('p-not-clicked');
            arrows[index].classList.replace('rotate-arrow', 'back-normal');
            document.querySelector('.question>p').remove();
        } else {
            conts.forEach((element, ind) => {
                if (element.classList.contains('p-clicked')) {
                    element.classList.remove('p-clicked');
                    element.classList.add('p-not-clicked');
                    arrows[ind].classList.replace('rotate-arrow', 'back-normal');
                    document.querySelector('.question>p').remove();
                }
            });
            let newParagraph = document.createElement('p');
            let textOfparagraph = document.createTextNode(paragraphText[index]);
            newParagraph.appendChild(textOfparagraph);
            ele.appendChild(newParagraph);
            conts[index].classList.remove('p-not-clicked');
            conts[index].classList.add('p-clicked');
            arrows[index].classList.replace('back-normal', 'rotate-arrow');
        }
    });
});