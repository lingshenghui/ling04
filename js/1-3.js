var spans =document.querySelectorAll('span');
var imgs = document.querySelectorAll('img');

spans[0].onmouseover= function(){
    spans[1].className='';
    imgs[1].className='';
    //给选中的添加样式
    spans[0].className='activespan';
    imgs[0].className='activep';
}
spans[1].onmouseover= function(){
    spans[0].className='';
    imgs[0].className='';
    //给选中的添加样式
    spans[1].className='activespan';
    imgs[1].className='activep';
}
