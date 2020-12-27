'use strict'
const l = 80;
module.exports = function JustifyText() {
    return (text,token) => {
        return justify(text, l)
    }
}

function justify(text, l) {
    const paraph = text.split('\r\n')
    let lines = [];
    let line = [];
    if (paraph.length === 0) paraph = text.split('\n')

    for (var i = 0; i < paraph.length; i++) {
        paraph[i] = paraph[i].split(' ')
    }

    for (var j = 0; j < paraph.length; j++) {
        for (var k = 0; k < paraph[j].length; k++) {
            line.push(paraph[j][k])
            if (line.join(' ').length > l) {
                line.pop();
                line = appendSpaces(line, l)
                lines.push(line.join(' ') + '\r\n')
                line = []
                line.push(paraph[j][k])
            }
            else {
                if (k == paraph[j].length - 1) {
                    lines.push(line.join(' ') + '\r\n')
                    line = []
                }
            }
        }
    }
    text = ""
    lines.forEach(line => text += line)
    return text;
}

function appendSpaces(line, l) {
    const diff = l - line.join(' ').length
    let i = 0
    while (true) {
        if (line.join(' ').length == l)
            return line;
        else {
            line[i] += ' ';
            i++
            if (i == line.length - 1)
                i = 0;
        }

    }
}
