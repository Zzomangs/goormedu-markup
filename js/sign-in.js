const email_ip = document.querySelector('.email-ip');
const pwd_ip = document.querySelector('.pwd-ip');
const login_btn = document.querySelector('.login-btn');

// 안먹히는 이유
login_btn.onkeypress = () => {
    if (window.event.keyCode == 13) {
        window.event.preventDefault();

        loginCheck();
    }
}

login_btn.onclick = () => {
    loginCheck();
}

function loginCheck() {
    // 이메일이 입력되지 않았을 때
    if (email_ip.value.length == 0) {
        alert('이메일을 입력해주세요');
        email_ip.focus();

        // 이메일이 입력이 되었을 때 (이메일 정규식 실행)
    } else if (email_ip.value.length != 0) {
        let emailCheckFlag = emailCheck(email_ip.value);
        if (emailCheckFlag == false) {
            alert('잘못된 이메일 형식입니다.');
            email_ip.focus();
        } else {
            pwd_ip.focus();
            // 비밀번호에 값이 없을 때
            if (pwd_ip.value.length == 0) {
                alert('비밀번호를 입력해주세요');

            } else if (pwd_ip.value.length != 0) {
                let passwordFlag = passwordCheck(email_ip.value);
                if (passwordFlag == true) {
                    const sign_in_form = document.querySelector('.sign-in-form');
                    sign_in_form.submit();
                }
            }
        }
    }

}

//이메일 정규식 체크
function emailCheck(email_ip) {
    var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (check_email.test(email_ip)) {
        return true;
    } else {
        return false;
    }
}

// 비밀번호 정규식
function passwordCheck() {

    var passwordValue = pwd_ip.value;
    var checkNumber = passwordValue.search(/[0-9]/g);
    var checkEnglish = passwordValue.search(/[a-z]/ig);

    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(passwordValue)) {
        alert('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
        return false;
    }
    if (checkNumber < 0 || checkEnglish < 0) {
        alert("숫자와 영문자를 혼용하여야 합니다.");
        return false;
    }
    if (/(\w)\1\1\1/.test(passwordValue)) {
        alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
        return false;
    }

    return true;
}