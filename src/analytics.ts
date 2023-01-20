import * as $ from 'jquery'

function createAnalytics(): object {
    let counter: number = 0;
    let destroyed: boolean = false;

    const listener = ():number => counter++;

    $(document).on('click', listener)


    return {
        destroy () {
            $(document).of('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Counter = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()