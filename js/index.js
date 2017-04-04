var n = Number(prompt('Введи потрібний номер члена Фібоначчі'));
var sequenceFibonacci = [1, 1];
if (n <= 0) {
    document.write('Введіть число більше нуля <br>');
} else if (n === 1) {
    document.write('Послідовність Фібоначчі ' + sequenceFibonacci[0]);
    document.write('<br>');
    document.write(n + ' член послідовності Фібоначчі = ' + sequenceFibonacci[0]);
} else if (n === 2) {
    document.write('Послідовність Фібоначчі ' + sequenceFibonacci);
    document.write('<br>');
    document.write(n + ' член послідовності Фібоначчі = ' + sequenceFibonacci[1]);
} else {
    for (var i = 3; i <= n; i++) {
        var nFib = sequenceFibonacci.length - 1;
        var Fib = nFib - 1;
        var lastNumber = sequenceFibonacci[nFib] + sequenceFibonacci[Fib];
        sequenceFibonacci.push(lastNumber);
    }
}
if (n > 2) {
    document.write('Послідовність Фібоначчі ' + sequenceFibonacci);
    document.write('<br>');
    document.write(n + ' член послідовності Фібоначчі = ' + lastNumber);
}
