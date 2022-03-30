input.onButtonPressed(Button.A, function () {
    if (Mode == 0) {
        Coin_1 = randint(0, 1)
        if (Coin_1 == 1) {
            basic.showString("h1")
        } else if (Coin_1 == 0) {
            basic.showString("t1")
        }
    } else {
        Coin_2 = randint(0, 1)
        if (Coin_2 == 1 && Coin_1 == 1) {
            basic.showString("h2")
            basic.showString("P1Wins")
            P1_WinsPoints += 1
        }
        if (Coin_2 == 0 && Coin_1 == 0) {
            basic.showString("t2")
            basic.showString("P1Wins")
            P1_WinsPoints += 1
        } else if (Coin_2 == 1 && Coin_1 != 1) {
            basic.showString("h1")
            basic.showString("P2Wins")
            P2_WinsPoints += 1
        } else if (Coin_2 == 1 && Coin_1 != 1) {
            basic.showString("t1")
            basic.showString("P2Wins")
            P2_WinsPoints += 1
        }
    }
    Mode = 1
})
input.onButtonPressed(Button.AB, function () {
    Coin_1 = 0
    Coin_2 = 0
    Mode = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(P1_WinsPoints)
    basic.showNumber(P2_WinsPoints)
})
let Mode = 0
let Coin_2 = 0
let Coin_1 = 0
let P2_WinsPoints = 0
let P1_WinsPoints = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    . # # # .
    `)
P1_WinsPoints = 0
P2_WinsPoints = 0
Coin_1 = 0
Coin_2 = 0
Mode = 0
