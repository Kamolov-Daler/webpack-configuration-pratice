import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listener = () => counter++;

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

window.analytics = createAnalytics()