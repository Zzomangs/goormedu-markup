const nav_atags = document.querySelectorAll('.nav li a');
const nav_li = document.querySelectorAll('.nav li');
// nav_atags[0].onclick = () => {
//     location.href = 'class_home.html'; 
//     nav_atags[0].style.color = 'var(--primary)';
//     nav_atags[0].style.borderBottom = '1px solid var(--primary)';
// }
// nav_atags[1].onclick = () => {
//     location.href = 'class_info.html'; 
// }
// nav_atags[2].onclick = () => {
//     location.href = 'class-Q&A.html'; 
// }
// nav_atags[3].onclick = () => {
//     location.href = 'class-review.html'; 
// }

for(let i = 0; i < nav_li.length; i ++){
    const theme = document.querySelector(':root');
    const styles = getComputedStyle(theme);
    nav_li[i].onclick = () => {
        var primary = styles.getPropertyValue('--primary');
        if(i == 0){
            //nav_atags[i].style.color = primary;
            //nav_li[i].style.borderBottom = '1px solid primary';
            location.href = 'class_home.html';
        } else if(i == 1){
            location.href = 'class_info.html';
        } else if(i == 2) {
            location.href = 'class-Q&A.html';
        } else{
            location.href = 'class-review.html';
        }
        
    }
}