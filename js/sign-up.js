const email_ip = document.querySelector('.email-ip');
const pwd_ip = document.querySelector('.pwd-ip');
const repwd_ip = document.querySelector('.repwd-ip');
const name_ip = document.querySelector('.name-ip');

const email_btn = document.querySelector('.email-btn');
const submit_btn = document.querySelector('.submit-btn');

submit_btn.onkeypress = () => {
    if (window.event.keyCode == 13) {
        window.event.preventDefault();
        onsubmit();
    }
}

submit_btn.onclick = () => {
     onsubmit();
}

function onsubmit(){
    if(email_ip.value.length == 0){
        alert('이메일을 입력해주세요');
        email_ip.focus();
    } else if(email_ip.value.length != 0 && pwd_ip.value.length == 0){
        alert('비밀번호를 입력해주세요');
        pwd_ip.focus();
    }else if(pwd_ip.value.length != 0 && repwd_ip.value.length == 0){
        if(pwd_ip.value != repwd_ip.value){
            alert('비밀번호를 확인해주세요');
        } else{
            name_ip.focus();
        }
    } else if(repwd_ip.value.length != 0 && name_ip.value.length == 0){
        if(name_ip.value.length == 0){
            alert('이름을 입력해주세요');
        } else if(name_ip.value.length < 2){
            alert('이름을 확인해주세요');
        }
    }
}

/* 이메일 인증 버튼을 눌렀을 때 */
email_btn.onclick = () => {
    if(email_ip.value.length == 0){
        alert('인증을 해주세요');
        email_ip.focus();
    } else {
        let flag = email_check(email_ip.value);
        if(flag == true){
            email_ip.readOnly = true;
            pwd_ip.focus();
        } else{
            alert('잘못된 이메일 형식입니다.');
            email_ip.focus();
        }
    }
}

//이메일 정규식 체크
function email_check(email_ip) {
    var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(check_email.test(email_ip)) {
        return true;
    } else{
        return false;
    }
}
