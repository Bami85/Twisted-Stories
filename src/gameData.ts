import { StepGame } from "./types"


export let gameLivell: StepGame[] = [//skapar array av objekt från interface
    {
        id: 1,
        question: 'Sista minuten resor',
        choises: {
            leftBtn: { answer: "Boka sista minuten till sol och värme", path: 3}, 
            rightBtn: { answer: "Stanna hemma", path: 2}
        }
    }, 
    {
        id: 2,
        question: 'Du har två väl...',
        choises: {
            leftBtn: { answer: "Ta disken efter att du har lagat mätt", path: 2}, 
            rightBtn: { answer: "Passa till nästa fråga...", path: 3}
        }
    }, 
    {
        id: 3,
        question: 'Du har två alternativer att välja på....',
        choises: {
            leftBtn: { answer: "Åka till Ibiza och dricka mycket sprit", path: 4}, 
            rightBtn: { answer: "Koda med Victor..", path: 5},
        }
    },
    {
        id: 4,
        question: 'Egentligen du är frame i Ibiza, och solen skiner, vad ska du göra?',
        choises: {
            leftBtn: { answer: 'Börja ladda upp bilder på Instagram och sckickar till dina vänner', path: 6}, 
            rightBtn: { answer: 'Sitta och jobba med Checkout-React....', path: 5}
        }
    },
    {
        id: 5,
        question: 'Är du dum i huvet, du kunde välja den andra alternativet...välj igen',
        choises: {
            leftBtn: { answer: 'Börja ladda upp bilder på Instagram och skickar till dina vänner', path: 6}, 
            rightBtn: {answer:'Åka till Ibiza och dricka mycket sprit', path:6},
        }
    },
    {
        id: 6,
        question: 'Plötsligt fick du en påminnelse som säger att kompleterings deadlinen är om 2 dagar, vad ska du göra?',
        choises: {
            leftBtn: { answer: 'Ta en Mojito först kanske det hjälper med koden..', path: 7}, 
            rightBtn: { answer:'Åka hem och koda tills klockan 03.00 på morgonen..',path: 5},
        }
    },
    {
        id: 7,
        question: 'I mitten av augusti egentligen är du klar med kompletering',
        choises: {
            leftBtn: { answer: 'Du får nu egentligen njuta din semester..', path: 8}, 
            rightBtn: { answer: 'Borja ta kontakt med Lia företaget', path: 1}, 
        }
    },
    {
        id: 8,
        question: 'Skojar bara, du måste vara i skolan i augusti',
        choises: {
            leftBtn:{answer:'Last minut offerts', path:1},
            rightBtn:{ answer: 'Äka till skolan', path:1},
        }
    },

]

