basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);


//% color = #008000 
namespace test{
    //% blockId = printname 
    //% block="Enter your name %test_"
    export function sayhello(test_: string) {
        basic.showString(test_)
    }
    //% blockId=printxyz weight 60 blockGap = 30
    //% block = "led at pin %p | digital write %v"
    //% v.min = 0 v.max = 1 x.defl = 0
    export function test1(p: DigitalPin, v: number) {
        pins.digitalWritePin(p, v)
    }       
}
