export interface StepGame { //visar sidID, fråga och val
    id: number,
    question: string
    choises: {
        leftBtn: btnData | null 
        rightBtn: btnData | null 
    }
}

interface btnData { //visar valet och styr vilken sida man kommer till
    answer: string
    path: number
}

