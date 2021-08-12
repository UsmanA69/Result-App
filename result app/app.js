function result() {
    var students = {
        usman: {
            Maths: 95,
            Physics: 80,
            Computer: 50,
        },
        ali: {
            Maths: 56,
            Physics: 24,
            Computer: 78,
        },
        imran: {
            Maths: 68,
            Physics: 87,
            Computer: 98,
        },
        aleem: {
            Maths: 68,
            Physics: 97,
            Copmuter: 67,
        },
        awais: {
            Maths: 77,
            Physics: 96,
            Computer: 58,
        }
    }
    var studentname = document.getElementById('studentname').value;
    var input = studentname.toLowerCase();
    var defination = students[input];
    var output = document.getElementById('output');
    if (defination == undefined) {
        output.innerHTML = `<hr> There is no information about this student! </hr>`;
    } else {
        output.innerHTML = `<hr> Maths score is ${defination.Maths}. <hr> Physics score is ${defination.Physics}. <hr> Computer score is ${defination.Computer} <hr>`
    }
}
