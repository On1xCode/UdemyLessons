window.addEventListener('DOMContentLoaded', function () {
    // Tabs
    let tabsWrapper = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabs(a = 0) {
        for (let i = a; i < tab.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }
    hideTabs(1);

    function showTabs(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabsWrapper.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabs();
                    showTabs(i);
                }
            }
        }
    });
    // Timer


    let deadline = '2019-08-05';
    // new Date = милисекунды просшедшие с 1 января 1970 года
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 60),
            days = Math.floor((t / 1000 / 60 / 60 / 24));
        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };
    }

    function setTimer(parentId, endtime) {
        let timer = document.getElementById(parentId),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.total > 0) {
                function addZero(number) {
                    if (number <= 9) {
                        return '0' + number;
                    } else {
                        return number;
                    }
                }

                days.textContent = addZero(t.days);
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
            } else {
                clearInterval(timeInterval);
                console.log('00');
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }
    setTimer('timer', deadline);
});