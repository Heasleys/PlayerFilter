// ==UserScript==
// @name         PlayerFilter
// @namespace    Heasleys4hemp.PlayerFilter
// @version      1.0
// @description  Remove players in Hospital/Travel/Federal Jail from advanced search
// @author       Heasleys4hemp [1468764]
// @include     *.torn.com/userlist.php*
// ==/UserScript==

//icon15 = hospital, icon16 = jail, icon71 = traveling, icon70 = federal
var arrList = ['#icon15', '#icon16', '#icon71', '#icon70'];


const observer = new MutationObserver(() => {
    var i=0;
for (; i<arrList.length; i++) {
//const remover = $("div.userlist-wrapper > ul.user-info-list-wrap.bottom-round > li >div.level-icons-wrap > span.user-icons > span.icons-wrap.icons > ul#iconTray > li"+arrList[i]+"");
    const remover = $("li"+arrList[i]+"");
    remover.parent().parent().parent().parent().parent().hide();
}
});
//set observer to monitor changes in .content-wrapper div on page
const wrapper = document.querySelector('.content-wrapper');
observer.observe(wrapper, { subtree: true, childList: true });
