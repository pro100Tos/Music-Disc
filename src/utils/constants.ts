/**
 * Constants variables
 */
export const cst = {
    // Default config
    config: {
        admin               : null,         // It must be the user ID (string)
        name                : 'Music Disc',
        prefix              : '+',
        status              : 'online',     // 'online' | 'idle' | 'dnd'
        playing             : '+help | music',
        embedsColor         : '#FFFFFF',
        defaultVolume       : 50,
        maxVolume           : 100,
        autoLeave           : true,
        autoLeaveCooldown   : 5000,
        displayVoiceState   : true,
        loadAPI             : true,
        port                : 33333,
        blacklist           : []            // It must be the user ID (string[])
    },
    // Console color
    color: {
        white   : '\x1B[0m',
        grey    : '\x1B[2m',
        green   : '\x1B[32m',
        cyan    : '\x1B[36m',
        red     : '\x1B[31m'
    },
    // Dashboard button icon
    button: {
        play        : '<:w_play:1106270709644271656>',
        pause       : '<:w_pause:1106270708243386428>',
        skip        : '<:w_skip:1106270714664849448>',
        back        : '<:w_back:1106270704049061928>',
        stop        : '<:w_stop:1106272001909346386>',
        loop        : '<:w_loop:1106270705575792681>',
        shuffle     : '<:w_shuffle:1106270712542531624>',
        prev        : '<:w_prev:1153665768093921280>',
        next        : '<:w_next:1153665809990815874>',
        delete      : 'Delete',
        clear       : 'Clear Queue'
    }
};