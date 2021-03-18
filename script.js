$('#showWinner').on('click', function () {
    let print_all_sum_rec = function (target, current_sum, start, result, output) {
        if (current_sum === target) {
            output.push(result.slice());
        }

        for (let i = start; i < target; i++) {
            let temp_sum = current_sum + i;
            if (temp_sum <= target) {
                result.push(i);
                print_all_sum_rec(target, temp_sum, i, result, output);
                result.pop();
            } else {
                return;
            }
        }
    };

    let print_all_sum = function (target) {
        let output = [];
        let result = [];
        print_all_sum_rec(target, 0, 1, result, output);
        return output;
    };

    let lineup1 = $('#lineup1').val().split(/\r?\n/);
    let lineup2 = $('#lineup2').val().split(/\r?\n/);
    let team1 = parseInt($('#team1').val());
    let team2 = parseInt($('#team2').val());
    console.log("Team 1:");
    lineup1.forEach(function (player, i = 1) {
        i++;
        console.log(`Player ${i}: ${player}`);
    });
    console.log("Team 2:");
    lineup2.forEach(function (player, i = 1) {
        i++;
        console.log(`Player ${i}: ${player}`);
    });
    console.log(team1);
    console.log(team2);
    if (isNaN(team1) || isNaN(team2)) {
        $('#error_msg').text('Please, enter number of goals scored by each team!').show();
    } else if (team1 + team2 > 7) {
        $('#error_msg').text('Sum of goals must be less than 7!').show();
    } else if (lineup1.length < 11 || lineup2.length < 11) {
        $('#error_msg').text('Each team must consist of minimum 11 players!').show();
    } else {
        $('#winner_header').text(`${team1 === team2 ? "Draw!" : team1 > team2 ? "Team 1 Winner!" : "Team 2 Winner"}`);
        $('#score').text(`${team1} : ${team2}`);
        $('#comb1').text(print_all_sum(team1));
        $('#comb2').text(print_all_sum(team2));
        $('#result').show();
    }
    let comb1 = print_all_sum(team1 + team2);
    console.log(comb1);
});