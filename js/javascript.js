$(function(){
    $('button').on('click', function(){

        //디데이 계산
        let inputDate = $('#inputDate').val();
        
        if(inputDate == ''){
            alert('날짜를 선택해주세요');
            return false;
        }

        inputDate = new Date(inputDate);
        const now = new Date();

        const toNow = now.getTime();
        const toFirst = inputDate.getTime();

        const passedTime = toNow - toFirst;
        const dDay = Math.round(passedTime/(60*60*24*1000));
        
        $('.dDay').css({color : '#ee85af'});
        $('.dDay').text(dDay);

        //기념일 날짜 계산
        const calcFn = function(day){
            let futureDate = toFirst + (day-1) * (60*60*24*1000);
            const dDayAfter = new Date(futureDate);

            const year = dDayAfter.getFullYear();
            const month = dDayAfter.getMonth()+1;
            const date = dDayAfter.getDate();

            $('.day'+day).text(year+ '년 ' +month+ '월 ' +date+ '일');
        };

        calcFn(100);
        calcFn(500);
        calcFn(1000);
        calcFn(2000);
        calcFn(3000);

    });
});